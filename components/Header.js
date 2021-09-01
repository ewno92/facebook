import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="flex items-center">
      {/* <h1 className="text-5xl">Header</h1> */}
      <Image src={Logo} height={40} width={40} layout="fixed" />
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
      {/* left */}
      {
        /* center */

        <div className="flex justify-center flex-grow">
          <div>
            <HeaderIcon Icon={HomeIcon} />
          </div>
        </div>
      }
      {/* right */}
    </div>
  );
};

export default Header;
