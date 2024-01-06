import React from "react";
import { IoBag } from "react-icons/io5";
import { CiSquareInfo } from "react-icons/ci";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

const JobItem = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 my-2 grid grid-cols-10">
        <div className="text-3xl col-span-1 flex   justify-center  ">
          <IoBag />
        </div>

        <div className="col-span-9 gap-0 cursor-pointer" onClick={onOpen}>
          <p className="text-md font-bold">Full Stack Developer</p>

          <p className="text-sm ">Upleers</p>
          <p className="text-sm text-slate-500">
            <span>Uteep</span>, <span>PowerHouse</span>, <span>Chamba</span>
          </p>
          <div className="h-[1px] bg-slate-300 w-full my-1"></div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default JobItem;
