"use client";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import Button from "./Button";
import { Close } from "@mui/icons-material";
import { NAV_LINKS } from "../constants";

interface NavLink {
  key: string;
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const handleReload = () => {
    window.location.assign("/");
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <p className="bold-18 whitespace-nowrap" onClick={handleReload}>
        Quant Sync
      </p>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={`#${link.href}`}
              onClick={(event) => handleScroll(event, link.href)}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Get in touch"
          icon="/connect.svg"
          variant="btn_dark_custom_blue"
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
                  <a
                    href={`#${link.href}`}
                    onClick={(event) => handleScroll(event, link.href)}
                    className="block py-4 px-6 text-gray-800 hover:bg-gray-200"
                  >
                    {link.label}
                  </a>
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
