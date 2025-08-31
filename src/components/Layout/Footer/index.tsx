import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="bg-darkmode" id="contact">
      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Company Info Section */}
            <div className="md:col-span-5 lg:col-span-6">
              <div className="mb-8">
                <Logo />

                <p className="text-gray-300 text-base leading-relaxed max-w-md mt-4">
                  ESCW Labs is your trusted technology partner for custom software development, digital solutions, and innovative products that drive business growth.
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className="mb-8">
                <h4 className="text-white text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Link 
                    href="#" 
                    className="group bg-white bg-opacity-10 hover:bg-primary transition-all duration-300 rounded-full p-3"
                    aria-label="Facebook"
                  >
                    <Icon
                      icon="fa6-brands:facebook-f"
                      width="20"
                      height="20"
                      className="text-white group-hover:text-white transition-colors duration-300"
                    />
                  </Link>
                  <Link 
                    href="https://www.instagram.com/escwlabs" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white bg-opacity-10 hover:bg-primary transition-all duration-300 rounded-full p-3"
                    aria-label="Instagram"
                  >
                    <Icon
                      icon="fa6-brands:instagram"
                      width="20"
                      height="20"
                      className="text-white group-hover:text-white transition-colors duration-300"
                    />
                  </Link>
                  <Link 
                    href="#" 
                    className="group bg-white bg-opacity-10 hover:bg-primary transition-all duration-300 rounded-full p-3"
                    aria-label="Twitter"
                  >
                    <Icon
                      icon="fa6-brands:x-twitter"
                      width="20"
                      height="20"
                      className="text-white group-hover:text-white transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-3 lg:col-span-2">
              <h4 className="text-white mb-6 font-medium text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {headerData.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 text-base inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="text-white mb-6 font-medium text-lg">Contact Info</h4>
              
              {/* Contact Links */}
              <div className="space-y-4 mb-6">
                <Link 
                  href="https://wa.me/62811252497?text=Halo%20ESCW%20Labs,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pengembangan%20software%20untuk%20bisnis%20saya.%20Bisakah%20kita%20diskusi%20lebih%20lanjut%3F"
                  className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
                  target="_blank"
                >
                  <Icon
                    icon="tabler:phone"
                    width="20"
                    height="20"
                    className="text-primary flex-shrink-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    +62 811 2524 97
                  </span>
                </Link>
                
                <Link 
                  href="mailto:info@escwlabs.com" 
                  className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
                >
                  <Icon
                    icon="tabler:mail"
                    width="20"
                    height="20"
                    className="text-primary flex-shrink-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    info@escwlabs.com
                  </span>
                </Link>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="tabler:map-pin"
                    width="20"
                    height="20"
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-300 text-base leading-relaxed">
                    Ruko Sentra Niaga Kalimalang, Jl. Ahmad Yani, RW.011, 
                    Kayuringin Jaya, Kec. Bekasi Selatan, Kota Bekasi
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Section - Uncomment if needed */}
            {/* <div className="md:col-span-12 lg:col-span-4">
              <h4 className="text-white mb-6 font-medium text-lg">Stay Updated</h4>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                Subscribe to get the latest news and updates from ESCW Labs
              </p>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="bg-white bg-opacity-5 border border-white border-opacity-20 py-4 px-6 text-white placeholder-gray-400 rounded-lg w-full focus:outline-none focus:border-primary focus:bg-opacity-10 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-md p-2"
                  aria-label="Subscribe"
                >
                  <Icon
                    icon="tabler:send"
                    width="20"
                    height="20"
                    className="text-white"
                  />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-10">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 ESCW Labs. All rights reserved.
            </p>
            
            {/* Footer Legal Links */}
            <div className="flex gap-6 text-sm">
              {/* <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;