import DashboardLayout from "../../components/DashboardLayout";
import EnrollCourseModal from "../../components/EnrollCourseModal";
import PageLoader from "../../components/PageLoader";
import Pagination from "../../components/Pagination";
import ConditionalRoute from "../../routes/ConditionalRoute";
import { Role, UserStateProps } from "../../store/interfaces/user.interface";
import {
  useGetCoursesQuery,
  useGetStudentCoursesQuery,
} from "../../store/slices/appSlice";
import { RootState } from "../../store/store";
import { Tabs } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const authSlice = useSelector<RootState, UserStateProps>(
    (state) => state.auth.user
  );

  const { data: courseData, isLoading } = useGetCoursesQuery();

  const { data: studentCoursesData, isLoading: isLoadingStudentCourses } =
    useGetStudentCoursesQuery(authSlice?.student?.id || "");

  const cardsPerPage = 9;
  const totalCards = courseData?.length || 0;

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const onPageChange = (page: number) => setCurrentPage(page);

  // Generate cards for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCourses = courseData?.slice(startIndex, endIndex);

  return (
    <ConditionalRoute redirectTo="/login" condition={authSlice ? true : false}>
      <ConditionalRoute
        redirectTo="/404"
        condition={authSlice?.auth?.role === Role.Student ? true : false}
      >
    <DashboardLayout>
      <div className="flex flex-col md:flex-row w-full justify-between gap-2 md:gap-0 md:items-center">
        <p className="text-[#1C274C] text-2xl font-semibold">Courses</p>
        <div className="relative">
          <input className="px-4 py-3 md:w-[22.5rem] w-full h-8 pl-10 flex shadow-none bg-white rounded-lg border-2 border-[#D9D9D9] self-stretch gap-2 items-center focus:outline-none" />
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
          {isLoading ? (
            <PageLoader />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-full gap-4">
              {currentCourses?.map((course: any, index: number) => {
                // Check if the current course is in the student's enrolled courses
                const isEnrolled = studentCoursesData?.some(
                  (enrolledCourse: any) =>
                    enrolledCourse?.course?.id === course.id
                );

                return (
                  <div
                    key={index}
                    className="bg-custom-secondary-3 p-3 rounded-[0.625rem] h-full w-full"
                  >
                    <div className="flex h-full w-full items-center">
                      <img
                        src="/assets/images/course-image.png"
                        className="w-[6.6875rem] h-[7.0625rem] rounded-[0.625rem]"
                      />
                      <div className="flex flex-col h-full w-full px-4 justify-between">
                        <div className="flex w-full justify-between items-center ">
                          <div className="flex flex-col">
                            <p className="text-custom-primary-2 text-[0.625rem] font-normal">
                              Semester {course?.semester}
                            </p>
                            <p className="text-custom-primary-2 text-[0.625rem] font-bold">
                              {course?.courseCode}
                            </p>
                          </div>
                          <button
                            onClick={() => setOpenModal(!openModal)}
                            disabled={isEnrolled}
                            className={`rounded-[0.3125rem] h-fit ${
                              isEnrolled
                                ? "bg-custom-accent-1"
                                : "bg-custom-accent-2"
                            }  shadow-md text-center px-3`}
                          >
                            <p className="text-custom-primary-1 text-[0.625rem] font-bold">
                              {isEnrolled ? "Enrolled" : "Enroll"}
                            </p>
                          </button>
                        </div>
                        <p className="text-custom-primary-1 font-bold text-sm">
                          {course?.courseTitle}
                        </p>
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-4 h-4"
                            src="/assets/images/profile-image.png"
                          />
                          <p className="text-custom-primary-2 text-[0.625rem]">
                            {course?.lecturerCourses[0]?.lecturer?.user
                              .firstName +
                              " " +
                              course?.lecturerCourses[0]?.lecturer?.user
                                .lastName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Tabs.Item>
        <Tabs.Item
          className="w-fit h-fit p-0 m-0 rounded-none"
          title="Enrolled"
        >
          {isLoadingStudentCourses ? (
            <PageLoader />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-full gap-4">
              {studentCoursesData &&
                studentCoursesData?.map((studentCourse: any, index: number) => (
                  <Link to={`/courses/${studentCourse?.course?.id}`}>
                    <div
                      key={index}
                      className="bg-custom-secondary-3 h-full p-3 rounded-[0.625rem] w-full"
                    >
                      <div className="flex h-full w-full items-center">
                        <img
                          src="/assets/images/course-image.png"
                          className="w-[6.6875rem] h-[7.0625rem] rounded-[0.625rem]"
                        />
                        <div className="flex flex-col h-full w-full px-4 justify-between">
                          <div className="flex w-full justify-between items-center ">
                            <div className="flex flex-col">
                              <p className="text-custom-primary-2 text-[0.625rem] font-normal">
                                Semester {studentCourse?.course?.semester}
                              </p>
                              <p className="text-custom-primary-2 text-[0.625rem] font-bold">
                                {studentCourse?.course.courseCode}
                              </p>
                            </div>
                            <button
                              onClick={() => setOpenModal(!openModal)}
                              disabled
                              className={`rounded-[0.3125rem] h-fit bg-custom-accent-1 shadow-md text-center px-3`}
                            >
                              <p className="text-custom-primary-1 text-[0.625rem] font-bold">
                                {"Enrolled"}
                              </p>
                            </button>
                          </div>
                          <p className="text-custom-primary-1 font-bold text-sm">
                            {studentCourse?.course?.courseTitle}
                          </p>
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-4 h-4"
                              src="/assets/images/profile-image.png"
                            />
                            <p className="text-custom-primary-2 text-[0.625rem]">
                              {studentCourse?.course?.lecturerCourses[0]
                                ?.lecturer?.user.firstName +
                                " " +
                                studentCourse.course?.lecturerCourses[0]
                                  ?.lecturer?.user.lastName}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-[50%] bg-custom-secondary-2 rounded-full h-1.5 dark:bg-gray-700">
                              <div
                                className={`bg-custom-primary-1 h-1.5 w-[${studentCourse.progress}%] rounded-full`}
                              ></div>
                            </div>
                            <span className="ml-2 text-custom-primary-1 text-[0.625rem]">
                              {studentCourse.progress}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </Tabs.Item>
        <Tabs.Item
          className="w-fit h-fit p-0 m-0 rounded-none"
          title="Finished"
        ></Tabs.Item>
        {/* <Tabs.Item
          className="w-fit h-fit p-0 m-0 rounded-none"
          title="Starred"
        ></Tabs.Item> */}
      </Tabs>
      <EnrollCourseModal openModal={openModal} setOpenModal={setOpenModal} />
    </DashboardLayout>
    </ConditionalRoute>
    </ConditionalRoute>
  );
};

export default CoursesPage;
