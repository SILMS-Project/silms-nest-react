
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
  }

  return (
    <>
      <Modal dismissible size={"5xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="border-0 text-[#1C274C] text-2xl font-semibold flex justify-center items-center w-full">Enroll in </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="bg-custom-accent-1 text-white" onClick={handleEnrollCourse}>Enroll</Button>
        </Modal.Footer>
      </Modal>
      <EnrollCourseSuccessModal openModal={openStatusModal} setOpenModal={setOpenStatusModal} />

    </>
  );
};

export default EnrollCourseModal;
