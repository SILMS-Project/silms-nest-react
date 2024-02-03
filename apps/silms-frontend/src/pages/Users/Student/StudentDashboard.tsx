import CalenderIcon from "@/assets/icons/CalenderIcon";
import LineIcon from "@/assets/icons/LineIcon";
import DashboardLayout from "@/components/DashboardLayout";
import PageLoader from "@/components/PageLoader";
import ScheduleItemsLabel from "@/components/ScheduleItemsLabel";
import ScheduleUnit from "@/components/ScheduleUnit";
import ConditionalRoute from "@/routes/ConditionalRoute";
import { Role, UserStateProps } from "@/store/interfaces/user.interface";
import {
  useGetCGPAQuery,
  useGetScheduleByProgramAndLevelQuery,
  useGetStudentCoursesQuery,
  useLoadUserQuery,
} from "@/store/slices/appSlice";
import { RootState } from "@/store/store";
import { getRandomColor, scheduleUnits } from "@/utils/colorUtils";
import { Datepicker } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [isSelectedSchedule, setIsSelectedSchedule] = useState<string>("1");

  const {
    data: loadUserData,
    isLoading: loadUserIsLoading,
    error: loadUserError,
  } = useLoadUserQuery();

  const authSlice = useSelector<RootState, UserStateProps>(
    (state) => state.auth.user
  );

  const { data: cgpaData, error } = useGetCGPAQuery(
    authSlice?.student?.id || ""
  );

  console.log(error);

  const { data: scheduleData, isLoading: isLoadingScheduleData } =
    useGetScheduleByProgramAndLevelQuery({
      programId: authSlice?.student?.programme || "",
      level: authSlice?.student?.level || "",
    });

  const { data: studentCoursesData, isLoading: isLoadingStudentCourses } =
    useGetStudentCoursesQuery(authSlice?.student?.id || "");

  // Create an array of days of the week
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Calculate corresponding dates for each day in the week
  const currentDate = new Date();
  const correspondingDates = daysOfWeek.map((_, index) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + index);
    return date.getDate();
  });

  // Create schedule labels based on the days of the week and the number of classes for each day
  const scheduleLabels = scheduleData
    ? daysOfWeek.map((day, index) => {
        const matchingSchedules = scheduleData?.data?.filter(
          (schedule: any) => schedule.dayOfWeek === day
        );
        const sortedSchedules = matchingSchedules.sort((a: any, b: any) =>
          a.startTime.localeCompare(b.startTime)
        );
        const smallestTime =
          sortedSchedules.length > 0 ? sortedSchedules[0].startTime : "";
        const highestTime =
          sortedSchedules.length > 0
            ? sortedSchedules[sortedSchedules.length - 1].endTime
            : "";

        return {
          id: `${index + 1}`,
          day: day,
          date: correspondingDates[index].toString(),
          classes: matchingSchedules.length.toString(),
          time: `${smallestTime.replace(/^0/, "")} - ${highestTime.replace(
            /^0/,
            ""
          )}`,
        };
      })
    : null;

  const sumOfUnits = studentCoursesData?.reduce(
    (totalUnits: any, studentCourse: any) =>
      totalUnits + studentCourse.course.unit,
    0
  );

  return (
    <ConditionalRoute redirectTo="/login" condition={authSlice ? true : false}>
      <ConditionalRoute
        redirectTo="/404"
        condition={authSlice?.auth?.role === Role.Student ? true : false}
      >
        <DashboardLayout>
          {isLoadingScheduleData || isLoadingStudentCourses ? (
            <PageLoader />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <div className="flex items-center w-full">
                  <div className="font-bold text-black text-[1.25rem] leading-normal ">
                    {`Hi, ${loadUserData?.user?.firstName || ""} ${
                      loadUserData?.user?.lastName || ""
                    }`}
                  </div>
                  <img
                    className="w-[1.5rem] md:w-[1.875rem] h-[1.5rem] md:h-[1.875rem]"
                    src="/assets/icons/waving-hand-skin-4-svgrepo-com.svg"
                  />
                </div>
                <div className="font-bold text-[#969696] text-[0.75rem] leading-normal">
                  Welcome back
                </div>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-7 gap-4">
                <div className="flex flex-col lg:col-span-5">
                  <div className="flex flex-col gap-8">
                    <div className=" w-full gap-4 grid grid-cols-2 md:grid-cols-4">
                      <div className="h-[4.5rem] flex gap-4 rounded-[0.625rem] px-3 py-2 items-center md:px-6 md:py-4 bg-[#E6F0ED]">
                        <img
                          className="w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem]"
                          src="\assets\icons\gpa-icon.svg"
                        />
                        <div className="flex flex-col">
                          <p className="text-[#000000] text-[1rem] md:text-[1.125rem] font-bold leading-normal">
                            4.05
                          </p>
                          <p className="text-[#969696] text-[0.675rem] md:text-[0.75rem] font-semibold leading-normal">
                            CGPA
                          </p>
                        </div>
                      </div>
                      <div className="h-[4.5rem] flex gap-4 rounded-[0.625rem] px-3 py-2 items-center md:px-6 md:py-4 bg-[#E6F0ED]">
                        <img
                          className="w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem]"
                          src="\assets\icons\enrolled_courses.svg"
                        />
                        <div className="flex flex-col">
                          <p className="text-[#000000] text-[1rem] md:text-[1.125rem] font-bold leading-normal">
                            {studentCoursesData?.length || ""}
                          </p>
                          <p className="text-[#969696] text-[0.675rem] md:text-[0.75rem] font-semibold leading-normal">
                            Enrolled Courses
                          </p>
                        </div>
                      </div>
                      <div className=" h-[4.5rem] flex gap-4 rounded-[0.625rem] px-3 py-2 items-center md:px-6 md:py-4 bg-[#E6F0ED]">
                        <img
                          className="w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem]"
                          src="/assets/icons/units-done-icon.svg"
                        />

                        <div className="flex flex-col">
                          <p className="text-[#000000] text-[1rem] md:text-[1.125rem] font-bold leading-normal">
                            {sumOfUnits}
                          </p>
                          <p className="text-[#969696] text-[0.675rem] md:text-[0.75rem] font-semibold leading-normal">
                            Units Done
                          </p>
                        </div>
                      </div>
                      <div className="h-[4.5rem] flex gap-4 rounded-[0.625rem] px-3 py-2 items-center md:px-6 md:py-4 bg-[#E6F0ED]">
                        <img
                          className="w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem]"
                          src="/assets/icons/outstanding-fees-icon.svg"
                        />
                        <div className="flex flex-col">
                          <p className="text-[#000000] text-[1rem] md:text-[1.125rem] font-bold leading-normal">
                            0
                          </p>
                          <p className="text-[#969696] text-[0.625rem] md:text-[0.75rem] font-semibold leading-normal">
                            Outstanding Fees
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 space-x-6 sm:space-x-8 w-full">
                      <div className="col-span-2 flex flex-col gap-2">
                        {scheduleLabels?.map((schedule) => (
                          <ScheduleItemsLabel
                            key={schedule.id}
                            id={schedule.id}
                            day={schedule.day}
                            date={schedule.date}
                            classes={schedule.classes}
                            time={schedule.time}
                            isSelectedSchedule={isSelectedSchedule}
                            setIsSelectedSchedule={setIsSelectedSchedule}
                          />
                        ))}
                      </div>

                      {/* {scheduleUnits.length > 3 && (
                      // Code to be rendered if the condition is true

                    )} */}

                      <div className=" col-span-3 sm:col-span-5 md:col-span-6 grid md:grid-cols-2 gap-4  h-fit">
                        {scheduleData &&
                          scheduleLabels &&
                          scheduleData.data.map(
                            ({
                              id,
                              dayOfWeek,
                              course,
                              startTime,
                              endTime,
                              room,
                            }: any) =>
                              dayOfWeek ===
                                scheduleLabels[parseInt(isSelectedSchedule) - 1]
                                  ?.day && (
                                <ScheduleUnit
                                  key={id}
                                  courseCode={course.courseCode}
                                  lecturerName={`${course.lecturerCourses[0].lecturer.user.firstName} ${course.lecturerCourses[0].lecturer.user.lastName}`}
                                  startTime={startTime.replace(/^0/, "")} // Remove leading zero
                                  endTime={endTime.replace(/^0/, "")} // Remove leading zero
                                  color={getRandomColor()}
                                />
                              )
                          )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 ">
                      <p className="text-[#000] text-[0.875rem] font-bold leading-normal">
                        {" "}
                        Upcoming Assessments (3)
                      </p>

                      <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                          <thead className="text-xs font-bold text-[#8D8D92]">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                #
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Homework Title
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Due date
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Status
                              </th>
                              <th scope="col" className="px-6 py-3"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="px-3 py-2 sm:px-6 sm:py-4">
                                <img
                                  className="w-[1.5625rem] h-[1.5625rem]"
                                  src="/assets/icons/description-icon.svg"
                                />
                              </td>
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                              >
                                <div className="flex flex-col gap-1">
                                  <p className="text-[#000] text-[0.75rem] font-bold leading-normal">
                                    Regression Exercise
                                  </p>
                                  <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">
                                    CSC 421
                                  </p>
                                </div>
                              </th>

                              <td className="px-6 py-4">
                                <div className="flex flex-col gap-1 whitespace-nowrap">
                                  <p className="text-[#000] text-[0.75rem] font-bold leading-normal">
                                    2 Dec 2023
                                  </p>
                                  <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">
                                    14 days left
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <img
                                  className="w-[1.5625rem] h-[1.5625rem]"
                                  src="/assets/icons/clock-loader-icon.svg"
                                />
                              </td>
                              <td className="px-6 py-4 ">
                                <button
                                  className="px-4 py-1 flex whitespace-nowrap justify-center items-center rounded-[0.3125rem] bg-[#7FEAD1]"
                                  style={{
                                    boxShadow:
                                      "4px 4px 6px 0px rgba(0, 0, 0, 0.15)",
                                  }}
                                >
                                  <p className=" text-[#063760] text-[0.75rem] font-bold leading-normal">
                                    View Exercise
                                  </p>
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="px-3 py-2 sm:px-6 sm:py-4">
                                <img
                                  className="w-[1.5625rem] h-[1.5625rem]"
                                  src="/assets/icons/description-icon.svg"
                                />
                              </td>
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                              >
                                <div className="flex flex-col gap-1">
                                  <p className="text-[#000] text-[0.75rem] font-bold leading-normal">
                                    Regression Exercise
                                  </p>
                                  <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">
                                    CSC 421
                                  </p>
                                </div>
                              </th>

                              <td className="px-6 py-4">
                                <div className="flex flex-col gap-1 whitespace-nowrap">
                                  <p className="text-[#000] text-[0.75rem] font-bold leading-normal">
                                    2 Dec 2023
                                  </p>
                                  <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">
                                    14 days left
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <img
                                  className="w-[1.5625rem] h-[1.5625rem]"
                                  src="/assets/icons/clock-loader-icon.svg"
                                />
                              </td>
                              <td className="px-6 py-4 ">
                                <button
                                  className="px-4 py-1 flex whitespace-nowrap justify-center items-center rounded-[0.3125rem] bg-[#7FEAD1]"
                                  style={{
                                    boxShadow:
                                      "4px 4px 6px 0px rgba(0, 0, 0, 0.15)",
                                  }}
                                >
                                  <p className=" text-[#063760] text-[0.75rem] font-bold leading-normal">
                                    View Exercise
                                  </p>
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="px-3 py-2 sm:px-6 sm:py-4">
                                <img
                                  className="w-[1.5625rem] h-[1.5625rem]"
                                  src="/assets/icons/description-icon.svg"
                                />
                              </td>
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                              >
                                <div className="flex flex-col gap-1">
                                  <p className="text-[#000] text-[0.75rem] font-bold leading-normal">
                                    Regression Exercise
                                  </p>
                                  <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">
                                    CSC 421
                                  </p>
                                </div>
                              </th>

                              <td className="px-6 py-4">
                                <div className="flex flex-col gap-1 whitespace-nowrap">
                                  <p className="text-[#000] text-[0.75rem] font-bold leading-normal">
                                    2 Dec 2023
                                  </p>
                                  <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">
                                    14 days left
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <img
                                  className="w-[1.5625rem] h-[1.5625rem]"
                                  src="/assets/icons/clock-loader-icon.svg"
                                />
                              </td>
                              <td className="px-6 py-4 ">
                                <button
                                  className="px-4 py-1 flex whitespace-nowrap justify-center items-center rounded-[0.3125rem] bg-[#7FEAD1]"
                                  style={{
                                    boxShadow:
                                      "4px 4px 6px 0px rgba(0, 0, 0, 0.15)",
                                  }}
                                >
                                  <p className=" text-[#063760] text-[0.75rem] font-bold leading-normal">
                                    View Exercise
                                  </p>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-black text-[0.875rem] font-bold">
                          Recently Accessed courses
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3  h-full gap-4">
                        {studentCoursesData
                          ?.slice(0, 3)
                          ?.map((studentCourse: any, index: number) => (
                            <Link to={`/courses/${studentCourse?.course?.id}`}>
                              <div
                                key={index}
                                className="bg-custom-secondary-3 rounded-[0.625rem] h-auto w-full"
                              >
                                <div className="flex flex-col h-full sm:items-center">
                                  <img
                                    src="/assets/images/course-image1.png"
                                    className="w-full h-[7.0625rem] rounded-t-[0.625rem]"
                                  />

                                  <div className="flex flex-col h-full p-4 justify-between leading-normal">
                                    <div className="flex items-center">
                                      <div className="w-[70%] sm:w-full bg-custom-secondary-2 rounded-full h-1.5 dark:bg-gray-700">
                                        <div
                                          className={`bg-custom-primary-1 h-1.5 w-[${studentCourse.progress}] rounded-full`}
                                        ></div>
                                      </div>
                                      <span className="ml-2 text-custom-primary-1 text-[0.625rem]">
                                        {studentCourse.progress}%
                                      </span>
                                    </div>
                                    <p className="text-custom-primary-2 text-[0.625rem] font-bold">
                                      {studentCourse?.course.courseCode}
                                    </p>
                                    <p className="text-custom-primary-1 font-bold text-sm">
                                      {studentCourse?.course?.courseTitle}
                                    </p>
                                    <div className="flex gap-2 items-center">
                                      <img
                                        className="w-4 h-4"
                                        src="assets/images/profile-image.png"
                                      />
                                      <p className="text-custom-primary-2 text-[0.625rem]">
                                        {studentCourse?.course
                                          ?.lecturerCourses[0]?.lecturer?.user
                                          .firstName +
                                          " " +
                                          studentCourse.course
                                            ?.lecturerCourses[0]?.lecturer?.user
                                            .lastName}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:col-span-2 lg:relative">
                  <div className="w-full lg:flex hidden">
                    <img
                      src="/assets/icons/SILMS_DashB_Illustration.svg"
                      alt="Dashboard Illustartion"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col bg-white border-[#666666] shadow-md rounded-md lg:absolute lg:top-[200px] h-50 w-full lg:left-0">
                    <div className="flex justify-center py-4">
                      <LineIcon />
                    </div>
                    <div className="flex flex-row justify-center">
                      <div className="flex justify-end py-1 pr-2">
                        <CalenderIcon />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-[0.9rem]">
                          Year 1 Semester 1
                        </p>
                        <p className="leading-none text-[#969696] text-[0.6rem] font-bold">
                          2023/2024 Session
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <p className="font-bold text-[0.7rem]">Week 7</p>
                    </div>
                    <Datepicker
                      className="flex w-full justify-center shadow-none pb-10 overflow-x-auto"
                      inline={true}
                      showClearButton={false}
                      showTodayButton={false}
                      // title={"Week 7"}
                      theme={{
                        views: {
                          days: {
                            items: {
                              item: {
                                selected:
                                  "bg-[#40E0BA] text-white rounded-full hover:border-1 hover:border-[#40E0BA]",
                              },
                            },
                          },
                        },
                        popup: {
                          root: {
                            // inline: "",
                            base: "",
                            inner: "",
                          },
                          header: {
                            selectors: {
                              button: {
                                view: "",
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </DashboardLayout>
      </ConditionalRoute>
    </ConditionalRoute>
  );
};

export default StudentDashboard;
