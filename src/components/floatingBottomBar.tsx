"use client";
import React from "react";
import { FaHistory, FaLayerGroup } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import {
  useRouter,
  useSearchParams,
  usePathname,
  useParams,
} from "next/navigation";
const FloatingNavbar = () => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();

  console.log("params", params);
  console.log("path name", path);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[16em] h-[3.5em] bg-[#0C4CAD] border border-gray-300 flex justify-around items-center rounded-3xl">
      <div
        onClick={() => router.push("dashboard/scanHistory")}
        className={`p-2 ${
          path === "/dashboard/scanHistory" ? "bg-[#2B49]" : null
        }  rounded-full`}
      >
        <FaHistory className="text-2xl text-white cursor-pointer" />
      </div>
      <div
        onClick={() => router.push("/dashboard")}
        className={`p-2 ${
          path === "/dashboard" ? "bg-[#2B49]" : null
        }  rounded-full`}
      >
        <MdDashboard className="text-2xl text-white cursor-pointer" />
      </div>
      <div className="p-2">
        <FaLayerGroup className="text-2xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default FloatingNavbar;
