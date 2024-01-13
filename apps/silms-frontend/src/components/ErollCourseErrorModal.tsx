import {  Modal } from "flowbite-react";

interface EnrollCourseErrorModalProps {
  openModal: boolean;
  setOpenModal: any;
}

const EnrollCourseErrorModal = ({
  openModal,
  setOpenModal,
}: EnrollCourseErrorModalProps) => {
  return (
    <>
    
      <Modal size={"sm"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="border-none pb-0"></Modal.Header>
        <Modal.Body  className="pt-0">
          <div className="flex gap-2 items-center">
            <img src="/assets/icons/course-enrollment-error-icon.svg"/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-sm text-custom-primary-1">Oops!</p>
              <p className="font-semibold text-xs text-black">An error was encountered while enrolling you for this course.</p>
              
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnrollCourseErrorModal;
