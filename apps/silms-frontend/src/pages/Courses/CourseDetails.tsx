import DashboardLayout from "@/components/DashboardLayout";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { useGetCourseQuery } from "@/store/slices/appSlice";
import ConditionalRoute from "@/routes/ConditionalRoute";
import PageLoader from "@/components/PageLoader";
import { useParams } from "react-router-dom";
import { UserStateProps, Role } from "@/store/interfaces/user.interface";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// import { FC } from 'react';
import { Collapse, Space } from "antd";
// import Panel from "antd/es/cascader/Panel";

const CourseDetails = () => {

  // const A: FC = () => <Collapse accordion items={items} />;
  const [chartOptions, _] = useState({
    series: [75],
    colors: ["#40E0BA"],
    chart: {
      height: "280px",
      width: "100%",
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#d9d9d9",
        },
        dataLabels: {
          show: false,
        },
        hollow: {
          margin: 0,
          size: "58%",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -23,
        bottom: -20,
      },
    },
    labels: ["Current Grade"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value: string) {
          return value + "%";
        },
      },
    },
  });

  const params = useParams();

  const authSlice = useSelector<RootState, UserStateProps>(
    (state) => state.auth.user
  );

  useEffect(() => {
    const renderChart = () => {
      if (
        document.getElementById("radial-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        const chart = new ApexCharts(
          document.getElementById("radial-chart"),
          chartOptions
        );
        chart.render();
      }
    };

    renderChart();

    // Clean up chart on component unmount
    return () => {
      ApexCharts.exec("radial-chart", "destroy");
    };
  }, [chartOptions]);

  const {
    data: courseData,
    isLoading: isLoadingCourseData,
    error,
  } = useGetCourseQuery("f2d6539c-9e5c-4a8a-9205-a3cd3f0b526c");

  console.log(error);
  console.log(courseData);
//   const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

  // const items = [
  //     {
  //       key: "1",
  //       label: "This is panel header 1",
  //       children: <p>{text}</p>,
        
  //     },
  //     {
  //       key: "2",
  //       label: "This is panel header 2",
  //       children: <p>{text}</p>,
        
  //     },
  //     {
  //       key: "3",
  //       label: "This is panel header 3",
  //       children: <p>{text}</p>,
  //     },
  //     {
  //       key: "4",
  //       label: "This is panel header 4",
  //       children: <p>{text}</p>,
  //     },
  //     {
  //       key: "5",
  //       label: "This is panel header 5",
  //       children: <p>{text}</p>,
  //     },
  //   ];

  // const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  //   panelStyle
    
  // ) => [
  //   {
  //     key: "1",
  //     label: "This is panel header 1",
  //     children: <p>{text}</p>,
  //     style: panelStyle,
  //   },
  //   {
  //     key: "2",
  //     label: "This is panel header 2",
  //     children: <p>{text}</p>,
  //     style: panelStyle,
  //   },
  //   {
  //     key: "3",
  //     label: "This is panel header 3",
  //     children: <p>{text}</p>,
  //     style: panelStyle,
  //   },
  //   {
  //     key: "4",
  //     label: "This is panel header 4",
  //     children: <p>{text}</p>,
  //     style: panelStyle,
  //   },
  //   {
  //     key: "5",
  //     label: "This is panel header 5",
  //     children: <p>{text}</p>,
  //     style: panelStyle,
  //   },
  // ];


  return (
    <ConditionalRoute redirectTo="/login" condition={authSlice ? true : false}>
      <ConditionalRoute
        redirectTo="/404"
        condition={authSlice?.auth?.role === Role.Student ? true : false}
      >
        <ConditionalRoute
          redirectTo="/404"
          condition={(params?.id && true) || false}
        >
          <DashboardLayout>
            {isLoadingCourseData ? (
              <PageLoader />
            ) : (
              <div className="flex flex-col gap-4">
                <div className="relative h-[8.6875rem] rounded-[0.3125rem] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-contain bg-center"
                    style={{
                      backgroundImage: 'url("/assets/icons/bannerBg.svg")',
                    }}
                  ></div>
                  <div className="absolute inset-0">
                    <div
                      className="h-full"
                      style={{
                        backgroundImage: `linear-gradient(to right,  rgba(230, 240, 237, 1) 0%, rgba(230, 240, 237, 1) calc(100% - 12rem), rgba(232, 234, 243, 0) 100%)`,
                      }}
                    >
                      <div className="flex flex-col gap-2 px-6 py-4 h-full space-center">
                        <div className="flex flex-row gap-4 items-center">
                          <p className="text-[#9E9E9E] text-center text-[0.75rem] font-medium ">
                            {courseData?.courseCode || ""}
                          </p>
                          <div className="rounded-[0.8125rem] bg-[#40E0BA] px-3 py-1">
                            <p className="text-black text-center text-[0.625rem] leading-normal font-medium">
                              {courseData?.courseType}
                            </p>
                          </div>
                        </div>
                        <p className="text-[#263238] text-[1.25rem] font-semibold leading-normal">
                          {courseData?.courseTitle}
                        </p>
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-8 h-8 "
                            src="/assets/icons/profile-image1.svg"
                          />
                          <p className="text-custom-primary-2 text-[0.75rem] font-medium leading-normal">
                            {courseData?.lecturerCourses[0]?.lecturer.user
                              .firstName +
                              courseData?.lecturerCourses[0]?.lecturer.user
                                .lastName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-9 gap-4">
             
                  <div className="col-span-3">
                    <div className="flex flex-col gap-8">
                      <div className="w-full  bg-[#e6f0ed] rounded-[0.3125rem] px-[1.69rem] py-[1.5rem] flex flex-col justify-between">
                        <div className="flex items-center w-full justify-between">
                          <p className="font-semibold text-[#263238] text-[1rem] leading-normal">
                            Grades
                          </p>
                          <img
                            className="w-[2.1875rem] h-[2.1875rem]"
                            src="/assets/icons/menu-icon.svg"
                            alt="Menu Icon"
                          />
                        </div>
                        <div className="py-6" id="radial-chart"></div>

                        <div className="flex flex-col gap-2 w-full">
                          <div className="flex w-full justify-between text-[#949494] text-[0.75rem] font-semibold leading-normal">
                            <p> Assessment</p>
                            <p> Grade </p>
                          </div>
                          <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                            <p> Regression Assignment </p>
                            <p> 6/10 </p>
                          </div>
                          <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                            <p> Preprocessing Assignment</p>
                            <p> 8/10 </p>
                          </div>
                          <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                            <p> Data Science Project </p>
                            <p> 6/10 </p>
                          </div>
                          <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                            <p> Participation </p>
                            <p> 2/5 </p>
                          </div>

                          {/* You can adjust the margin or spacing as needed */}
                        </div>
                      </div>

                      <div className="bg-[#063760] rounded-[0.3125rem]">
                        <div className="flex flex-col py-6 px-5">
                          <p className="text-white text-base font-semibold">
                            Enrolled Students
                          </p>
                          <p className="text-white text-xs font-semibold">
                            {courseData?.studentCourses.length || 0} students
                          </p>
                          <div className="flex flex-col w-full justify-between py-2 gap-3">
                            {courseData && courseData?.studentCourses?.map(
                              (student:any, index:number) => (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <div className="flex gap-1 items-center py-2">
                                    <img
                                      src={`/assets/icons/profile-image${
                                        index + 1
                                      }.svg`}
                                      alt={`Profile ${index + 1}`}
                                    />
                                    <div className="flex flex-col place-items-start justify-center">
                                      <p className="text-white text-xs font-medium leading-normal">
                                        {student?.user?.firstName + " " + student?.user?.lastName}
                                      </p>
                                      <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                                        {student?.user?.auth?.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                <p className="text-[#263238] text-[1.25rem] font-semibold leading-normal">
                  Introduction to Data Science and Engineering
                </p>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-8 h-8 "
                    src="/assets/icons/profile-image1.svg"
                  />
                  <p className="text-custom-primary-2 text-[0.75rem] font-medium leading-normal">
                    Mr. Charles Igah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-9 grid-flow-row gap-4">
          <div className="col-span-6 flex items-center w-full h-[43px] px-[1.69rem] text-[1rem] text-[#ffffff] bg-[#063760] rounded-[5px]">
            Modules
          </div>
          <div className="flex flex-col row-start-2 justify-between col-span-6 bg-[#ffffff] rounded-[0.3125rem] px-[1.69rem] py-[1.5rem] ">
            <>
              {/* <Divider orientation="left">Large Size</Divider> */}
              <Collapse
                size="large"
                items={[
                  
                  {
                    key: "1",
                    label: (
                      <div className="flex items-center justify-between">
                        <p className="text-[1rem] font-semibold">
                          Module 1 : Introduction to Data Science
                        </p>
                        <div className="flex items-center">
                          <div className="w-[50%] bg-custom-secondary-2 rounded-full h-3.625rem dark:bg-gray-700">
                            <div
                              className={`bg-custom-accent-1 h-full rounded-full`}
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="ml-2 text-[#000000] text-[0.625rem] font-semibold">
                            {60}%
                          </span>
                        </div>
                      </div>
                    ),
                  
              
                    children: (
                      <>
                        <div>
                          <Space align="center">
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/notes-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              2 notes
                            </p>
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/assessment-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              1 graded assessment
                            </p>
                          </Space>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Use case and Performance evaluation note
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Staff Promotion Use Case
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/assessmentBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Regression Assignment
                            </span>
                          </label>
                        </div>
                      </>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <div className="flex items-center justify-between">
                        <p className="text-[1rem] font-semibold">
                          Module 2 : Use case and performanace evaluation note
                        </p>
                        <div className="flex items-center">
                          <div className="w-[50%] bg-custom-secondary-2 rounded-full h-3.625rem dark:bg-gray-700">
                            <div
                              className={`bg-custom-accent-1 h-full rounded-full`}
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="ml-2 text-[#000000] text-[0.625rem] font-semibold">
                            {60}%
                          </span>
                        </div>
                      </div>
                    ),
                  
              
                    children: (
                      <>
                        <div>
                          <Space align="center">
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/notes-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              2 notes
                            </p>
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/assessment-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              1 graded assessment
                            </p>
                          </Space>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Use case and Performance evaluation note
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Staff Promotion Use Case
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/assessmentBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Regression Assignment
                            </span>
                          </label>
                        </div>
                      </>
                    ),
                  },
                  
                  {
                    key: "3",
                    label: (
                      <div className="flex items-center justify-between">
                        <p className="text-[1rem] font-semibold">
                          Module 3 : Data Preprocessing
                        </p>
                        <div className="flex items-center">
                          <div className="w-[50%] bg-custom-secondary-2 rounded-full h-3.625rem dark:bg-gray-700">
                            <div
                              className={`bg-custom-accent-1 h-full rounded-full`}
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="ml-2 text-[#000000] text-[0.625rem] font-semibold">
                            {60}%
                          </span>
                        </div>
                      </div>
                    ),
                  
              
                    children: (
                      <>
                        <div>
                          <Space align="center">
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/notes-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              2 notes
                            </p>
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/assessment-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              1 graded assessment
                            </p>
                          </Space>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Use case and Performance evaluation note
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Staff Promotion Use Case
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/assessmentBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Regression Assignment
                            </span>
                          </label>
                        </div>
                      </>
                    ),
                  },
                  {
                    key: "1",
                    label: (
                      <div className="flex items-center justify-between">
                        <p className="text-[1rem] font-semibold">
                          Module 4 : Data Processing & Data Analysis
                        </p>
                        <div className="flex items-center">
                          <div className="w-[50%] bg-custom-secondary-2 rounded-full h-3.625rem dark:bg-gray-700">
                            <div
                              className={`bg-custom-accent-1 h-full rounded-full`}
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="ml-2 text-[#000000] text-[0.625rem] font-semibold">
                            {60}%
                          </span>
                        </div>
                      </div>
                    ),
                  
              
                    children: (
                      <>
                        <div>
                          <Space align="center">
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/notes-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              2 notes
                            </p>
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/assessment-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              1 graded assessment
                            </p>
                          </Space>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Use case and Performance evaluation note
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Staff Promotion Use Case
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/assessmentBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Regression Assignment
                            </span>
                          </label>
                        </div>
                      </>
                    ),
                  },
                  {
                    key: "1",
                    label: (
                      <div className="flex items-center justify-between">
                        <p className="text-[1rem] font-semibold">
                          Module 5 : Data Visualization & Interpretation
                        </p>
                        <div className="flex items-center">
                          <div className="w-[50%] bg-custom-secondary-2 rounded-full h-3.625rem dark:bg-gray-700">
                            <div
                              className={`bg-custom-accent-1 h-full rounded-full`}
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="ml-2 text-[#000000] text-[0.625rem] font-semibold">
                            {60}%
                          </span>
                        </div>
                      </div>
                    ),
                  
              
                    children: (
                      <>
                        <div>
                          <Space align="center">
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/notes-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              2 notes
                            </p>
                            <img
                              className="w-[1rem] h-[1rem]"
                              src="/assets/icons/assessment-icon.svg"
                              alt="Menu Icon"
                            />
                            <p className="font-bold text-[#949494] text-[0.75rem] leading-normal">
                              1 graded assessment
                            </p>
                          </Space>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Use case and Performance evaluation note
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/noteBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Staff Promotion Use Case
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-[0.9375rem] w-[0.9375rem] rounded-[0.3125rem] text-[#063760] focus:ring-0"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="flex items-center space-x-2"
                          >
                            <img
                              className="w-[1.125rem] h-[1.125rem]"
                              src="/assets/icons/assessmentBig-icon.svg"
                              alt="Icon"
                            />
                            <span className="font-medium text-[#000] text-[0.875rem]">
                              Regression Assignment
                            </span>
                          </label>
                        </div>
                      </>
                    ),
                  },
                ]}
              />
            </>
          </div>
          <div className="col-span-3 ...">
            <div className="w-full  bg-[#e6f0ed] rounded-[0.3125rem] px-[1.69rem] py-[1.5rem] flex flex-col justify-between">
              <div className="flex items-center w-full justify-between">
                <p className="font-semibold text-[#263238] text-[1rem] leading-normal">
                  Grades
                </p>
                <img
                  className="w-[2.1875rem] h-[2.1875rem]"
                  src="/assets/icons/menu-icon.svg"
                  alt="Menu Icon"
                />
              </div>
              <div className="py-6" id="radial-chart"></div>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex w-full justify-between text-[#949494] text-[0.75rem] font-semibold leading-normal">
                  <p> Assessment</p>
                  <p> Grade </p>
                </div>
                <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                  <p> Regression Assignment </p>
                  <p> 6/10 </p>
                </div>
                <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                  <p> Preprocessing Assignment</p>
                  <p> 8/10 </p>
                </div>
                <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                  <p> Data Science Project </p>
                  <p> 6/10 </p>
                </div>
                <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                  <p> Participation </p>
                  <p> 2/5 </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 ...">
          <div className="bg-[#063760] rounded-[0.3125rem]">
                        <div className="flex flex-col py-6 px-5">
                          <p className="text-white text-base font-semibold">
                            Enrolled Students
                          </p>
                          <p className="text-white text-xs font-semibold">
                            {courseData?.studentCourses.length || 0} students
                          </p>
                          <div className="flex flex-col w-full justify-between py-2 gap-3">
                            {courseData && courseData?.studentCourses?.map(
                              (student:any, index:number) => (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <div className="flex gap-1 items-center py-2">
                                    <img
                                      src={`/assets/icons/profile-image${
                                        index + 1
                                      }.svg`}
                                      alt={`Profile ${index + 1}`}
                                    />
                                    <div className="flex flex-col place-items-start justify-center">
                                      <p className="text-white text-xs font-medium leading-normal">
                                        {student?.user?.firstName + " " + student?.user?.lastName}
                                      </p>
                                      <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                                        {student?.user?.auth?.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                <p className="text-[#263238] text-[1.25rem] font-semibold leading-normal">
                  Introduction to Data Science and Engineering
                </p>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-8 h-8 "
                    src="/assets/icons/profile-image1.svg"
                  />
                  <p className="text-custom-primary-2 text-[0.75rem] font-medium leading-normal">
                    Mr. Charles Igah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-9 gap-4">
          <div className="col-span-6 flex items-center w-full h-[43px] px-[1.69rem] text-[1rem] text-[#ffffff] bg-[#063760] rounded-[5px]">
            Modules
          </div>
          <div className="flex flex-col justify-between col-span-6 bg-[#ffffff] rounded-[0.3125rem] px-[1.69rem] py-[1.5rem] ">
            <>
              <Divider orientation="left">Default Size</Divider>
              <Collapse
                items={[
                  {
                    key: "1",
                    label: "This is default size panel header",
                    children: <p>{text}</p>,
                  },
                ]}
              />
              <Divider orientation="left">Small Size</Divider>
              <Collapse
                size="small"
                items={[
                  {
                    key: "1",
                    label: "This is small size panel header",
                    children: <p>{text}</p>,
                  },
                ]}
              />
              <Divider orientation="left">Large Size</Divider>
              <Collapse
                size="large"
                items={[
                  {
                    key: "1",
                    label: "This is large size panel header",
                    children: <p>{text}</p>,
                  },
                ]}
              />
            </>
          </div>
          <div className="col-span-3 ">
            <div className="flex flex-col gap-8">
              <div className="w-full  bg-[#e6f0ed] rounded-[0.3125rem] px-[1.69rem] py-[1.5rem] flex flex-col justify-between">
                <div className="flex items-center w-full justify-between">
                  <p className="font-semibold text-[#263238] text-[1rem] leading-normal">
                    Grades
                  </p>
                  <img
                    className="w-[2.1875rem] h-[2.1875rem]"
                    src="/assets/icons/menu-icon.svg"
                    alt="Menu Icon"
                  />
                </div>
                <div className="py-6" id="radial-chart"></div>

                <div className="flex flex-col gap-2 w-full truncate">
                  <div className="flex w-full justify-between text-[#949494] text-[0.75rem] font-semibold leading-normal">
                    <p> Assessment</p>
                    <p> Grade </p>
                  </div>
                  <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                    <p> Regression Assignment </p>
                    <p> 6/10 </p>
                  </div>
                  <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                    <p> Preprocessing Assignment</p>
                    <p> 8/10 </p>
                  </div>
                  <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                    <p> Data Science Project </p>
                    <p> 6/10 </p>
                  </div>
                  <div className="flex w-full justify-between text-[#263238] text-[0.75rem] font-semibold leading-normal">
                    <p> Participation </p>
                    <p> 2/5 </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#063760] rounded-[0.3125rem]">
                <div className="flex flex-col py-6 px-5">
                  <p className="text-white text-base font-semibold">
                    {" "}
                    Enrolled Students
                  </p>
                  <p className="text-white text-xs font-semibold">
                    {" "}
                    25 students{" "}
                  </p>
                  <div className="flex flex-col w-full justify-between py-2 gap-3">
                    <div className="flex justify-between">
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Anderson Pepple
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            apepple@pau.edu.ng
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Nweje Wendy
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            nwendy@pau.edu.ng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Ali-concern Abba
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            aabba@pau.edu.ng
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center align-middle">
                          <p className="text-white text-xs font-medium leading-normal">
                          <p className="text-white text-xs font-medium leading-normal">
                            Olowokere Anjola
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            oanjola@pau.edu.ng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                            Egbuna Kenenna
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            ekenenn@pau.edu.ng
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Oyewole Nifemi
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            onifemi@pau.edu.ng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Juba Anjolade
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            ajubs@pau.edu.ng
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Pepple Anderson
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            apepple@pau.edu.ng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Lewu Oyindamola
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            olewu@pau.edu.ng
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center py-2">
                        <img src="/assets/icons/profile-image1.svg" />
                        <div className="flex flex-col place-items-start justify-center">
                          <p className="text-white text-xs font-medium leading-normal">
                            Tswanya Grace
                          </p>
                          <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">
                            tswanya@pau.edu.ng
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}*/}
              </div>
              </div>
            )}
          </DashboardLayout>
        </ConditionalRoute>
      </ConditionalRoute>
    </ConditionalRoute>
       
  );
};

export default CourseDetails;
