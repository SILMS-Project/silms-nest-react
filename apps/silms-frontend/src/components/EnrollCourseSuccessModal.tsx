import {  Modal } from "flowbite-react";

interface EnrollCourseSuccessModalProps {
  openModal: boolean;
  setOpenModal: any;
}

const EnrollCourseSuccessModal = ({
  openModal,
  setOpenModal,
}: EnrollCourseSuccessModalProps) => {
  return (
    <>
    
      <Modal size={"sm"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="border-none pb-0"></Modal.Header>
        <Modal.Body  className="pt-0">
          <div className="flex gap-2 items-center">
            <img src="/assets/icons/course-enrollment-success-icon.svg"/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-sm text-custom-primary-1">Congrats!</p>
              <p className="font-semibold text-xs text-black">You have successfully enrolled for this course.</p>
              
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnrollCourseSuccessModal;
