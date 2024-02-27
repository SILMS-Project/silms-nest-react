import AttendanceIcon from "../assets/icons/AttendanceIcon";
import CoursesIcon from "../assets/icons/CoursesIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import EnrollmentIcon from "../assets/icons/EnrollmentIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import ResultIcon from "../assets/icons/ResultIcon";
import ScheduleIcon from "../assets/icons/ScheduleIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import { appApi } from "../store/slices/appSlice";
import { logoutUser } from "../store/slices/authSlice";
import { updateMenu } from "../store/slices/menuSlice";
import { RootState } from "../store/store";
import { cloneElement, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const activeSideMenu = useSelector<RootState>((state) => state.menu);

  const { menu }: any = activeSideMenu;

  const handleSideMenuClick = (sidemenu: number) => {
    dispatch(updateMenu(sidemenu));
  };

  const handleLogout = useCallback(() => {
    dispatch(appApi.util.resetApiState());
    dispatch(logoutUser());
  }, []);

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
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col mt-28 gap-4">
        {menus.map(({ title, link, icon }, index) => (
          <Link to={`/${link}`} key={index}>
            <button
              className={` ${
                menu === index ? "bg-custom-accent-1" : ""
              } w-[10rem] py-3 px-[1.12rem] gap-[0.62rem] rounded-[0.3125rem] flex items-center  focus:outline-none`}
            >
              {cloneElement(icon, { isActive: menu === index })}
              <span className={`text-black text-center text-base font-medium`}>
                {title}
              </span>
            </button>
          </Link>
        ))}
        <button
          className={` w-[10rem] py-3 px-[1.12rem] gap-[0.62rem] rounded-[0.3125rem] flex items-center  focus:outline-none`}
          onClick={handleLogout}
        >
          {cloneElement(<LogoutIcon />)}
          <span className={`text-black text-center text-base font-medium`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
