"use client";
import React, { useState, useEffect } from "react";
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

  const hide = "hidden";
  const show = "auto";

  useEffect(() => {
    nav
      ? (document.body.style.overflowY = hide)
      : (document.body.style.overflowY = show);
  }, [nav]);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-center items-center bg-white py-2 z-[999999] ">
        <div className="flex flex-row justify-between items-center max-w-[1400px] w-full ">
          <p className="font-[bagel] text-[40px] text-white titlestroke">
            $EGG
          </p>

          <div className="hidden lg:flex items-center justify-evenly gap-5 ">
            {navigation.map((data, index) => (
              <a
                key={index}
                href={data.route}
                className={`font-[bagel] opacity-50 title-stroke-text hover:opacity-100 hover:text-yellow-500 duration-300 text-xl`}
              >
                {data.label}
              </a>
            ))}
          </div>
          <Link
            target="_blank"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x71C7656EC7ab88b098defB751B7401B5f6d8976F&inputCurrency=%200xed5e50bcE863f390Ff55a4bF6F2D5069d17AC5C0"
          >
            <button className="font-[bagel] text-lg px-3 py-3 border-[1px] border-[#000000] rounded-xl button-shadow hidden lg:flex">
              BUY $EGG
            </button>
          </Link>
        </div>
      </div>

      <div className="fixed right-0 p-5 flex flex-row justify-end lg:hidden z-[99999999]">
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
            : "fixed inset-0 h-screen w-screen flex flex-col justify-center items-center bg-white z-[9999999]"
        }
      >
        <div className="flex flex-col items-center gap-y-10">
          {navigation.map((data, index) => (
            <a
              key={index}
              href={data.route}
              onClick={handleBgClick}
              className={`font-[bagel] opacity-50 title-stroke-text hover:opacity-100 hover:text-yellow-500 duration-300 text-xl`}
            >
              {data.label}
            </a>
          ))}
          <Link
            target="_blank"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x71C7656EC7ab88b098defB751B7401B5f6d8976F&inputCurrency=%200xed5e50bcE863f390Ff55a4bF6F2D5069d17AC5C0"
          >
            <button className="font-[bagel] text-lg px-3 py-3 border-[1px] border-[#000000] rounded-xl button-shadow">
              BUY $EGG
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
