import React from "react";
// eslint-disable-next-line camelcase
import { Red_Hat_Display } from "next/font/google";
import Image from "next/image";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
});

const HeroPage = () => {
  return (
    <div className="relative flex flex-col justify-center pt-[5rem] items-center">
      <Image
        src={"/assets/bg-egg.webp"}
        alt={"Egg"}
        height={2000}
        width={2000}
      />
      <h1 className="absolute bottom-5 md:bottom-10 font-[bagel] text-4xl sm:text-5xl md:text-8xl text-white titlestroke sm:title-stroke-egg">
        #EGGMAN
      </h1>
    </div>
  );
};

export default HeroPage;
