import React from "react";
import Link from "next/link";

const NavbarPage = () => {
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
    <div className="fixed top-0 w-full flex justify-center items-center bg-white py-2 z-[3]">
      <div className="flex flex-row justify-between items-center max-w-[1400px] w-full">
        <p className="font-[bagel] text-[40px] text-white titlestroke">$EGG</p>

        <div className="flex items-center justify-evenly gap-5 ">
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

        <button className="font-[bagel] text-lg px-3 py-3 border-[1px] border-[#000000] rounded-xl button-shadow">
          BUY $EGG
        </button>
      </div>
    </div>
  );
};

export default NavbarPage;
