import Link from "next/link";
import React from "react";

interface INavigation {
  label: string;
  route: string;
  icon?: JSX.Element;
}

const Navbar = () => {
  const navigation: INavigation[] = [
    {
      route: "/",
      label: "HOME",
    },
    {
      route: "/#about",
      label: "ABOUT $EGG",
    },
    {
      route: "/#tokenomics",
      label: "TOKENOMICS",
    },
    {
      route: "/#memefi",
      label: "MEMEFI",
    },
  ];

  return (
    <nav className="w-full flex bg-[#00000012]">
      <div className="nav-container max-w-[1200px]">
        <div className="title font-bagel">$EGG</div>
        <div className="buttons">
          <ul className="nav flex gap-4">
            {navigation.map((data, index) => (
              <Link key={index} href={data.route} className="font-bagel">
                {data.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="socials"></div>
      </div>
    </nav>
  );
};

export default Navbar;
