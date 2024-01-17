import DashboardLayout from "@/components/DashboardLayout";
import EnrollCourseModal from "@/components/EnrollCourseModal";
import Pagination from "@/components/Pagination";
import {  Tabs } from "flowbite-react";
import { useState } from "react";

// const customTabTheme = {
//   tablist: {
//     base: "h-fit p-0 gap-4 flex text-white border",
//     tabitem: {
//         base: "border-t border-t-white text-xs text-white font-semibold w-fit h-fit p-0"

//     }
// },
// tabitemcontainer: {
//   base: "bg-red-300 text-white",
// },
// tabpanel: "bg-red-300 text-white",
// };

const CoursesPage = () => {
  const cardsPerPage = 9;
  const totalCards = 36;

  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);


  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const onPageChange = (page: number) => setCurrentPage(page);

  // Generate cards for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  // const endIndex = startIndex + cardsPerPage;
  const currentCards = Array.from(
    { length: cardsPerPage },
    (_, index) => `Card ${startIndex + index + 1}`
  );

  return (
    <DashboardLayout>
      <div className="flex w-full justify-between items-center">
        <p className="text-[#1C274C] text-2xl font-semibold">Courses</p>
        <div className="relative">
          <input className="px-4 py-3 w-[22.5rem] h-8 pl-10 flex shadow-none bg-white rounded-lg border-2 border-[#D9D9D9] self-stretch gap-2 items-center focus:outline-none" />
          <div className="absolute inset-y-0 left-0 px-4 flex items-center">
            <img src="/assets/icons/search-icon.svg" />
          </div>
        </div>
      </div>

      <Tabs
        // theme={customTabTheme}
        aria-label="Tabs with underline"
        style="underline"
        className="border-none focus:border-none"
      >
        <Tabs.Item
          className="bg-black w-full h-full"
          active
          title="In Progress"
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-full gap-4">
            {currentCards.map((_, index) => (
              // <Link to={"/"}>
                <div
                  key={index}
                  className="bg-custom-secondary-3 p-3 rounded-[0.625rem] h-auto w-full"
                >
                  <div className="flex h-full items-center">
                    <img
                      src="/assets/images/course-image.png"
                      className="w-[6.6875rem] h-[7.0625rem] rounded-[0.625rem]"
                    />
                    <div className="flex flex-col h-full px-4 justify-between">
                      <div className="flex w-full justify-between items-center ">
                        <div className="flex flex-col">
                          <p className="text-custom-primary-2 text-[0.625rem] font-normal">
                            Semester 1
                          </p>
                          <p className="text-custom-primary-2 text-[0.625rem] font-bold">
                            CSC 419
                          </p>
                        </div>
                        <button
                          onClick={() => setOpenModal(!openModal)}
                          className="rounded-[0.3125rem] h-fit bg-custom-accent-1 shadow-md text-center px-3"
                        >
                          <p className="text-custom-primary-1 text-[0.625rem] font-bold">Enroll</p>
                        </button>
                      </div>
                      <p className="text-custom-primary-1 font-bold text-sm">
                        Advances in Web, Mobile & Blockchain Technologies
                      </p>
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-4 h-4"
                          src="/assets/images/profile-image.png"
                        />
                        <p className="text-custom-primary-2 text-[0.625rem]">
                          Pius Onobhayedo, PhD.
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-[50%] bg-custom-secondary-2 rounded-full h-1.5 dark:bg-gray-700">
                          <div
                            className={`bg-custom-primary-1 h-1.5 w-[${60}%] rounded-full`}
                          ></div>
                        </div>
                        <span className="ml-2 text-custom-primary-1 text-[0.625rem]">
                          {60}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              // </Link>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Tabs.Item>
        <Tabs.Item
          className="w-fit h-fit p-0 m-0 rounded-none"
          title="Finished"
        ></Tabs.Item>
        <Tabs.Item
          className="w-fit h-fit p-0 m-0 rounded-none"
          title="Starred"
        ></Tabs.Item>
        <Tabs.Item
          className="w-fit h-fit p-0 m-0 rounded-none"
          title="Enrolled"
        ></Tabs.Item>
      </Tabs>
      <EnrollCourseModal openModal={openModal} setOpenModal={setOpenModal} />
    </DashboardLayout>
  );
};

export default CoursesPage;
