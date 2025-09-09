"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative min-h-screen md:pt-28 md:pb-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-start mt-32">
              <Image
                src= {`${getImagePrefix()}images/icons/icon-consulting-blue.svg`}
                alt="icon"
                width={40}
                height={40}
              />
              <p className="text-start text-white sm:text-28 text-28 mb-0">
                Your Digital <span className="text-primary">Partner</span>
              </p>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white my-12">
              Empowering <span className="text-primary">Ideas</span> Through Digital{" "}
              <span className="text-primary">Innovation</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-2 md:gap-8 flex-nowrap">
              <Link
                href="https://wa.me/6281770777164?text=Halo%20ESCW%20Labs,%20saya%20siap%20untuk%20memulai%20proyek%20pengembangan%20software.%20Saya%20ingin%20mendiskusikan%20kebutuhan%20dan%20timeline%20proyek%20saya."
                className="bg-primary border border-primary rounded-lg md:text-lg font-medium hover:bg-transparent hover:text-primary text-darkmode text-center py-2 px-3 md:px-6 whitespace-nowrap"
                target="_blank"
              >
                Start Your Project
              </Link>
              <Link
                href="#services"
                className="bg-transparent border border-primary rounded-lg md:text-lg font-medium hover:bg-primary hover:text-darkmode text-primary text-center py-2 px-3 md:px-6 whitespace-nowrap"
              >
                Learn Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-6 lg:flex hidden items-center justify-center"
          >
            <Image
              src={`${getImagePrefix()}images/hero/banner-image.png`}
              alt="Banner"
              width={1150}
              height={1150}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
        
        <CardSlider />

        {/* Scroll Indicator */}
        <div className="mt-12 md:hidden">
          <motion.div
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon icon="mdi:chevron-down" className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div 
        className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1" 
      />
    </section>
  );
};

export default Hero;
