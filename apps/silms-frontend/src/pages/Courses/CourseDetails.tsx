import DashboardLayout from "@/components/DashboardLayout";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

const CourseDetails = () => {
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

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="relative h-[8.6875rem] rounded-[0.3125rem] overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center"
            style={{ backgroundImage: 'url("/assets/icons/bannerBg.svg")' }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
          <div className="col-span-6 w-full h-[43px] bg-[#063760] rounded-[5px]">
            {/* //TODO:  Implement the course details modules designs*/}
          </div>
          <div className="lg:col-span-3 md:col-span-4">
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
                <div className="py-6" id="radial-chart">
                </div>

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
                <div className="flex flex-col py-6 px-4 sm:px-6 md:px-8">
                  <p className="text-white text-base font-semibold"> Enrolled Students</p>
                  <p className="text-white text-xs font-semibold"> 25 students </p>
                  <div className="flex flex-col w-full justify-between py-2 gap-3">
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Anderson Pepple</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">apepple@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Nweje Wendy</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">nwendy@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Ali-concern Abba</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">aabba@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex items-center gap-1 py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center align-middle">
                    <p className="text-white text-xs font-medium leading-normal">Olowokere Anjola</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">oanjola@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Egbuna Kenenna</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">ekenenn@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Oyewole Nifemi</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">onifemi@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Juba Anjolade</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">ajubs@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Pepple Anderson</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">apepple@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Lewu Oyindamola</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">olewu@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Tswanya Grace</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">tswanya@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseDetails;
