"use client";
import React from "react";
import Image from "next/image";

const TokenomicsPage = () => {
  function handleClick() {
    navigator.clipboard.writeText("0xed5e50bcE863f390Ff55a4bF6F2D5069d17AC5C0");
  }

  return (
    <div
      className="flex justify-center items-center py-[8rem] bg-[url('/assets/tokenomics-bg.webp')] bg-cover bg-no-repeat"
      id="tokenomics"
    >
      <div className="flex flex-col justify-center items-center grow max-w-[1400px] px-2 2xl:px-1 gap-8">
        <h1 className="text-center text-white font-[bagel] text-xl sm:text-2xl md:text-5xl">
          Tokenomics
        </h1>
        <Image
          src={"/assets/token-data.webp"}
          alt={"tokenomics"}
          height={700}
          width={700}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-8">
          <div className="flex flex-col self-stretch gap-5 w-full h-full max-w-[568px] bg-[#fef500] image-shadow border-[1px] border-[#000000] p-5">
            <div className="flex flex-col">
              <h1 className=" font-[bagel] text-white title-stroke-text text-xl sm:text-2xl md:text-5xl uppercase">
                11,888,520,666
              </h1>
              <h1 className="font-[bagel] text-black text-lg sm:text-xl md:text-3xl uppercase">
                Total Supply
              </h1>
            </div>

            <div className="flex flex-col">
              <h1 className=" font-[bagel] text-white title-stroke-text text-xl sm:text-2xl md:text-5xl uppercase">
                0%
              </h1>
              <h1 className="font-[bagel] text-black text-lg sm:text-xl md:text-3xl uppercase">
                Tax
              </h1>
            </div>
          </div>

          <div className="flex flex-col self-stretch gap-5 w-full max-w-[568px] bg-[#fef500] image-shadow border-[1px] border-[#000000] p-5">
            <div className="flex flex-col grow justify-between">
              <h1 className=" font-[bagel] text-white title-stroke-text text-xl sm:text-2xl md:text-5xl uppercase">
                Contract
              </h1>
              <h1 className="hidden font-[bagel] text-white title-stroke-text text-lg sm:text-xl md:text-3xl uppercase">
                TBA on Launch Day:
              </h1>
              <h1 className="font-[bagel] text-black text-lg sm:text-xl md:text-3xl grow break-all">
                0xed5e50bcE863f390Ff55a4bF6F2D5069d17AC5C0
              </h1>
              <button
                className="font-[bagel] text-white text-base px-4 py-2 bg-[#000000] hover:bg-[#00000032] transition ease-in-out duration-300"
                onClick={() => handleClick()}
              >
                COPY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
