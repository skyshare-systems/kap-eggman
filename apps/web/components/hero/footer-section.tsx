import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterPage = () => {
  const socmed = [
    {
      id: 1,
      name: "telegram",
      imgUrl: "/assets/socmed/telegram-icon.svg",
      linkUrl: "https://t.me/eggthecoin",
    },
    {
      id: 2,
      name: "twitter",
      imgUrl: "/assets/socmed/twitter-icon.svg",
      linkUrl: "https://twitter.com/eggmancoin",
    },
    // {
    //   id: 3,
    //   name: "youtube",
    //   imgUrl: "/assets/socmed/youtube-icon.svg",
    //   linkUrl: "/",
    // },
    // {
    //   id: 4,
    //   name: "discord",
    //   imgUrl: "/assets/socmed/discord-icon.svg",
    //   linkUrl: "/",
    // },
  ];

  return (
    <footer className="flex flex-col justify-center items-center py-[4rem] h-auto bg-[url('/assets/footer-bg.webp')] bg-cover bg-center bg-black">
      <div className="flex flex-col justify-center items-center max-w-[1400px] gap-6 grow">
        <div className="flex flex-wrap items-center justify-evenly gap-5">
          {socmed.map((data, index) => {
            return (
              <Link key={index} href={data.linkUrl} target="_blank">
                <Image
                  src={data.imgUrl}
                  alt={data.name}
                  height={50}
                  width={50}
                  className="bg-white rounded-full socmed-shadow border-[2px] border-[#000000] hover:opacity-50 duration-200"
                />
              </Link>
            );
          })}
        </div>
        <h1 className="text-white text-center max-w-[1000px] font-[redhatdisplay]">
          Disclaimer: EGGMANCOIN is a memecoin for entertainment purposes only.
          Eggman&#39;s MemeFi and EggFarm is an experiment. This is not a
          solicitation of investment. Buyers do not have expectation of
          financial return. Any losses incurred is the sole responsibility Of
          the buyer this is for fun and entertainment only. There is risk of the
          loss of all capital for any buyers or stakers in Eggman.
        </h1>
        <p className="text-white/50 text-center font-[redhatdisplay]">
          Copyright © 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
