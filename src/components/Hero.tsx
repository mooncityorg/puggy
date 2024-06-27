"use client";
import Link from "next/link";
import React, { FC } from "react";
import { DiscordIcon, Instagram, TelegramIcon, TwitterIcon } from "./Icons";
import MovingBar from "./MovingBar";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="min-h-[800px] 2xl:min-h-[calc(100vh-40px)] bg-[#feeabd] relative pb-[120px] z-20">
      <div className="grid place-content-center py-10">
        <Image
          src="/media/pugclub.webp"
          className=""
          width={300}
          height={10}
          alt=""
        />
        <p className="uppercase text-xl lg:text-3xl text-center my-6 lg:my-8 font-bold text-pink-600 relative z-50">
          powerd by $PUGGY
        </p>
      </div>
      <div className="w-3/4 lg:w-[50%] aspect-video absolute left-0 bottom-0">
        <Image
          src="/media/puggy_1.gif"
          className="w-full h-full object-contain"
          fill
          alt=""
        />
      </div>
      <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 w-full md:w-[560px] mx-auto lg:mx-0 mt-20 lg:mt-0 px-10">
        <p className="px-4 sm:px-0 text-black text-2xl md:text-3xl leading-[1.4] md:-ml-10 -mt-10 text-left">
          Welcome to The Pug Club.
          <br />
          <br />
          $PUGGY is the token that will power our asociation to make it one of the biggest Alpha Groups in the space.
        </p>
        <div className="flex items-center gap-2 lg:gap-6 justify-center relative z-50 flex-col md:flex-row">
          <Link href={"/"}>
            <div className="w-[160px] lg:w-[300px] h-[50px] lg:h-[80px] bg-red-500 border-2 border-black duration-200 hover:scale-105 uppercase grid place-content-center text-xl lg:text-4xl rotate-3 my-10">
              buy $puggy
            </div>
          </Link>
          <div className="flex items-center justify-center gap-2 lg:gap-6 mb-5 md:mb-0">
            <Link href={"https://x.com/onepugclub"} target="_blank">
              <div className="w-9 lg:w-[60px] h-9 lg:h-[60px] bg-black duration-200 hover:scale-110 grid place-content-center -rotate-1">
                <TwitterIcon />
              </div>
            </Link>
            <Link href={"https://t.me/puggyclub"} target="_blank">
              <div className="w-9 lg:w-[60px] h-9 lg:h-[60px] bg-black duration-200 hover:scale-110 grid place-content-center  -rotate-3">
                <TelegramIcon />
              </div>
            </Link>
            <Link href={"#"} target="_blank">
              <div className="w-9 lg:w-[60px] h-9 lg:h-[60px] bg-black duration-200 hover:scale-110 grid place-content-center rotate-6">
                <Instagram />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
