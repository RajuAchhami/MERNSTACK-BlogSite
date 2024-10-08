import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-base sm:text-lg font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-[#FF9224] text-white rounded-md">
          Raju's
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search...."
          rightIcon={IoIosSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10  lg:hidden " color="gray">
        <IoIosSearch className="text-xl self-center" />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline " color="gray" pill>
          <IoMoon />
        </Button>

        <Link to="/signin">
          <Button>Sign In</Button>
        </Link>
        <NavbarToggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
