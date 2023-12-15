"use client";
import React from "react";
import { BsUpcScan } from "react-icons/bs";
import CircularProgress from "@/components/circularProgressBar";

export default function ScanHistory() {
  return (
    <div className="2xl:px-[3em] lg:px-[3em] p-0 bg-[#1E1E1E] h-full w-full">
      <h1 className="text-[2em] 2xl:ml-0 lg:ml-0 ml-5 text-[white]">
        Dashboard
      </h1>
      <main className="2xl:px-3 gap-x-3 gap-y-3 w-full  lg:px-3 px-5 h-full 2xl:flex-row lg:flex-row flex-col  flex gap-x-3 flex-wrap">
        <div className="rounded-2xl flex p-3 justify-center items-center gap-x-3 2xl:w-[30em] lg:w-[30em] w-full h-[20em] bg-[#0C4CAD]">
          <BsUpcScan size={200} color="#76B5FF" />
          <h2 className="text-white text-xl">Tap to Scan {"\n"} Ticker</h2>
        </div>
        <div className=" flex flex-col p-3 justify-center items-center 2xl:h-[20em] lg:h-[20em] h-[15em] p-2 text-[white]  bg-[#232323] 2xl:w-[20em] lg:w-[20em] w-full  rounded-2xl">
          <p className="text-[2em]">Total Supply</p>
          <p className="text-[5em]">1000</p>
        </div>

        <div
          className=" flex flex-col p-3 justify-center items-center 2xl:h-[20em] lg:h-[20em]
         h-[15em] p-2 text-[white]  bg-[#232323] 2xl:w-[20em] lg:w-[20em] w-full  rounded-2xl"
        >
          <p className="text-[2em]">Total Scanned</p>
          <CircularProgress progress={89} />
        </div>
        <div className=" flex flex-col p-3 justify-center items-center 2xl:h-[20em] lg:h-[20em] h-[15em] p-2 text-[white]  bg-[#232323] 2xl:w-[20em] lg:w-[20em] w-full  rounded-2xl">
          <p className="text-[2em]">Accepted</p>
          <CircularProgress isGreen={true} progress={45} />
        </div>
      </main>
      <div></div>
    </div>
  );
}
