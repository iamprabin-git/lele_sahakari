"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navItems";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ADMIN_ROUTE, HOME_ROUTE } from "@/constants/routes";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Toggle mobile submenu
  const toggleMobileSubmenu = (itemId) => {
    setMobileExpanded(mobileExpanded === itemId ? null : itemId);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={HOME_ROUTE} className="text-xl font-bold dark:text-white">
            <Image 
              src={logo} 
              alt="Logo" 
              width={150} 
              height={50} 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 relative" ref={menuRef}>
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => item.subItems && setOpenSubmenu(item.id)}
                onMouseLeave={() => item.subItems && setOpenSubmenu(null)}
              >
                <Link
                  href={item.url}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    pathname === item.url
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  } transition-colors`}
                >
                  {item.title}
                  {item.subItems && (
                    <FiChevronDown className="ml-1 text-sm" />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.subItems && openSubmenu === item.id && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.id} className="relative group">
                        <Link
                          href={subItem.url}
                          className={`flex items-center justify-between px-4 py-2 ${
                            pathname === subItem.url
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {subItem.title}
                          {subItem.subItems && (
                            <FiChevronRight className="text-xs" />
                          )}
                        </Link>

                        {/* Second Level Dropdown */}
                        {subItem.subItems && (
                          <div className="absolute left-full top-0 ml-1 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-gray-700">
                            {subItem.subItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.id}
                                href={nestedItem.url}
                                className={`block px-4 py-2 ${
                                  pathname === nestedItem.url
                                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {nestedItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              href={ADMIN_ROUTE} 
              className="hidden md:block text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
            >
              Admin
            </Link>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden bg-white dark:bg-gray-900 py-2"
            ref={menuRef}
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="border-b border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-center">
                  <Link
                    href={item.url}
                    className={`block py-3 px-4 flex-grow ${
                      pathname === item.url
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.title}
                  </Link>
                  
                  {item.subItems && (
                    <button
                      className="px-4 py-3"
                      onClick={() => toggleMobileSubmenu(item.id)}
                      aria-label={`Toggle ${item.title} submenu`}
                    >
                      <FiChevronDown 
                        className={`transition-transform ${
                          mobileExpanded === item.id ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {item.subItems && mobileExpanded === item.id && (
                  <div className="bg-gray-50 dark:bg-gray-800 pl-6">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.id} className="border-b border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-center">
                          <Link
                            href={subItem.url}
                            className={`block py-2 px-4 flex-grow ${
                              pathname === subItem.url
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {subItem.title}
                          </Link>
                          
                          {subItem.subItems && (
                            <button
                              className="px-4 py-2"
                              onClick={() => toggleMobileSubmenu(`sub-${subItem.id}`)}
                            >
                              <FiChevronDown 
                                className={`text-xs transition-transform ${
                                  mobileExpanded === `sub-${subItem.id}` ? "rotate-180" : ""
                                }`} 
                              />
                            </button>
                          )}
                        </div>
                        
                        {/* Nested Submenu */}
                        {subItem.subItems && mobileExpanded === `sub-${subItem.id}` && (
                          <div className="bg-gray-100 dark:bg-gray-700/50 pl-6">
                            {subItem.subItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.id}
                                href={nestedItem.url}
                                className={`block py-2 px-4 ${
                                  pathname === nestedItem.url
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {nestedItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href={ADMIN_ROUTE} 
              className="block py-3 px-4 text-green-600 dark:text-green-400"
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}