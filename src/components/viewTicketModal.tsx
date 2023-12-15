import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function ViewTicket({ onOpen, isOpen, onOpenChange, id }) {
  return (
    <>
      <Modal
        className="w-[20em] h-[35em]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-[#474747]">
          {(onClose) => (
            <>
              <ModalBody className="flex mt-3 bg-[#474747]">
                <h1 className="text-[white] text-[2em]">View Ticket</h1>
                <div className="flex justify-start flex-col items-start">
                  <p className="text-[white] text-sm">Username</p>
                  <p className="text-[white] text-lg">Martian12412</p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <p className="text-[white] text-sm">Ticket Name</p>
                  <p className="text-[white] text-sm">
                    WSTRN Official After Party @ BLVD Manchester VIP
                  </p>
                </div>
                <div className="flex  gap-x-4">
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[white] text-sm">Time Scanned</p>
                    <p className="text-slate-200">12:34 PM</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[white] text-sm">Data Scanned</p>
                    <p className="text-slate-200">16/05/23</p>
                  </div>
                </div>
                <div className="text-white">
                  <h2>Token ID</h2>
                  <p>2r312412412983012318</p>
                </div>

                <div className="flex  gap-x-4">
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[white] text-sm">Payment Method</p>
                    <p className="text-slate-200">Visa</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[white] text-sm">Data Scanned</p>
                    <p className="bg-[green] p-2 rounded-md text-slate-200">
                      Accepted
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  className="bg-[#686767] text-white"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
