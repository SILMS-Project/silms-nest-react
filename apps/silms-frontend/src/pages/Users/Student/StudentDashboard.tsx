import CalenderIcon from "@/assets/icons/CalenderIcon";
import DashboardLayout from "@/components/DashboardLayout";
import ScheduleUnit from "@/components/ScheduleUnit";
import { Datepicker, DatepickerProps } from "flowbite-react";

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
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_423_773)">
            <path
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#FFD05B"
            />
            <path
              d="M14.5748 25.1338C11.9291 25.1338 9.87402 20.7874 9.87402 15.2362C9.87402 9.6614 11.9291 5.31494 14.5748 5.31494C17.2205 5.31494 19.2756 9.6614 19.2756 15.2126C19.2992 20.7638 17.2205 25.1338 14.5748 25.1338ZM14.5748 6.16534C12.4724 6.16534 10.7008 10.3228 10.7008 15.2126C10.7008 20.126 12.4724 24.2598 14.5748 24.2598C16.6772 24.2598 18.4488 20.1023 18.4488 15.2126C18.4488 10.3228 16.6772 6.16534 14.5748 6.16534Z"
              fill="white"
            />
            <path
              d="M8.95276 22.6063C7.96063 22.6063 7.20473 22.3228 6.68504 21.8032C6.23622 21.3307 6 20.6457 6.04725 19.8425C6.18898 17.6221 8.31496 14.5039 11.4567 11.9055C14.4803 9.40158 17.8346 7.84253 20.1969 7.84253C21.189 7.84253 21.9449 8.12599 22.4646 8.64568C22.9134 9.11812 23.1496 9.80316 23.1024 10.6063C22.9606 12.8268 20.8346 15.9449 17.6929 18.5433C14.6693 21.0473 11.315 22.6063 8.95276 22.6063ZM20.1969 8.6693C18.0472 8.6693 14.8346 10.1811 12 12.5433C9.07087 14.9764 7.01575 17.9291 6.89764 19.8898C6.87402 20.4567 6.99213 20.9055 7.29921 21.2362C7.65354 21.5906 8.19685 21.7795 8.95276 21.7795C11.1024 21.7795 14.315 20.2677 17.1496 17.9055C20.1024 15.4725 22.1339 12.5197 22.252 10.5591C22.2756 9.99214 22.1575 9.54332 21.8504 9.21261C21.5197 8.85828 20.9528 8.6693 20.1969 8.6693Z"
              fill="white"
            />
            <path
              d="M20.1968 22.6063C17.8346 22.6063 14.4803 21.0473 11.4567 18.5433C8.31496 15.9449 6.18898 12.8268 6.07086 10.6063C6.02362 9.80316 6.23622 9.11812 6.70866 8.64568C7.22835 8.10237 7.98425 7.84253 8.97638 7.84253C11.3386 7.84253 14.6929 9.40158 17.7165 11.9055C20.8583 14.5039 22.9843 17.6221 23.126 19.8425C23.1732 20.6457 22.9606 21.3307 22.4882 21.8032C21.9685 22.3465 21.189 22.6063 20.1968 22.6063ZM8.95276 8.6693C8.19685 8.6693 7.62992 8.85828 7.29921 9.21261C6.99212 9.51969 6.87401 9.96851 6.89764 10.5591C7.01575 12.5197 9.07087 15.4725 12 17.9055C14.8346 20.2441 18.0472 21.7795 20.1968 21.7795C20.9528 21.7795 21.5197 21.5906 21.8504 21.2362C22.1575 20.9291 22.2756 20.4803 22.252 19.8898C22.1339 17.9291 20.0787 14.9764 17.1496 12.5433C14.315 10.2047 11.1024 8.6693 8.95276 8.6693Z"
              fill="white"
            />
            <path
              d="M14.5748 16.8425C15.475 16.8425 16.2047 16.1128 16.2047 15.2126C16.2047 14.3124 15.475 13.5827 14.5748 13.5827C13.6746 13.5827 12.9449 14.3124 12.9449 15.2126C12.9449 16.1128 13.6746 16.8425 14.5748 16.8425Z"
              fill="#324A5E"
            />
            <path
              d="M12.9213 7.58268C13.6649 7.58268 14.2677 6.97985 14.2677 6.23623C14.2677 5.4926 13.6649 4.88977 12.9213 4.88977C12.1776 4.88977 11.5748 5.4926 11.5748 6.23623C11.5748 6.97985 12.1776 7.58268 12.9213 7.58268Z"
              fill="#FF7058"
            />
            <path
              d="M8.92914 23.5276C9.67276 23.5276 10.2756 22.9247 10.2756 22.1811C10.2756 21.4375 9.67276 20.8347 8.92914 20.8347C8.18551 20.8347 7.58268 21.4375 7.58268 22.1811C7.58268 22.9247 8.18551 23.5276 8.92914 23.5276Z"
              fill="#84DBFF"
            />
            <path
              d="M22.5827 20.315C23.3263 20.315 23.9291 19.7122 23.9291 18.9685C23.9291 18.2249 23.3263 17.6221 22.5827 17.6221C21.839 17.6221 21.2362 18.2249 21.2362 18.9685C21.2362 19.7122 21.839 20.315 22.5827 20.315Z"
              fill="#4CDBC4"
            />
          </g>
          <defs>
            <clipPath id="clip0_423_773">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      courseCode: "PHY 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      bg: "bg-[#27A2DB45]",
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
          <g clip-path="url(#clip0_436_1672)">
            <g clip-path="url(#clip1_436_1672)">
              <path
                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                fill="#9747FF"
              />
              <path
                opacity="0.1"
                d="M23.43 6.55377C23.3325 6.46312 23.2 6.40723 23.0531 6.40723H6.94688C6.64688 6.40723 6.40623 6.6385 6.40623 6.92285V16.6697C6.40623 16.8097 6.465 16.9369 6.56027 17.0297L6.56057 17.03C6.56274 17.0322 6.56461 17.0341 6.56649 17.0363L8.70305 19.1729H6.60275C6.49336 19.1729 6.40588 19.2604 6.40588 19.3697V23.3947C6.40588 23.4569 6.43617 23.511 6.48059 23.5478L12.7665 29.8338C13.4953 29.9425 14.2409 30 15 30C23.2844 30 30 23.284 30 15C30 14.3163 29.95 13.6447 29.8615 12.9856L23.4434 6.56748C23.4387 6.56279 23.4347 6.55811 23.43 6.55377Z"
                fill="black"
              />
              <path
                d="M17.8631 17.1865H12.1369V18.3681H17.8631V17.1865Z"
                fill="#3A556A"
              />
              <path
                d="M17.8631 18.3681H12.1369L17.8631 17.1865V18.3681Z"
                fill="#64798A"
              />
              <path
                d="M19.0894 18.3682H10.9113V19.1732H19.0894V18.3682Z"
                fill="#2F4859"
              />
              <path
                d="M23.0538 6.40625H6.94623C6.64781 6.40625 6.40623 6.63781 6.40623 6.92346V16.6691C6.40623 16.9547 6.64811 17.1863 6.94623 17.1863H23.0537C23.3518 17.1863 23.5937 16.9547 23.5937 16.6691V6.92346C23.5938 6.63781 23.3519 6.40625 23.0538 6.40625Z"
                fill="#EBF0F3"
              />
              <path
                d="M22.6562 7.30408H7.34373V14.8666H22.6562V7.30408Z"
                fill="#64798A"
              />
              <path
                d="M15 16.5516C15.3711 16.5516 15.6719 16.2635 15.6719 15.9082C15.6719 15.5528 15.3711 15.2648 15 15.2648C14.6289 15.2648 14.3281 15.5528 14.3281 15.9082C14.3281 16.2635 14.6289 16.5516 15 16.5516Z"
                fill="#64798A"
              />
              <path
                d="M23.3956 19.1729H6.60439C6.495 19.1729 6.40629 19.2616 6.40629 19.371V23.3956C6.40629 23.505 6.49506 23.5937 6.60439 23.5937H23.3957C23.5051 23.5937 23.5938 23.505 23.5938 23.3956V19.371C23.5938 19.2616 23.505 19.1729 23.3956 19.1729Z"
                fill="#64798A"
              />
              <path
                d="M13.4475 20.1719H7.29123V21.6606H13.4475V20.1719Z"
                fill="#3A556A"
              />
              <path
                d="M13.4475 22.0437H12.7019V22.3137H13.4475V22.0437Z"
                fill="#EBF0F3"
              />
              <path
                d="M15.4 21.8831C15.7877 21.8831 16.1019 21.5688 16.1019 21.1812C16.1019 20.7936 15.7877 20.4793 15.4 20.4793C15.0124 20.4793 14.6981 20.7936 14.6981 21.1812C14.6981 21.5688 15.0124 21.8831 15.4 21.8831Z"
                fill="#EBF0F3"
              />
              <path
                d="M15.4 21.4969C15.5743 21.4969 15.7157 21.3556 15.7157 21.1812C15.7157 21.0069 15.5743 20.8656 15.4 20.8656C15.2257 20.8656 15.0844 21.0069 15.0844 21.1812C15.0844 21.3556 15.2257 21.4969 15.4 21.4969Z"
                fill="#64798A"
              />
              <path
                d="M17.7137 19.7969H17.4106V22.9722H17.7137V19.7969Z"
                fill="#3A556A"
              />
              <path
                d="M18.7116 19.7969H18.4085V22.9722H18.7116V19.7969Z"
                fill="#3A556A"
              />
              <path
                d="M19.7094 19.7969H19.4062V22.9722H19.7094V19.7969Z"
                fill="#3A556A"
              />
              <path
                d="M20.7062 19.7969H20.4031V22.9722H20.7062V19.7969Z"
                fill="#3A556A"
              />
              <path
                d="M21.7031 19.7969H21.4V22.9722H21.7031V19.7969Z"
                fill="#3A556A"
              />
              <path
                d="M22.7031 19.7969H22.4V22.9722H22.7031V19.7969Z"
                fill="#3A556A"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_436_1672">
              <rect width="30" height="30" fill="white" />
            </clipPath>
            <clipPath id="clip1_436_1672">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      bg: "bg-[#9747FF21]",
      textColor: "text-[#8840E5]",
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
          <g clip-path="url(#clip0_423_777)">
            <path
              d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
              fill="#E0995E"
            />
            <g opacity="0.2">
              <path
                d="M23.2031 10.4531H20.8594C20.8594 10.4531 20.2031 10.4531 19.6875 9.1875C19.4531 8.53125 19.1719 7.92188 18.5156 7.92188H13.8281C13.1719 7.92188 12.8906 8.53125 12.6562 9.1875C12.1875 10.4531 11.4844 10.4531 11.4844 10.4531H10.3125C10.3125 9.75 9.79688 9.1875 9.14062 9.1875H7.96875C7.3125 9.1875 6.79688 9.75 6.79688 10.4531C6.14062 10.4531 5.625 11.0156 5.625 11.7188V21.7031C5.625 22.4062 6.14062 22.9687 6.79688 22.9687H23.2031C23.8594 22.9687 24.375 22.4062 24.375 21.7031V11.7188C24.375 11.0156 23.8594 10.4531 23.2031 10.4531Z"
                fill="#231F20"
              />
            </g>
            <path
              d="M23.2031 9.375H20.8594C20.8594 9.375 20.2031 9.51563 19.6875 8.29688C19.4531 7.64063 19.1719 7.03125 18.5156 7.03125H13.8281C13.1719 7.03125 12.8906 7.64063 12.6562 8.29688C12.1875 9.5625 11.4844 9.375 11.4844 9.375H10.3125C10.3125 8.67188 9.79688 8.4375 9.14062 8.4375H7.96875C7.3125 8.4375 6.79688 8.67188 6.79688 9.375C6.14062 9.375 5.625 10.0781 5.625 10.7812V20.7656C5.625 21.4688 6.14062 22.0312 6.79688 22.0312H23.2031C23.8594 22.0312 24.375 21.4688 24.375 20.7656V10.7812C24.375 10.0781 23.8594 9.375 23.2031 9.375Z"
              fill="#4F5D73"
            />
            <path
              d="M15.9375 19.6875C18.2675 19.6875 20.1562 17.7987 20.1562 15.4688C20.1562 13.1388 18.2675 11.25 15.9375 11.25C13.6075 11.25 11.7188 13.1388 11.7188 15.4688C11.7188 17.7987 13.6075 19.6875 15.9375 19.6875Z"
              fill="#77B3D4"
            />
            <g opacity="0.2">
              <path
                d="M15.9375 21.5625C13.0781 21.5625 10.7812 19.2656 10.7812 16.4062C10.7812 13.5469 13.0781 11.25 15.9375 11.25C18.7969 11.25 21.0938 13.5469 21.0938 16.4062C21.0938 19.2656 18.7969 21.5625 15.9375 21.5625ZM15.9375 13.125C14.1094 13.125 12.6562 14.5781 12.6562 16.4062C12.6562 18.2344 14.1094 19.6875 15.9375 19.6875C17.7656 19.6875 19.2188 18.2344 19.2188 16.4062C19.2188 14.5781 17.7656 13.125 15.9375 13.125Z"
                fill="#231F20"
              />
            </g>
            <path
              d="M15.9375 20.3906C13.2188 20.3906 11.0156 18.1875 11.0156 15.4688C11.0156 12.75 13.2188 10.5469 15.9375 10.5469C18.6562 10.5469 20.8594 12.75 20.8594 15.4688C20.8594 18.1875 18.6562 20.3906 15.9375 20.3906ZM15.9375 11.9531C14.0156 11.9531 12.4219 13.5469 12.4219 15.4688C12.4219 17.3906 14.0156 18.9844 15.9375 18.9844C17.8594 18.9844 19.4531 17.3906 19.4531 15.4688C19.4531 13.5469 17.8594 11.9531 15.9375 11.9531Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_423_777">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      bg: "bg-[#9747FF21]",
      textColor: "text-[#8840E5]",
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

                  {/* {scheduleUnits.length > 3 && (
                      // Code to be rendered if the condition is true
                      
                    )} */}

                  <div>
                    <div className="grid grid-cols-2 gap-2">
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

                  {/* <div className="flex flex-col gap-2">
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
                  </div> */}
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
            <div className="flex justify-center items-center rounded">
              <img
                src="/assets/icons/SILMS_DashB_Illustration.svg"
                alt="Dashboard Illustartion"
                className="w-[300px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 content-center">
                <div className="flex justify-end pt-1 mr-2">
                  <CalenderIcon />
                </div>
                <div className="mr-6">
                  <p className="font-bold text-[0.9rem]">Year 1 Semester 1</p>
                  <p className="text-[#969696] text-[0.6rem] font-bold">2023/2024 Session</p>
                </div>
              </div>
              <Datepicker
                className="flex w-full justify-center"
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
