"use client";
import React from "react";
import TicketsScanned from "@/components/ticketsScanned";
import { IoFilterSharp } from "react-icons/io5";

export default function Dashboard() {
  const dummyData = [
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
    {
      id: Math.floor(Math.random() * 100),
      hour: "12:00 PM",
    },
  ];
  return (
    <>
      <div className="m-0 p-0 bg-[#1E1E1E] h-full w-screen">
        <div className="2xl:px-[20%] lg:px-[20%] px-[5%] w-full flex justify-between items-center px-5 ">
          <h1 className="text-[white] text-[2em]">Scan History</h1>
          <div className="flex gap-x-1 items-center">
            <p className="text-[white]">Sort by</p>
            <IoFilterSharp size={20} color="#2B75E2" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <main className="  2xl:w-[70%] lg:w-[70%] md:w-[80%] w-full flex flex-col justify-center items-center px-5">
            <header className="w-full flex justify-around items-center text-slate-200 my-6">
              <p>Username</p>
              <p>Time Scanned</p>
              <p>Status</p>
              <p>View</p>
            </header>
            {dummyData.length !== 0 ? (
              dummyData.map((data) => (
                <TicketsScanned key={data.id} id={data.id} hour={data.hour} />
              ))
            ) : (
              <p> There are no tickets 😢 Scanned</p>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
