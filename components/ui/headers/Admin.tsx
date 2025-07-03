"use client";

import { MdOutlineMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSearch } from "@/lib/redux";
import classNames from "classnames";
import { authActions } from "@/actions";

export function AdminHeader({
  toggle,
  toggleProfile,
  profile,
}: AdminHeaderProps) {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.auth);
  const [search, localSearch] = useState("");
  const { logout } = authActions();

  const menuClass = classNames(
    "profile-menu absolute top-[72px] lg:top-[100px] right-2 w-[200px] bg-primary-dark border border-primary-dark rounded-md text-white",
    { hidden: !profile }
  );
  return (
    <header className="flex fixed top-0 z-20 bg-primary-dark h-16 md:h-[100px] text-white w-full items-center p-4 justify-between font-sans border-b">
      <div className="hidden md:block w-[280px]"></div>
      <span
        className="border rounded-md p-2 block md:hidden cursor-pointer"
        onClick={toggle}
      >
        <MdOutlineMenu />
      </span>
      <Input
        placeholder="Search"
        startAdornment={
          <span className="p-1">
            <FiSearch />
          </span>
        }
        className="bg-background rounded-md text-black ml-6 lg:ml-0 lg:w-[280px]"
        value={search}
        onChange={(e) => {
          localSearch(e.target.value);
          if (!e.target.value) {
            dispatch(setSearch(""));
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(setSearch(search));
          }
        }}
      />
      <div className="flex w-[80%] justify-between items-center gap-2 lg:gap-4 px-4">
        <h2 className="font-sans text-primary-dark">WIST</h2>
        <div>
          <span
            className="text-white relative hover:text-primary-light transition-all duration-300 cursor-pointer"
            onClick={toggleProfile}
          >
            <FaUserCircle size={36} />
          </span>
          <div className={menuClass}>
            <h4 className="p-2 border-b">{email}</h4>
            <ul className="flex flex-col">
              <li className="hover:bg-primary-shade hover:text-white p-2 transition-all duration-300 cursor-pointer">
                Profile
              </li>
              <li className="hover:bg-primary-shade hover:text-white p-2 transition-all duration-300 cursor-pointer">
                Settings
              </li>
              <li
                className="hover:bg-primary-shade hover:text-white p-2 transition-all duration-300 cursor-pointer"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
