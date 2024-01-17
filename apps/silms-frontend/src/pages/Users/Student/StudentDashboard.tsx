import DashboardLayout from "@/components/DashboardLayout";
import ScheduleUnit from "@/components/ScheduleUnit";

const StudentDashboard = () => {
  const scheduleUnits = [
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_423_779)">
            <path
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#FF7F4F"
            />
            <path
              d="M23.2997 10L14.9083 10.756L14.9648 10.4441L5.94128 11.0113L9.14009 14.2241L8.35019 16.9697L6.66667 20.4933L16.1311 29.9577C23.3519 29.4194 29.148 23.7689 29.9135 16.6137L23.2997 10Z"
              fill="#E03A00"
            />
            <path
              d="M22.9798 10.0388H7.02017V10.9479H11.5244C9.35115 12.1686 7.87875 14.495 7.87875 17.16V20.4933H8.78783V17.16C8.78783 13.7347 11.5746 10.9479 14.9999 10.9479C18.4253 10.9479 21.212 13.7347 21.212 17.16V20.4933H22.1211V17.16C22.1211 14.4949 20.6487 12.1686 18.4755 10.9479H22.9797V10.0388H22.9798Z"
              fill="white"
            />
            <path
              d="M22.9798 10.0388H14.9664V10.9487C14.9777 10.9486 14.9887 10.9479 15 10.9479C18.4253 10.9479 21.2121 13.7347 21.2121 17.16V20.4933H22.1212V17.16C22.1212 14.4949 20.6488 12.1686 18.4756 10.9479H22.9798V10.0388H22.9798Z"
              fill="#D3D3D3"
            />
            <path
              d="M6.66668 11.4024C6.16453 11.4024 5.7576 10.9954 5.7576 10.4933C5.7576 9.99116 6.16459 9.58423 6.66668 9.58423C7.16883 9.58423 7.57576 9.99122 7.57576 10.4933C7.57576 10.9955 7.16871 11.4024 6.66668 11.4024Z"
              fill="#515151"
            />
            <path
              d="M22.5758 11.4024C22.0736 11.4024 21.6667 10.9954 21.6667 10.4933C21.6667 9.99116 22.0737 9.58423 22.5758 9.58423C23.0779 9.58423 23.4849 9.99122 23.4849 10.4933C23.4849 10.9955 23.0778 11.4024 22.5758 11.4024Z"
              fill="#2D2D2D"
            />
            <path
              d="M16.6667 8.82629H13.3334V12.1596H16.6667V8.82629Z"
              fill="#515151"
            />
            <path
              d="M16.6669 8.82629H14.9667V12.1596H16.6669V8.82629Z"
              fill="#2D2D2D"
            />
            <path
              d="M14.9667 8.82629H13.3334V12.1596H14.9667V8.82629Z"
              fill="#515151"
            />
            <path d="M10 17.1596H6.66669V20.4929H10V17.1596Z" fill="#515151" />
            <path
              d="M23.3333 17.1596H20V20.4929H23.3333V17.1596Z"
              fill="#2D2D2D"
            />
          </g>
          <defs>
            <clipPath id="clip0_423_779">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      courseCode: "MTH 101",
      lecturerName: "Dr. Kingsley Muka",
      startTime: "10:00",
      endTime: "11:50",
      bg: "bg-[#FD6B654A]",
      textColor: "#F92501",
    },
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_423_778)">
            <path
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#45B39C"
            />
            <path
              opacity="0.1"
              d="M29.9041 16.6794L21.8965 8.67189L21.8841 8.65625L21.859 8.63123C21.8153 8.59062 21.7622 8.56871 21.6997 8.56871H18.6622C18.534 8.56871 18.4278 8.67494 18.4278 8.80619V8.84058C18.4278 8.96873 18.534 9.07496 18.6622 9.07496H18.6684V9.89996L15.259 6.48746C15.2091 6.43748 15.1403 6.40619 15.0622 6.40619C14.9059 6.40619 14.784 6.53117 14.784 6.68433V10.1969H13.184L11.6559 8.67189L11.6341 8.65004L11.6331 8.65162C11.5891 8.60287 11.5294 8.56883 11.4591 8.56883H8.42156C8.29031 8.56883 8.18718 8.67506 8.18718 8.80631V8.8407C8.18718 8.96884 8.29031 9.07508 8.42156 9.07508H8.42466V10.2001C8.28404 10.2126 8.17154 10.3282 8.17154 10.472C8.17154 10.6157 8.28404 10.7313 8.42466 10.7407V17.2969C8.42466 17.7532 8.62781 18.1625 8.94656 18.4375L8.97158 18.4626L10.1872 19.6782H7.24037C6.78099 19.6782 6.40599 20.0532 6.40599 20.5126V23.5938L12.6228 29.8107C13.3975 29.9341 14.1909 30 15 30C22.7163 30 29.0688 24.1725 29.9041 16.6794Z"
              fill="black"
            />
            <path
              d="M23.5937 22.9688H6.40623V23.5934H23.5937V22.9688Z"
              fill="#F6C358"
            />
            <path
              d="M22.7585 19.6788H7.24155C6.7803 19.6788 6.40623 20.0528 6.40623 20.5141V22.9691H23.5937V20.5141C23.5938 20.0528 23.22 19.6788 22.7585 19.6788Z"
              fill="#FCD462"
            />
            <path
              d="M8.42596 9.07562V17.2984C8.42596 18.1312 9.10126 18.8062 9.93411 18.8062C10.767 18.8062 11.4423 18.1312 11.4423 17.2984V9.07562H8.42596Z"
              fill="#EBF0F3"
            />
            <path
              d="M8.73872 11.6682V17.2985C8.73872 17.9575 9.27497 18.4938 9.93404 18.4938C10.5931 18.4938 11.1296 17.9575 11.1296 17.2985V11.6682H8.73872Z"
              fill="#E56353"
            />
            <path
              d="M11.4594 8.56903H8.42186C8.29154 8.56903 8.1859 8.67468 8.1859 8.80499V8.83968C8.1859 8.96999 8.29154 9.07563 8.42186 9.07563H11.4594C11.5897 9.07563 11.6953 8.96999 11.6953 8.83968V8.80499C11.6953 8.67468 11.5897 8.56903 11.4594 8.56903Z"
              fill="#E1E6E9"
            />
            <path
              d="M9.13125 10.9794C9.21409 10.9794 9.28125 10.9122 9.28125 10.8294C9.28125 10.7465 9.21409 10.6794 9.13125 10.6794C9.0484 10.6794 8.98125 10.7465 8.98125 10.8294C8.98125 10.9122 9.0484 10.9794 9.13125 10.9794Z"
              fill="#E56353"
            />
            <path
              d="M10.2534 9.93411C10.3827 9.93411 10.4875 9.8293 10.4875 9.70002C10.4875 9.57074 10.3827 9.46594 10.2534 9.46594C10.1242 9.46594 10.0193 9.57074 10.0193 9.70002C10.0193 9.8293 10.1242 9.93411 10.2534 9.93411Z"
              fill="#E56353"
            />
            <path
              d="M9.44688 10.1603C9.57409 10.1603 9.67722 10.0572 9.67722 9.92998C9.67722 9.80277 9.57409 9.69965 9.44688 9.69965C9.31968 9.69965 9.21655 9.80277 9.21655 9.92998C9.21655 10.0572 9.31968 10.1603 9.44688 10.1603Z"
              fill="#E56353"
            />
            <path
              d="M9.49875 16.2803C9.62596 16.2803 9.72908 16.1772 9.72908 16.05C9.72908 15.9228 9.62596 15.8196 9.49875 15.8196C9.37154 15.8196 9.26842 15.9228 9.26842 16.05C9.26842 16.1772 9.37154 16.2803 9.49875 16.2803Z"
              fill="white"
            />
            <path
              d="M10.7669 11.3334C10.8648 11.3334 10.9441 11.2541 10.9441 11.1563C10.9441 11.0584 10.8648 10.9791 10.7669 10.9791C10.669 10.9791 10.5897 11.0584 10.5897 11.1563C10.5897 11.2541 10.669 11.3334 10.7669 11.3334Z"
              fill="#E56353"
            />
            <path
              d="M9.67594 13.3834C9.77379 13.3834 9.85312 13.3041 9.85312 13.2062C9.85312 13.1084 9.77379 13.0291 9.67594 13.0291C9.57808 13.0291 9.49875 13.1084 9.49875 13.2062C9.49875 13.3041 9.57808 13.3834 9.67594 13.3834Z"
              fill="white"
            />
            <path
              d="M10.31 17.5084C10.4078 17.5084 10.4872 17.4291 10.4872 17.3312C10.4872 17.2334 10.4078 17.1541 10.31 17.1541C10.2121 17.1541 10.1328 17.2334 10.1328 17.3312C10.1328 17.4291 10.2121 17.5084 10.31 17.5084Z"
              fill="white"
            />
            <path
              d="M10.4306 14.8478C10.5285 14.8478 10.6078 14.7685 10.6078 14.6706C10.6078 14.5727 10.5285 14.4934 10.4306 14.4934C10.3328 14.4934 10.2534 14.5727 10.2534 14.6706C10.2534 14.7685 10.3328 14.8478 10.4306 14.8478Z"
              fill="white"
            />
            <path
              d="M18.6675 9.07562V17.2984C18.6675 18.1312 19.3428 18.8062 20.1756 18.8062C21.0084 18.8062 21.6838 18.1312 21.6838 17.2984V9.07562H18.6675Z"
              fill="#EBF0F3"
            />
            <path
              d="M18.98 14.065V17.2981C18.98 17.9572 19.5162 18.4935 20.1753 18.4935C20.8344 18.4935 21.3709 17.9572 21.3709 17.2981V14.065H18.98Z"
              fill="#27A2DB"
            />
            <path
              d="M21.7006 8.56903H18.6631C18.5328 8.56903 18.4272 8.67468 18.4272 8.80499V8.83968C18.4272 8.96999 18.5328 9.07563 18.6631 9.07563H21.7006C21.8309 9.07563 21.9366 8.96999 21.9366 8.83968V8.80499C21.9366 8.67468 21.8309 8.56903 21.7006 8.56903Z"
              fill="#E1E6E9"
            />
            <path
              d="M19.5531 13.3684C19.6427 13.3684 19.7153 13.2958 19.7153 13.2063C19.7153 13.1167 19.6427 13.0441 19.5531 13.0441C19.4636 13.0441 19.391 13.1167 19.391 13.2063C19.391 13.2958 19.4636 13.3684 19.5531 13.3684Z"
              fill="#27A2DB"
            />
            <path
              d="M19.7625 11.4262C19.8391 11.4262 19.9013 11.3641 19.9013 11.2875C19.9013 11.2109 19.8391 11.1487 19.7625 11.1487C19.6859 11.1487 19.6237 11.2109 19.6237 11.2875C19.6237 11.3641 19.6859 11.4262 19.7625 11.4262Z"
              fill="#27A2DB"
            />
            <path
              d="M20.9625 10.1972C21.0473 10.1972 21.116 10.1285 21.116 10.0437C21.116 9.95896 21.0473 9.89026 20.9625 9.89026C20.8778 9.89026 20.8091 9.95896 20.8091 10.0437C20.8091 10.1285 20.8778 10.1972 20.9625 10.1972Z"
              fill="#27A2DB"
            />
            <path
              d="M20.7813 13.121C20.9589 13.121 21.1028 12.977 21.1028 12.7994C21.1028 12.6218 20.9589 12.4778 20.7813 12.4778C20.6037 12.4778 20.4597 12.6218 20.4597 12.7994C20.4597 12.977 20.6037 13.121 20.7813 13.121Z"
              fill="#27A2DB"
            />
            <path
              d="M19.7375 16.2804C19.8647 16.2804 19.9678 16.1772 19.9678 16.05C19.9678 15.9228 19.8647 15.8197 19.7375 15.8197C19.6103 15.8197 19.5071 15.9228 19.5071 16.05C19.5071 16.1772 19.6103 16.2804 19.7375 16.2804Z"
              fill="white"
            />
            <path
              d="M20.4063 17.5085C20.5041 17.5085 20.5835 17.4292 20.5835 17.3313C20.5835 17.2334 20.5041 17.1541 20.4063 17.1541C20.3084 17.1541 20.2291 17.2334 20.2291 17.3313C20.2291 17.4292 20.3084 17.5085 20.4063 17.5085Z"
              fill="white"
            />
            <path
              d="M20.6688 14.8478C20.7666 14.8478 20.846 14.7685 20.846 14.6707C20.846 14.5728 20.7666 14.4935 20.6688 14.4935C20.5709 14.4935 20.4916 14.5728 20.4916 14.6707C20.4916 14.7685 20.5709 14.8478 20.6688 14.8478Z"
              fill="white"
            />
            <path
              d="M21.6628 10.745H8.44688C8.29565 10.745 8.17284 10.6222 8.17284 10.4709C8.17284 10.3197 8.29565 10.1969 8.44688 10.1969H21.6628C21.814 10.1969 21.9369 10.3197 21.9369 10.4709C21.9366 10.6222 21.814 10.745 21.6628 10.745Z"
              fill="#3A556A"
            />
            <path
              d="M15.3397 19.6788H14.7828V6.68469C14.7828 6.53094 14.9075 6.40625 15.0612 6.40625C15.215 6.40625 15.3397 6.53094 15.3397 6.68469V19.6788Z"
              fill="#64798A"
            />
          </g>
          <defs>
            <clipPath id="clip0_423_778">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      courseCode: "PHY 108",
      lecturerName: "Dr. Ronke Adebayo",
      startTime: "12:00",
      endTime: "12:50",
      bg: "bg-[#CFF7EE]",
      textColor: "text-[#076A52]",
    },
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_423_783)">
            <path
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#386895"
            />
            <path
              d="M29.2421 19.7178L14.338 4.81366L9.43377 7.67063L9.22336 7.46022L6.4882 9.38667L6.41561 9.42897L6.42076 9.43413L5.36572 10.1773L15.5824 20.394L16.4815 19.495L21.0311 24.0445L6.66668 25.2273L10.8605 29.4211C12.1754 29.7979 13.564 30 15 30C21.636 30 27.2647 25.6905 29.2421 19.7178Z"
              fill="#273B7A"
            />
            <path
              d="M9.04043 24.9874H20.9596V20.1757C20.9596 19.0535 20.05 18.1439 18.9278 18.1439H11.0721C9.94998 18.1439 9.04037 19.0535 9.04037 20.1757L9.04043 24.9874Z"
              fill="#FFC61B"
            />
            <path
              d="M20.9596 20.1757C20.9596 19.0536 20.05 18.1439 18.9278 18.1439H14.9663V24.9874H20.9596V20.1757Z"
              fill="#EAA22F"
            />
            <path
              d="M15 19.1415C17.0083 19.1415 18.6364 17.5134 18.6364 15.5051C18.6364 13.4968 17.0083 11.8687 15 11.8687C12.9917 11.8687 11.3636 13.4968 11.3636 15.5051C11.3636 17.5134 12.9917 19.1415 15 19.1415Z"
              fill="#FFEDB5"
            />
            <path
              d="M15 11.8687C14.9887 11.8687 14.9776 11.8694 14.9664 11.8695V19.1405C14.9776 19.1407 14.9887 19.1414 15 19.1414C17.0083 19.1414 18.6364 17.5133 18.6364 15.505C18.6364 13.4967 17.0083 11.8687 15 11.8687Z"
              fill="#FEE187"
            />
            <path
              d="M4.89896 5.47058V9.34937C4.89896 9.88491 5.33308 10.319 5.86863 10.319H10.7171L11.8589 11.4609C12.1532 11.7552 12.6565 11.5467 12.6565 11.1304V10.3189H13.6262C14.1617 10.3189 14.5959 9.8848 14.5959 9.34925V5.47046C14.5959 4.93491 14.1618 4.50079 13.6262 4.50079H5.86869C5.33314 4.50091 4.89896 4.93503 4.89896 5.47058Z"
              fill="#E09112"
            />
            <path
              d="M23.3333 23.5606H6.66668V25.2272H23.3333V23.5606Z"
              fill="#FF5419"
            />
            <path
              d="M23.3333 23.5606H14.9667V25.2272H23.3333V23.5606Z"
              fill="#C92F00"
            />
          </g>
          <defs>
            <clipPath id="clip0_423_783">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      courseCode: "GST 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      bg: "bg-[#27A2DB45]",
      textColor: "text-[#076A52]",
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
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard units done display designs*/}
                </div>
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard outstanding fees display designs*/}
                </div>
              </div>
              <div className="h-60">
                {/* //TODO: Implement student schedules designs*/}
                <div className="flex flex-row space-x-8">
                  <div className="flex flex-col gap-2">
                    {/* First Item */}
                    <div className="flex flex-row pl-0 relative space-x-3 rounded-md px-5  h-[74.954px] w-[228.323px]">
                      <div className="flex flex-row w-[98%] h-full items-center rounded-md bg-[#E6F0ED] pb-2 ">
                        <div className="flex flex-col pl-5 text-[#9747FF] items-center mr-2">
                          <p className="text-[0.9rem]">Wed</p>
                          <p className="font-extrabold text-[1.7rem]">08</p>
                        </div>
                        <div className="flex flex-col gap-1 border-l-2 border-[#D9D9D9] pl-3">
                          <p className="text-[#000] text-[0.8.6rem] font-bold pt-2 leading-none">
                            6 Classes
                          </p>
                          <p className="text-[#8D8D92] text-[0.59rem] font-semibold leading-none">
                            9:00 AM - 2:00PM
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[3.5rem] h-[3.5rem] rounded-md bg-[#E6F0ED] border-r-8 border-t-8 border-[#E6F0ED] border-solid rotate-45 z-[-1]"></div>
                    </div>

                    {/* Second Item */}
                    <div className="flex flex-row pl-0 relative space-x-3 rounded-md px-5  h-[74.954px] w-[228.323px] bg-white">
                      <div className="flex flex-row w-[98%] h-full items-center rounded-md bg-white pb-2 ">
                        <div className="flex flex-col pl-5 text-[#000] items-center mr-2">
                          <p className="text-[0.9rem] text-[#8D8D92]">Wed</p>
                          <p className="font-extrabold text-[1.7rem]">08</p>
                        </div>
                        <div className="flex flex-col gap-1 border-l-2 border-[#D9D9D9] pl-3">
                          <p className="text-[#000] text-[0.8.6rem] font-bold pt-2 leading-none">
                            6 Classes
                          </p>
                          <p className="text-[#8D8D92] text-[0.59rem] font-semibold leading-none">
                            9:00 AM - 2:00PM
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Third Item */}
                    <div className="flex flex-row pl-0 relative space-x-3 rounded-md px-5  h-[74.954px] w-[228.323px] bg-white">
                      <div className="flex flex-row w-[98%] h-full items-center rounded-md bg-white pb-2 ">
                        <div className="flex flex-col pl-5 text-[#000] items-center mr-2">
                          <p className="text-[0.9rem] text-[#8D8D92]">Wed</p>
                          <p className="font-extrabold text-[1.7rem]">08</p>
                        </div>
                        <div className="flex flex-col gap-1 border-l-2 border-[#D9D9D9] pl-3">
                          <p className="text-[#000] text-[0.8.6rem] font-bold pt-2 leading-none">
                            6 Classes
                          </p>
                          <p className="text-[#8D8D92] text-[0.59rem] font-semibold leading-none">
                            9:00 AM - 2:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {scheduleUnits.map(
                      ({
                        icon,
                        courseCode,
                        lecturerName,
                        startTime,
                        endTime,
                        bg,
                        textColor,
                      }) => (
                        <ScheduleUnit
                          icon={icon}
                          courseCode={courseCode}
                          lecturerName={lecturerName}
                          startTime={startTime}
                          endTime={endTime}
                          bg={bg}
                          textColor={textColor}
                        />
                      )
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {scheduleUnits.map(
                      ({
                        icon,
                        courseCode,
                        lecturerName,
                        startTime,
                        endTime,
                        bg,
                        textColor,
                      }) => (
                        <ScheduleUnit
                          icon={icon}
                          courseCode={courseCode}
                          lecturerName={lecturerName}
                          startTime={startTime}
                          endTime={endTime}
                          bg={bg}
                          textColor={textColor}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="h-32 bg-amber-700">
                {/* //TODO: Implement student dashboard upcoming assessments designs*/}
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
          <div className="col-span-2 h-[40rem]">
            <div>
              <img
                src="/assets/icons/SILMS_DashB_Illustration.svg"
                alt="Dashboard Illustartion"
                className="w-full"
              />
            </div>
            <div>
              {" "}
              {/* //TODO: Implement student dashboard calendar designs*/}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
