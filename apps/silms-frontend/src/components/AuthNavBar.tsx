import { useEffect } from "react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

const AuthNavBar = () => {
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
    <Navbar fluid className="h-[4.125rem] w-full bg-white shadow-custom z-20 top-0 left-0 fixed">
      <NavbarBrand className="md:px-8 px-3 gap-3" href="/">
        <img src="/assets/icons/app-icon.svg" alt="Wisr Logo" />
        <span className="self-center text-black  whitespace-nowrap text-3xl font-semibold dark:text-white">
          Wisr
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        <img src="/assets/icons/notifications-icon.svg" alt="Notification" />

        <Dropdown
          arrowIcon={true}
          inline
          
          label={
            <div className="flex gap-3">
              <Avatar
                alt="User settings"
                img="/assets/images/auth-profile-image.png"
                rounded
              />
              <div className="flex flex-col text-start">
                <p className="text-xs font-bold">Rukevwe Adams</p>
                <p className="text-[0.625rem] font-medium">CSC 2022/23</p>
              </div>
            </div>
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
    </Navbar>
  );
};

export default AuthNavBar;
