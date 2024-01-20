import CalenderIcon from "@/assets/icons/CalenderIcon";
import LineIcon from "@/assets/icons/LineIcon";
import DashboardLayout from "@/components/DashboardLayout";
import ScheduleItem from "@/components/ScheduleItem";
import ScheduleItemsLabel from "@/components/ScheduleItemsLabel";
import ScheduleUnit from "@/components/ScheduleUnit";
import {
  ScheduleItems,
  getRandomColor,
  scheduleUnits,
} from "@/utils/colorUtils";
import { Datepicker } from "flowbite-react";
import { useState } from "react";

const StudentDashboard = () => {
  const [isSelectedSchedule, setIsSelectedSchedule] = useState<string>("1");

  const scheduleLabels = [
    {
      id: "1",
      day: "Mon",
      date: "10",
      classes: "4",
      time: "8:00 AM - 12:00 PM",
    },
    {
      id: "2",
      day: "Tue",
      date: "11",
      classes: "3",
      time: "1:00 PM - 4:00 PM",
    },
    {
      id: "3",
      day: "Wed",
      date: "12",
      classes: "5",
      time: "9:30 AM - 2:30 PM",
    },
    {
      id: "4",
      day: "Thu",
      date: "13",
      classes: "2",
      time: "10:00 AM - 12:00 PM",
    },
    {
      id: "5",
      day: "Fri",
      date: "14",
      classes: "6",
      time: "8:00 AM - 3:00 PM",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="bg-neutral-600 h-14 w-full">
          {/* //TODO: Implement student dashboard user greeting designs*/}
        </div>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <div className="flex flex-col gap-8">
              <div className="h-[4.5rem] w-full gap-4 grid grid-cols-4">
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard cgpa display designs*/}
                </div>
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard enrolled courses display designs*/}
                </div>
                <div className="flex gap-4 rounded-[0.625rem] px-6 py-4 bg-[#E6F0ED]">
                  <img className="w-[2.5rem] h-[2.5rem]" src="/assets/icons/units-done-icon.svg" />
                  <div className="flex flex-col">
                    <p className="text-[#000000] text-[1.125rem] font-bold leading-normal">64</p>
                    <p className="text-[#969696] text-[0.75rem] font-semibold leading-normal">Units Done</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-[0.625rem] px-6 py-4 bg-[#E6F0ED]">
                  <img className="w-[2.5rem] h-[2.5rem]" src="/assets/icons/outstanding-fees-icon.svg" />
                  <div className="flex flex-col">
                    <p className="text-[#000000] text-[1.125rem] font-bold leading-normal">1</p>
                    <p className="text-[#969696] text-[0.75rem] font-semibold leading-normal">Outstanding Fees</p>
                  </div>
                  {/* //TODO: Implement student dashboard outstanding fees display designs*/}
                </div>
              </div>
              <div className="flex flex-row space-x-8 w-full">
                <div className="flex flex-col gap-2">
                  {scheduleLabels.map((schedule) => (
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

                <div className="grid grid-cols-2 gap-4 w-full h-fit">
                  {scheduleUnits.map(
                    ({
                      scheduleId,
                      courseCode,
                      lecturerName,
                      startTime,
                      endTime,
                      color,
                    }) =>
                      scheduleId === isSelectedSchedule && (
                        <ScheduleUnit
                          icon={color.icon}
                          courseCode={courseCode}
                          lecturerName={lecturerName}
                          startTime={startTime}
                          endTime={endTime}
                          bg={color.bg}
                          textColor={color.textColor}
                        />
                      )
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[#000] text-[0.875rem] font-bold leading-normal"> Upcoming Assessments (3)</p>


                <div className="relative overflow-x-auto ">
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
                        <th scope="col" className="px-6 py-3">
                          {/* <span className="sr-only">Edit</span> */}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                          <img className="w-[1.5625rem] h-[1.5625rem]" src="/assets/icons/description-icon.svg" />
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                          <div className="flex flex-col gap-1">
                            <p className="text-[#000] text-[0.75rem] font-bold leading-normal">Regression Exercise</p>
                            <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">CSC 421</p>
                          </div>
                        </th>

                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-[#000] text-[0.75rem] font-bold leading-normal">2 Dec 2023</p>
                            <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">14 days left</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <img className="w-[1.5625rem] h-[1.5625rem]" src="/assets/icons/clock-loader-icon.svg" />
                        </td>
                        <td className="px-6 py-4 ">
                          <button className="px-4 py-1 flex justify-center items-center rounded-[0.3125rem] bg-[#7FEAD1]" style={{ boxShadow: "4px 4px 6px 0px rgba(0, 0, 0, 0.15)" }}><p className=" text-[#063760] text-[0.75rem] font-bold leading-normal">View Exercise</p></button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                          <img className="w-[1.5625rem] h-[1.5625rem]" src="/assets/icons/description-icon.svg" />
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                          <div className="flex flex-col gap-1">
                            <p className="text-[#000] text-[0.75rem] font-bold leading-normal">Regression Exercise</p>
                            <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">CSC 421</p>
                          </div>
                        </th>

                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-[#000] text-[0.75rem] font-bold leading-normal">2 Dec 2023</p>
                            <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">14 days left</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <img className="w-[1.5625rem] h-[1.5625rem]" src="/assets/icons/clock-loader-icon.svg" />
                        </td>
                        <td className="px-6 py-4 ">
                          <button className="px-4 py-1 flex justify-center items-center rounded-[0.3125rem] bg-[#7FEAD1]" style={{ boxShadow: "4px 4px 6px 0px rgba(0, 0, 0, 0.15)" }}><p className=" text-[#063760] text-[0.75rem] font-bold leading-normal">View Exercise</p></button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                          <img className="w-[1.5625rem] h-[1.5625rem]" src="/assets/icons/description-icon.svg" />
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                          <div className="flex flex-col gap-1">
                            <p className="text-[#000] text-[0.75rem] font-bold leading-normal">Regression Exercise</p>
                            <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">CSC 421</p>
                          </div>
                        </th>

                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-[#000] text-[0.75rem] font-bold leading-normal">2 Dec 2023</p>
                            <p className="text-[#8D8D92] text-[0.65rem] font-semibold leading-normal">14 days left</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <img className="w-[1.5625rem] h-[1.5625rem]" src="/assets/icons/clock-loader-icon.svg" />
                        </td>
                        <td className="px-6 py-4 ">
                          <button className="px-4 py-1 flex justify-center items-center rounded-[0.3125rem] bg-[#7FEAD1]" style={{ boxShadow: "4px 4px 6px 0px rgba(0, 0, 0, 0.15)" }}><p className=" text-[#063760] text-[0.75rem] font-bold leading-normal">View Exercise</p></button>
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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-full gap-4">
                  {[0, 1, 2].map((_, index) => (
                    // <Link to={"/"}>
                    <div
                      key={index}
                      className="bg-custom-secondary-3 rounded-[0.625rem] h-auto w-full"
                    >
                      <div className="flex flex-col h-full items-center">
                        <img
                          src="/assets/images/course-image1.png"
                          className="w-full h-[7.0625rem] rounded-t-[0.625rem]"
                        />

                        <div className="flex flex-col h-full p-4 justify-between leading-normal">
                          <div className="flex items-center">
                            <div className="w-full bg-custom-secondary-2 rounded-full h-1.5 dark:bg-gray-700">
                              <div
                                className={`bg-custom-primary-1 h-1.5 w-[60%] rounded-full`}
                              ></div>
                            </div>
                            <span className="ml-2 text-custom-primary-1 text-[0.625rem]">
                              {60}%
                            </span>
                          </div>
                          <p className="text-custom-primary-2 text-[0.625rem] font-bold">
                            CSC 419
                          </p>
                          <p className="text-custom-primary-1 font-bold text-sm">
                            Advances in Web, Mobile & Blockchain Technologies
                          </p>
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-4 h-4"
                              src="assets/images/profile-image.png"
                            />
                            <p className="text-custom-primary-2 text-[0.625rem]">
                              Pius Onobhayedo, PhD.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 h-[40rem] relative">
            <div className="">
              <img
                src="/assets/icons/SILMS_DashB_Illustration.svg"
                alt="Dashboard Illustartion"
                className="w-full"
              />
            </div>
            <div className="flex flex-col bg-white border-[#666666] shadow-md rounded-md z-2 absolute top-[200px] h-50 w-full left-0 z-2">
              <div className="flex justify-center py-4">
                <LineIcon />
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex justify-end py-1 pr-2">
                  <CalenderIcon />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[0.9rem]">Year 1 Semester 1</p>
                  <p className="leading-none text-[#969696] text-[0.6rem] font-bold">
                    2023/2024 Session
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="font-bold text-[0.7rem]">Week 7</p>
              </div>
              <Datepicker
                className="flex w-full justify-center shadow-none pb-10"
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

            {/* <div className="rounded-md w-full"> */}
            {/* {" "} */}
            {/* //TODO: Implement student dashboard calendar designs*/}

            {/* </div> */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
