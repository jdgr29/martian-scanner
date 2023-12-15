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

export default function Logout({ onOpen, isOpen, onOpenChange }) {
  return (
    <>
      <Modal
        className="w-[15em] h-[25em]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-[#474747]">
          {(onClose) => (
            <>
              <ModalBody className="flex mt-3 items-center bg-[#474747]">
                <Image
                  src="https://via.placeholder.com/200"
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt="profile pic"
                />
                <div className="flex justify-center flex-col items-center">
                  <p className="text-[white] text-md">Username</p>
                  <p className="text-[white] text-lg">Martian3435</p>
                </div>

                <div className="flex justify-center flex-col items-center">
                  <p className="text-[white] text-md">password</p>
                  <p className="text-[white] text-lg">****************</p>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  className="bg-[#686767] text-white"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Logout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
