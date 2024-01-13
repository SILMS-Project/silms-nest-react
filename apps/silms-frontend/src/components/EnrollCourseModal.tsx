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
        <Modal.Body className="py-0">
          <div className="relative h-[8.6875rem] rounded-[0.3125rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-contain bg-center"
              style={{ backgroundImage: 'url("/assets/icons/bannerBg.svg")' }}
            ></div>
            <div className="absolute inset-0">
              <div
                className="h-full"
                style={{
                  backgroundImage: `linear-gradient(to right,  rgba(230, 240, 237, 1) 0%, rgba(230, 240, 237, 1) calc(100% - 10rem), rgba(232, 234, 243, 0) 100%)`,
                }}
              >
                {/* //TODO:  Implement the course enrollment modal banner designs*/}
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
