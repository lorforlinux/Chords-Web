"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Chords from "./Chords";
import { Button } from "../../components/ui/button";

const Stack = () => {
  const { theme } = useTheme();
  const stack = [
    {
      name: "Next.js",
      logo:
        theme === "light"
          ? "./assets/dark/next-js.png"
          : "./assets/light/nextjs.svg",
      url: "https://nextjs.org/",
      description: "The fantastic React framework for building web apps.",
    },
    {
      name: "Tailwind CSS",
      logo: "./assets/tailwindcss.svg",
      url: "https://tailwindcss.com/",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "shadcn/ui",
      logo:
        theme === "light"
          ? "./assets/dark/ShadcnUI.png"
          : "./assets/light/ShadcnUI.png",
      url: "https://ui.shadcn.com",
      description: "Built with amazing components from shadcn/ui.",
    },
    {
      name: "WebGl Plot",
      logo: "./assets/logo.svg",
      url: "https://github.com/danchitnis/webgl-plot",
      description: "Charts for plotting the data real time.",
    },
    {
      name: "Web Serial API",
      logo:
        theme === "light"
          ? "./assets/dark/favicon.ico"
          : "./assets/light/favicon.ico",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API",
      description: "For connecting to the serial port of the device.",
    },
    {
      name: "IndexedDB API",
      logo:
        theme === "light"
          ? "./assets/dark/favicon.ico"
          : "./assets/light/favicon.ico",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
      description: "IndexedDB is a low-level API for client-side storage.",
    },
  ];
  return (
    <section className="w-full pt-12">
  <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 sm:px-4 md:px-14 lg:px-16 xl:px-24 max-w-7xl ">
    
    {/* Left Side (Text Content) */}
    <div className="space-y-6 text-left ">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        <span className="block"> {/* Use block to force line break */}
        <Chords /> is
      </span>
      <span className="block"> {/* Use block to force line break */}
        open-source,
      </span>
      <span className="block"> {/* Use block to force line break */}
        and free to use.
      </span>
        </h2>
        <p className="max-w-md pt-14 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          It is powered by the following technologies, making it super fast, efficient, and reliable.
        </p>
      </div>
      <div className="pt-14 w-60">
      <Link href="https://github.com/upsidedownlabs/Chords-Web" target="_blank">
      <Button className="flex items-center w-full justify-center py-2 px-6 sm:py-3 sm:px-8 rounded-full  font-semibold">
        <span>Source Code</span>
      </Button>
      </Link>
      </div>
    </div>

    {/* Right Side (Images) */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
  {stack.map((item, index) => (
    <Link
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-start p-6 space-x-4 transition-transform transform rounded-lg"
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={60}
        height={60}
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </Link>
  ))}
</div>


    
  </div>
</section>


  );
};

export default Stack;
