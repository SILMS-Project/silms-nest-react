import { useCallback, useEffect } from "react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";
import { UserStateProps } from "../store/interfaces/user.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import AttendanceIcon from "../assets/icons/AttendanceIcon";
import CoursesIcon from "../assets/icons/CoursesIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import EnrollmentIcon from "../assets/icons/EnrollmentIcon";
import ResultIcon from "../assets/icons/ResultIcon";
import ScheduleIcon from "../assets/icons/ScheduleIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import { appApi } from "../store/slices/appSlice";
import { logoutUser } from "../store/slices/authSlice";
import { Link } from "react-router-dom";
// import { useGetCurrentSessionQuery } from "../store/slices/appSlice";

const AuthNavBar = () => {
  const authSlice = useSelector<RootState, UserStateProps>(
    (state) => state.auth.user
  );

  const dispatch = useDispatch();

  const menus = [
    {
      title: "Dashboard",
      link: "student-dashboard",
      icon: <DashboardIcon />,
      isActive: true,
    },
    {
      title: "Courses",
      link: "courses",
      icon: <CoursesIcon />,
      isActive: false,
    },
    {
      title: "Result",
      link: "result",
      icon: <ResultIcon />,
      isActive: false,
    },
    {
      title: "Enrollment",
      link: "enrollment",
      icon: <EnrollmentIcon />,
      isActive: false,
    },
    {
      title: "Schedule",
      link: "schedule",
      icon: <ScheduleIcon />,
      isActive: false,
    },
    {
      title: "Attendance",
      link: "attendance",
      icon: <AttendanceIcon />,
      isActive: false,
    },
    {
      title: "Settings",
      link: "settings",
      icon: <SettingsIcon />,
      isActive: false,
    },
  ];

  const handleLogout = useCallback(() => {
    dispatch(appApi.util.resetApiState());
    dispatch(logoutUser());
  }, []);


  // const {data: currentSessionData} = useGetCurrentSessionQuery();

  useEffect(() => {
    const menuButton: any = document.getElementById("menu-button");
    const sideMenu: any = document.querySelector(".side-menu");

    if (menuButton) {
      menuButton.addEventListener("click", () => {
        if (sideMenu.style.transform === "translateX(0)") {
          sideMenu.style.transform = "translateX(-100%)";
        } else {
          sideMenu.style.transform = "translateX(0)";
        }
      });
    }
  }, []);

  return (
    <Navbar
    fluid
    className="h-[4.125rem] w-full bg-white shadow-custom z-20 top-0 left-0 fixed"
  >
    <NavbarBrand className="md:px-8 px-2 gap-2 md:gap-3" href="/">
      <img src="/assets/icons/app-icon.svg" alt="Logo" />
      <p className="self-center text-black  whitespace-nowrap text-xl md:text-3xl font-semibold dark:text-white">
        Wisr<span className="text-custom-primary-1">Hub</span>
      </p>
    </NavbarBrand>
    <div className="hidden lg:flex md:pr-8 md:order-2 gap-1 md:gap-3">
      <img src="/assets/icons/notifications-icon.svg" alt="Notification" />

      <Dropdown
        arrowIcon={true}
        inline
        label={
          <div className="flex gap-2 md:gap-3">
            <div className="flex flex-col text-start">
              <p className="text-xs font-bold text-custom-primary-1">{`${
                authSlice?.firstName || "Adeola"
              } ${authSlice?.lastName || "Adams"}`}</p>
              <p className="text-[0.625rem] font-medium">Inventory Manager</p>
            </div>
            <Avatar
              alt="User settings"
              img="/assets/images/profile.png"
              rounded
            />
          </div>
        }
      >
        <DropdownHeader>
          <p className="text-xs font-bold text-custom-primary-1">{`${
            authSlice?.firstName || "Adeola"
          } ${authSlice?.lastName || "Adams"}`}</p>
          <span className="block truncate text-sm font-medium">
            User
          </span>
        </DropdownHeader>

        {menus.map(({ title, link }, index) => (
          <DropdownItem className="w-full" key={index}>
            <Link className="w-full" to={`/${link}`} key={index}>
              <div className="flex w-full">{title}</div>
            </Link>
          </DropdownItem>
        ))}
        <DropdownDivider />
        <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
      </Dropdown>
    </div>
    <div className="flex lg:hidden md:pr-8 md:order-2 gap-1 md:gap-3">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <div className="flex gap-2 items-center md:gap-3">
            <Avatar
              alt="User settings"
              img="/assets/images/profile.png"
              rounded
            />
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        }
      >
        <DropdownHeader>
          <p className="text-sm font-bold text-custom-primary-1">{`${
            authSlice?.firstName || "Adeola"
          } ${authSlice?.lastName || "Adams"}`}</p>
          <span className="block truncate text-xs font-medium">
            Inventory Manager
          </span>
        </DropdownHeader>

        {menus.map(({ title, link }, index) => (
          <DropdownItem className="w-full" key={index}>
            <Link className="w-full" to={`/${link}`} key={index}>
              <div className="flex w-full">{title}</div>
            </Link>
          </DropdownItem>
        ))}
        <DropdownDivider />
        <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
      </Dropdown>
    </div>
  </Navbar>
  );
};

export default AuthNavBar;
