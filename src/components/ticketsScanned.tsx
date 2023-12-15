import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TicketsScanned = ({ id, hour }: { id: number; hour: string }) => {
  return (
    <div className="flex rounded items-center gap-x-1 justify-evenly bg-[#0C4CAD] text-white p-2 my-1 mx-10 w-full">
      <div className="w-1/4 flex justify-center items-center border-r border-white pr-2">
        {id}
      </div>
      <div className="w-1/4 flex justify-center items-center border-r border-white pr-2">
        {hour}
      </div>
      <div className="w-1/4 flex justify-center items-center border-r border-white pr-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Accepted
        </button>
      </div>
      <div className="w-[5%] flex items-center justify-end">
        <FaArrowRight size={20} />
      </div>
    </div>
  );
};

export default TicketsScanned;
