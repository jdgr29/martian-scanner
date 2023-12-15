"use client";
import React from "react";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import ProgressBar from "@/components/progressBar";
import { FaChevronDown } from "react-icons/fa6";
import ViewTicket from "@/components/viewTicketModal";
import { useDisclosure } from "@nextui-org/react";

export default function TicketDetail({ params }) {
  const ticketId = params?.ticketDetail;
  const dummyData = [{}, {}, {}, {}];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full">
      <div className="2xl:px-[3em] lg:px-[3em] p-0 bg-[#1E1E1E] h-full w-full">
        <h1 className="2xl:px-[3em] px-[1em] lg:px-[3em] my-3 text-white text-[2em]">
          Event Ticket
        </h1>

        <section className="w-full flex justify-center items-center">
          <div className="w-full flex justify-center ">
            <Image
              className="rounded-lg  mr-4"
              src="https://via.placeholder.com/50"
              objectFit="cover"
              width={180}
              height={180}
              alt="event image"
            />
            <div className="w-[48%] text-[white] flex flex-col gap-y-5">
              <h2>WSTRN Official After Party {"\n"} BLVD Manchester</h2>
              <div className="flex gap-x-3">
                <FaCalendarDays size={40} color="white" />
                <div>
                  <p>Decemeber 17, 2022</p>
                  <p>Saturday, 4:00 - 10:00 PM</p>
                </div>
              </div>
              <div className="flex gap-x-3">
                <IoLocation size={40} color="white" />
                <div>
                  <p>Building/Venue name</p>
                  <p>Location address</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-row px-4 justify-between items-center">
          <h2 className="w-full 2xl:px-[3em] px-[1em] lg:px-[3em] my-3 text-white text-[2em]">
            Tickets
          </h2>
          <p className="text-white text-[1.5em]">60/1000</p>
        </div>
        <div className="px-3 w-full flex flex-col gap-y-3  justify-center items-center">
          {dummyData.length !== 0 ? (
            dummyData.map((data) => (
              <div
                onClick={() => onOpenChange()}
                key={data}
                className="w-full flex justify-center items-center w-full gap-x-2"
              >
                <ViewTicket
                  onOpen={onOpen}
                  onOpenChange={onOpenChange}
                  isOpen={isOpen}
                  id={ticketId}
                />
                <div className="w-full flex-col flex gap-y-3">
                  <div className="flex w-full items-center text-[white] ">
                    <p>Ticket Title</p>
                    <FaChevronDown color="white" />
                  </div>
                  <ProgressBar value={20} />
                </div>
                <div className="w-full flex justify-end">
                  <p className="text-white text-[1em]">60/1000</p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>no tickets available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
