"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { HiCalculator } from "react-icons/hi";
import { BsPersonFillAdd } from "react-icons/bs";
import { EMI_ROUTE, MEMBERSHIP_ROUTE, QR_ROUTE } from "@/constants/routes";

const HoverDropdown = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    {
      icon: (
        <BsQrCode />
      ),
      label: "Online Payment QR",
      link: QR_ROUTE,
    },
    {
      icon: (
       <HiCalculator />
      ),
      label: "EMI Calculator",
      link: EMI_ROUTE,
    },
    {
      icon: (
       <BsPersonFillAdd />
      ),
      label: "Account Opening Form",
      link: MEMBERSHIP_ROUTE,
    },
    // Add other menu items as needed...
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex">
      {/* Vertical Button */}
      <div
        className="relative z-50"
        onMouseEnter={() => setIsDrawerOpen(true)}
        onMouseLeave={() => setIsDrawerOpen(false)}
      >
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-l-lg text-sm px-4 py-2 flex items-center justify-center"
          type="button"
          aria-expanded={isDrawerOpen}
          aria-controls="drawer-navigation"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upsideDown",
            letterSpacing: "1px",
          }}
        >
          Quick Links
        </button>
            
      </div>

      {/* Drawer Component */}
      <div
        id="drawer-navigation"
        className={`relative z-50 w-64 h-80 p-4 overflow-y-auto transition-all duration-300 bg-white dark:bg-gray-800 ${
          isDrawerOpen ? "ml-0 opacity-100" : "ml-[-256px] opacity-0"
        }`}
        onMouseEnter={() => setIsDrawerOpen(true)}
        onMouseLeave={() => setIsDrawerOpen(false)}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        aria-modal="true"
        role="dialog"
      >
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
              {item.icon}
                <span className="ms-3">{item.label}</span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoverDropdown;
