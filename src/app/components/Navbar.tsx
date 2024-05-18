"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Close } from "@mui/icons-material";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <p className="bold-18 whitespace-nowrap">Blue Board</p>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>
              <div className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden relative">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMobileMenu}
        />
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
            <ul className="absolute top-0 left-0 w-64 h-full bg-white">
              <li className="flex justify-between items-center px-4 py-2">
                <div></div>
                <div className="cursor-pointer" onClick={closeMobileMenu}>
                  <Close fontSize="large" />
                </div>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link href={link.href}>
                    <div
                      className="block py-4 px-6 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
