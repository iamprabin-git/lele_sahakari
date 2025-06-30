// components/layout/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import SocialIcon from './ui/SocialIcons';
import { FOOTER_DATA, SOCIAL_LINKS } from '@/constants/footer';
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" bg-white text-slate-950 dark:bg-slate-900 dark:text-white shadow-2xl shadow-black ">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
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
               <h3 className='text-2xl font-bold m-2 gap-2'>Lele Agriculture Cooperative Ltd.</h3>
            </div>
           
            <p className="text-slate-300 mb-6 max-w-md">
              {FOOTER_DATA.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapLocationDot className='w-5 h-5 mr-3 mt-0.5 text-slate-400' />
                
                <span className="text-slate-400">{FOOTER_DATA.contact.address}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-400">{FOOTER_DATA.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-400">{FOOTER_DATA.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {FOOTER_DATA.links.map((section) => (
            <div key={section.title} className="mt-6 md:mt-0">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2 rounded-full hover:bg-cooperative-primary transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-500 text-sm">
              © {currentYear} Cooperative Name. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {FOOTER_DATA.legal.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
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