"use client";

import Connection from "./Connection";
import Steps from "./Steps";
import React, { useState, useCallback, useRef } from "react";
import Canvas from "./Canvas";
import Navbar from "./Navbar"; // Import the Navbar

export type BitSelection = "ten" | "twelve" | "fourteen" | "sixteen" | "auto";

const DataPass = () => {
  const [selectedBits, setSelectedBits] = useState<BitSelection>("auto"); // Selected bits
  const [isConnected, setIsConnected] = useState<boolean>(false); // Connection status
  const [isDisplay, setIsDisplay] = useState<boolean>(true); // Display state
  const [canvasCount, setCanvasCount] = useState<number>(1); // Number of canvases
  const [timeBase, setTimeBase] = useState<number>(4); // To track the current index to show
  const [currentSamplingRate, setCurrentSamplingRate] = useState<number>(0);
  const [channelCount, setChannelCount] = useState<number>(1); // Number of channels
  const canvasRef = useRef<any>(null); // Create a ref for the Canvas component
  let previousCounter: number | null = null; // Variable to store the previous counter value for loss detection
  const [Zoom, SetZoom] = useState<number>(1); // Number of canvases
  const [currentSnapshot, SetcurrentSnapshot] = useState<number>(0); // Number of canvases
  const pauseRef = useRef<boolean>(true);
  const handlePauseChange = (newPauseState: boolean) => {
    pauseRef.current = newPauseState;
  };
  const snapShotRef = useRef<boolean[]>(Array(6).fill(false));
  const datastream = useCallback((data: number[]) => {

    if (canvasRef.current) {
      canvasRef.current.updateData(data); // Assuming data is the new data to be displayed
    }
    if (previousCounter !== null) {
      // If there was a previous counter value
      const expectedCounter: number = (previousCounter + 1) % 256; // Calculate the expected counter value
      if (data[0] !== expectedCounter) {
        // Check for data loss by comparing the current counter with the expected counter
        console.warn(
          `Data loss detected in datapass! Previous counter: ${previousCounter}, Current counter: ${data[0]}`
        );
      }
    }
    previousCounter = data[0]; // Update the previous counter with the current counter
  }, []);
  return (
    <div className="flex flex-col h-screen m-0 p-0 bg-g ">
      <div className="bg-highlight">
        <Navbar isDisplay={isDisplay} />
      </div>
      {isConnected ? (
        <Canvas
          pauseRef={pauseRef}
          Zoom={Zoom}
          snapShotRef={snapShotRef}
          currentSnapshot={currentSnapshot}
          ref={canvasRef} // Pass the ref to the Canvas component
          selectedBits={selectedBits}
          isDisplay={isDisplay}
          canvasCount={canvasCount} // Pass canvas count
          timeBase={timeBase}
          currentSamplingRate={currentSamplingRate}
        />
      ) : (
        <Steps />
      )}
      <Connection
        onPauseChange={handlePauseChange}
        snapShotRef={snapShotRef}
        datastream={datastream}
        Connection={setIsConnected}
        selectedBits={selectedBits}
        setSelectedBits={setSelectedBits}
        isDisplay={isDisplay}
        setIsDisplay={setIsDisplay}
        setCanvasCount={setCanvasCount}
        canvasCount={canvasCount}
        setTimeBase={setTimeBase}
        timeBase={timeBase}
        setCurrentSamplingRate={setCurrentSamplingRate}
        currentSamplingRate={currentSamplingRate}
        channelCount={channelCount}
        SetZoom={SetZoom}
        SetcurrentSnapshot={SetcurrentSnapshot}
        currentSnapshot={currentSnapshot}
        Zoom={Zoom}
      />
    </div>
  );
};

export default DataPass;