import { Button, Modal } from "flowbite-react";
import EnrollCourseSuccessModal from "./EnrollCourseSuccessModal";
import { useState } from "react";

interface EnrollCourseModalProps {
  openModal: boolean;
  setOpenModal: any;
}

const EnrollCourseModal = ({
  openModal,
  setOpenModal,
}: EnrollCourseModalProps) => {
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const handleEnrollCourse = () => {
    setOpenModal(false);
    setOpenStatusModal(true);
  };

  return (
    <>
      <Modal
        dismissible
        size={"2xl"}
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="border-0 text-[#1C274C] text-2xl font-semibold flex justify-center items-center w-full">
          Enroll in{" "}
        </Modal.Header>
        <Modal.Body className="py-0 overflow-y-visible">
          <div className="relative h-[14rem] rounded-[0.3125rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-contain bg-center"
              style={{ backgroundImage: 'url("/assets/icons/bannerBg.svg")' }}
            ></div>
            <div className="absolute inset-0">
              <div
                className="h-full"
                style={{
                  backgroundImage: `linear-gradient(to right,  rgba(230, 240, 237, 1) 0%, rgba(230, 240, 237, 1) calc(100% - 8rem), rgba(232, 234, 243, 0) 100%)`,
                }}
              >
                <div className="flex flex-col gap-3 px-6 py-4 h-full space-center">
                <div className="flex flex-row gap-4 items-center">
                  <p className="text-[#9E9E9E] text-center text-[0.75rem] font-medium ">
                    CSC 421
                  </p>
                  <div className="rounded-[0.8125rem] bg-[#40E0BA] px-3 py-1">
                    <p className="text-black text-center text-[0.625rem] leading-normal font-medium">
                      Elective
                    </p>
                  </div>
                </div>
                <p className="text-[#263238] text-[1.25rem] font-semibold leading-normal">
                  Introduction to Data Science and Engineering
                </p>
                <div className="flex gap-10">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-8 h-8 "
                    src="/assets/icons/profile-image1.svg"
                  />
                  <p className="text-custom-primary-2 text-[0.75rem] font-medium leading-normal">
                  Mr. Charles Igah
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="w-6 h-6" src="/assets/icons/mail.svg"
                    />
                    <p className="text-[#9E9E9E] text-xs font-medium leading-normal">cigah@pau.edu.ng </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[#263238] text-xs w-[4.75rem] font-medium leading-normal">Prerequisites</p>
                  <div className="flex gap-2">
                  <div className="rounded-[3rem] bg-[#9747FF] px-4 py-1">
                  <p className="text-[#fff] text-xs font-medium leading-normal">CSC 303</p>
                  </div>
                  <div className="rounded-[3rem] bg-[#9747FF] px-4 py-1">
                  <p className="text-[#fff] text-xs font-medium leading-normal">CSC 301</p>
                  </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="text-[#263238] text-xs font-medium leading-normal w-[4.75rem]">Duration</p>
                  <p className="text-[#263238] text-xs font-medium"> <span className="font-bold"> 3</span>  hours a week </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-center">
          <Button
            className="bg-custom-accent-1 hover:bg-custom-accent-2 text-white"
            onClick={handleEnrollCourse}
          >
            Enroll
          </Button>
        </Modal.Footer>
      </Modal>
      <EnrollCourseSuccessModal
        openModal={openStatusModal}
        setOpenModal={setOpenStatusModal}
      />
    </>
  );
};

export default EnrollCourseModal;
