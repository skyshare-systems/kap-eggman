"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarPage = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isActive, setIsActive] = useState(false);
  const handleBgClick = () => {
    setIsActive((current) => !current);
    setNav(!nav);
  };
  const navigation = [
    {
      route: "/",
      label: "HOME",
    },
    {
      route: "#aboutegg",
      label: "ABOUT $EGG",
    },
    {
      route: "#tokenomics",
      label: "TOKENOMICS",
    },
    {
      route: "#memefi",
      label: "MEMEFI",
    },
  ];

  return (
    <>
      <div className="fixed top-0 w-full flex justify-center items-center bg-white py-2 z-[3] ">
        <div className="flex flex-row justify-between items-center max-w-[1400px] w-full ">
          <p className="font-[bagel] text-[40px] text-white titlestroke">
            $EGG
          </p>

          <div className="hidden lg:flex items-center justify-evenly gap-5 ">
            {navigation.map((data, index) => (
              <Link
                key={index}
                href={data.route}
                className={`font-[bagel] opacity-50 title-stroke-text hover:opacity-100 hover:text-yellow-500 duration-300 text-xl`}
              >
                {data.label}
              </Link>
            ))}
          </div>

          <button className="font-[bagel] text-lg px-3 py-3 border-[1px] border-[#000000] rounded-xl button-shadow hidden lg:flex">
            BUY $EGG
          </button>
        </div>
      </div>

      <div className="fixed right-0 p-5 flex flex-row justify-end lg:hidden z-[999999]">
        <div className="lg:hidden " onClick={handleBgClick}>
          {!nav ? (
            <Image
              src={"/assets/hamburger-icon.svg"}
              alt={"hamburger"}
              height={30}
              width={30}
            />
          ) : (
            <Image
              src={"/assets/hamburger-icon.svg"}
              alt={"hamburger"}
              height={30}
              width={30}
            />
          )}
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-white"
        }
      >
        <div className="flex flex-col items-center gap-y-10">
          {navigation.map((data, index) => (
            <Link
              key={index}
              href={data.route}
              onClick={handleBgClick}
              className={`font-[bagel] opacity-50 title-stroke-text hover:opacity-100 hover:text-yellow-500 duration-300 text-xl`}
            >
              {data.label}
            </Link>
          ))}
          <button className="font-[bagel] text-lg px-3 py-3 border-[1px] border-[#000000] rounded-xl button-shadow">
            BUY $EGG
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
