import React from "react";
// eslint-disable-next-line camelcase
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
});

const HeroPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[url('/assets/bg-egg.webp')] bg-cover bg-center">
      <div className="flex items-end max-w-[1400px] max-h-[80vh] grow">
        <h1 className="font-[bagel] text-4xl sm:text-5xl md:text-8xl text-white titlestroke sm:title-stroke-egg">
          #EGGMAN
        </h1>
      </div>
    </div>
  );
};

export default HeroPage;
