"use client";

import { MdOutlineMenu } from "react-icons/md";
import { AppButton } from "../Button";
import Link from "next/link";

export function AppHeader({ toggle }: AppHeaderProps) {
  return (
    <header className="flex fixed top-0 z-30 bg-primary-dark h-16 md:h-[100px] text-white w-full items-center p-4 justify-between font-sans border-b">
      <div className="hidden md:block w-[12%]"></div>
      <span
        className="border rounded-md p-2 block md:hidden cursor-pointer"
        onClick={toggle}
      >
        <MdOutlineMenu />
      </span>
      <h1 className="font-sans">WIST</h1>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-primary-light transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-primary-light transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-primary-light transition-all duration-300"
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        href="/login"
        className="text-white hover:text-primary-light transition-all duration-300"
      >
        Admin
      </Link>
      <div className="hidden md:block w-[12%]"></div>
    </header>
  );
}
