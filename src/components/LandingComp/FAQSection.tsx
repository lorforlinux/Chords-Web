import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Link from "next/link";
import Chords from "./Chords";

const FAQSection = () => {
  const FAQs: { question: string; answer: React.ReactNode }[] = [
    {
      question: `What is the purpose of Chords?`,
      answer: (
        <>
          <Chords /> is made to plot biopotential signals like ECG, EMG or EOG
          in real time. It is made for educational & research purposes.
        </>
      ),
    },
    {
      question: `What kind of data Chords collects?`,
      answer: (
        <>
          It collects the biopotential data from the device connected to the
          serial port. It does not collect any private data or cookies from the
          user.
        </>
      ),
    },
    {
      question: "How can I raise an issue, or suggest an improvement?",
      answer: (
        <>
          You can raise an issue or suggest an improvement on our{" "}
          <Link
            href="https://github.com/upsidedownlabs/Chords-Web/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            GitHub Issues page
          </Link>
          .
        </>
      ),
    },
    {
      question: "From where I can collect required hardware for Chords?",
      answer: (
        <>
          You can collect the required hardware from{" "}
          <Link
            href="https://linktr.ee/Upside_Down_Labs_Stores"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            Upside Down Labs Stores
          </Link>{" "}
          directly.
        </>
      ),
    },
    {
      question: "What are the limitations of Chords?",
      answer: (
        <>
          <Chords /> uses{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            web serial api
          </Link>{" "}
          to connect to the device port, which is only supported in chromium
          based broswers (Google chrome, Opera, Microsoft Edge).
        </>
      ),
    },
    {
      question: "For how long the data can be recorded?",
      answer: (
        <>
          For data recording we are using{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            IndexedDB
          </Link>
          , which allows to store upto 80% of the disk space of your laptop.
          <br />
        </>
      ),
    },
    {
      question: "What data format does Chords support?",
      answer: (
        <>
          Chords supports an array format: [A0, A1, ..., A5, counter], where
          A0-A5 are raw signal values and counter is a uint8_t (0-255). Array
          example : [468, 472, 463, 466, 465, 434, 10]. For implementation
          details, see our{" "}
          <Link
            href="https://github.com/upsidedownlabs/Chords-Arduino-Firmware"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            Arduino firmware code
          </Link>
          .
        </>
      ),
    },
    {
      question: "Which microcontrollers are supported by Chords?",
      answer: (
        <>
          Arduino Uno, Arduino Nano & Maker Uno are tested and supported by{" "}
          <Chords />.
        </>
      ),
    },
    {
      question:
        "Can I use any microcontroller other than the ones mentioned above?",
      answer: (
        <>
          Yes, you just have to make sure that microcontroller is providing a
          compatible data format to the software. By doing this you can use any
          microcontroller with <Chords />
        </>
      ),
    },
    {
      question: "How to check if I have dropped samples/data?",
      answer: (
        <>
          There are two checks for dropped samples, first is the counter value,
          if it is not incrementing by 1 then there are dropped samples. Second
          if data rate is below sampling rate. In both cases you can
          find how much data you lost in console.
        </>
      ),
    },
    {
      question: "How to check the drift of my recorded data?",
      answer: (
        <>
          If we record for 10 minutes, we should expect to capture 500 samples
          per second, which totals 500 * 60 * 10 = 300,000 samples. If the
          actual number of samples recorded is less than 300,000, this indicates
          a data drift. To verify the supported sampling rate of the board,
          please refer to our Arduino firmware code. By comparing the expected
          number of samples with the actual number recorded, we can calculate
          the extent of data drift.
        </>
      ),
    },
  ];
  return (
    <section className="w-full pb-8 md:pb-24 lg:pb-24 mx-auto lg:md:sm:px-0 px-4 md:px-24 lg:px-12">
      <div className="mx-auto mt-8 max-w-6xl xl:px-8 ">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wide  sm:text-3xl md:text-3xl text-left text-foreground pb-8">
            Frequently Asked Questions
          </h1>
        </div>
        <Accordion type="single" collapsible className=" max-w-7xl">
          {FAQs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <p className="text-lg font-semibold text-foreground/90 text-left">
                  {faq.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[1rem] text-muted-foreground">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
