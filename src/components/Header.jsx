import { Avatar } from "antd";
import {
  UserOutlined,
  BellOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import SideNavBar from "./side-navbar/SideNavBar";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between min-[800px]:justify-end">
        <div
          className="max-[800px]:block min-[800px]:hidden"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <MenuOutlined />
        </div>
        <div className="flex gap-8 ">
          <BellOutlined />
          <Avatar icon={<UserOutlined />} />
        </div>
      </div>
      {toggleMenu && (
        <div className="min-[800px]:hidden max-[800px]:block max-[800px]:fixed top-0 left-0 h-full z-10 w-full">
          <p
            className="fixed top-5 right-12 text-white"
            onClick={() => setToggleMenu(false)}
          >
            <CloseOutlined />
          </p>
          <SideNavBar />
        </div>
      )}
    </>
  );
}
