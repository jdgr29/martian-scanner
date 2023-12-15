"use client";
import React from "react";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";
import Logout from "./modalLogout";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <nav className="2xl:px-[3em] lg:px-[3em] px-[1em] bg-[#1E1E1E] p-4 flex items-center justify-between">
        <div className="flex w-full justify-between items-center">
          <div
            onClick={() => router.push("/dashboard")}
            className="text-white flex gap-x-2 items-center"
          >
            <div className="text-[2em] font-bold">Naitram</div>
            <p>|</p>
            <div>QR Scanner</div>
          </div>
          <div onClick={() => onOpenChange()}>
            <Image
              className="rounded-full  mr-4"
              src="https://via.placeholder.com/50"
              alt="User Avatar"
              width={62}
              height={62}
            />
          </div>
        </div>
      </nav>
      <Logout onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default Navbar;
