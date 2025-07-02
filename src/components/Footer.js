// components/layout/Footer.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

import { FOOTER_DATA } from "@/constants/footer";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { BsEnvelopeAtFill } from "react-icons/bs";
import SocialMedia from "./SocialMedia";
import VisitorCounter from "./VisitorCounter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white text-slate-950 dark:bg-slate-900 dark:text-white shadow-2xl shadow-black ">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex ">
              <Image
                src={logo}
                alt="Cooperative Logo"
                width={1000}
                height={1000}
                className="w-25 h-25 object-cover"
              />
              <h3 className="text-2xl font-bold m-2 gap-2">
                Lele Agriculture Cooperative Ltd.
              </h3>
            </div>

            <p className=" text-slate-900 dark:text-white mb-6 max-w-md">
              {FOOTER_DATA.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapLocationDot className="w-5 h-5 mr-3 mt-0.5 text-slate-900 dark:text-white" />

                <span className=" text-slate-900 dark:text-white">
                  {FOOTER_DATA.contact.address}
                </span>
              </div>
              <div className="flex items-center">
                <MdPhoneInTalk className="w-5 h-5 mr-3 mt-0.5 text-slate-900 dark:text-white" />
                <span className=" text-slate-900 dark:text-white">
                  {FOOTER_DATA.contact.phone}
                </span>
              </div>
              <div className="flex items-center">
                <BsEnvelopeAtFill className="w-5 h-5 mr-3 mt-0.5 text-slate-900 dark:text-white" />
                <span className=" text-slate-900 dark:text-white">
                  {FOOTER_DATA.contact.email}
                </span>
              </div>
            </div>
            {/* Social Media */}
            <SocialMedia className="mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Navigation Links */}
            {FOOTER_DATA.links.map((section) => (
              <div key={section.title} className="mt-6 md:mt-0 ">
                <h3 className="text-lg font-semibold mb-4 ">{section.title}</h3>
                <ul className="space-y-3 ">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className=" text-slate-900 dark:text-white hover:text-white transition-colors "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              
            </div>
            
          </div>
          <VisitorCounter />
          
        </div>
        <p className="text-slate-900 dark:text-white text-sm flex justify-end">Design and Developed by <Link href="https://dangolprabin.com.np/" className="text-blue-900 dark:text-white hover:text-red-500 transition-colors text-md justify-center"> Prabin Dangol</Link></p>

        {/* Legal and Copyright */}
        <div className="border-t border-slate-800 mt-2 pt-5 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-900 dark:text-white text-sm">
              © {currentYear} Lele Agriculture Cooperative Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {FOOTER_DATA.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" text-slate-900 dark:text-white hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
