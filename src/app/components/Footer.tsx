import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center py-6 mt-8 bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      {" "}
      <div className="padding-container max-container flex w-full flex-col gap-10 ">
        <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
          <Link href="/" className="mb-6">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>

          <div className="flex flex-wrap gap-6 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              // eslint-disable-next-line react/jsx-key
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-4">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-600">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-4">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30 mt-2">
          {" "}
          {/* Reduced margin-top */}
          2024 Quant Sync | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
