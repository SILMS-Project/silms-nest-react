import AttendanceIcon from "@/assets/icons/AttendanceIcon";
import CoursesIcon from "@/assets/icons/CoursesIcon";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import EnrollmentIcon from "@/assets/icons/EnrollmentIcon";
import ResultIcon from "@/assets/icons/ResultIcon";
import ScheduleIcon from "@/assets/icons/ScheduleIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import { updateMenu } from "@/store/slices/menuSlice";
import { RootState } from "@/store/store";
import { cloneElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideNavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const activeSideMenu = useSelector<RootState>((state) => state.menu);

  const { menu }: any = activeSideMenu;

  const handleSideMenuClick = (sidemenu: number) => {
    dispatch(updateMenu(sidemenu));
  };

  const menus = [
    {
      title: "Dashboard",
      link: "",
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

  useEffect(() => {
    const pathName = location.pathname
      .split("/")
      .filter((element) => element !== "");
    const pathTitle = pathName[0];
    const sideMenuTitle = menus.find((sidemenu) => sidemenu.link === pathTitle)
      ?.title;

    if (sideMenuTitle && sideMenuTitle !== activeSideMenu) {
      handleSideMenuClick(
        menus.findIndex((sidemenu) => sidemenu.title === sideMenuTitle)
      );
    }
  }, [location.pathname, menus, activeSideMenu, dispatch]);

  return (
    <div className="flex flex-col">
      {menus.map(({ title, link, icon }, index) => (
        <Link to={`/${link}`} className="hover:no-underline" key={index}>
          <button
            className={`shadow-sm border ${
              menu === index ? "bg-brand-secondary" : ""
            } w-48 py-6 mb-11 flex items-center justify-between focus:outline-none`}
          >
            {cloneElement(icon, { isActive: menu === index })}
            <span
              className={`text-${menu === index ? "white" : "brand-secondary"}`}
            >
              {title}
            </span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default SideNavBar;
