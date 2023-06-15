import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center py-[8rem] bg-[url('/assets/about-bg.webp')] bg-cover bg-no-repeat">
      <div className="flex flex-col grow max-w-[1400px] px-2 2xl:px-0 gap-11">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-5">
          <div className="flex flex-col gap-5">
            <h1
              className="font-[bagel] text-xl sm:text-2xl md:text-5xl"
              id="aboutegg"
            >
              ABOUT $EGG
            </h1>

            <p className="font-[redhatdisplay] md:text-xl">
              Meet Eggman. One could say he was always hard-boiled, but no one
              truly knew how sexy this man could get until he decided to break
              out of his shell and rock the world with the &#34;雪花飘飘&#34;
              song in a 北风啸啸 land.
              <br></br>
              <br></br>
              People couldn&#39;t believe their eyes. Was it the perfect round
              head, the mesmerizing gaze, or the mesmerizing tooth gap? No one
              could say for sure, but everyone agreed: Eggman was hot.
              <br></br>
              <br></br>
              Eggman wants to be more than sexy, he wanted to be useful too. As
              he looked at the crypto world, he saw a world filled with funny
              memes and little utility. He saw hodlers with cluttered wallets,
              and knew he could make a difference. He thought, &#34;I need to
              create something as irresistible as my look, but for the crypto
              community.&#34;...
            </p>
          </div>
          <Image
            src={"/assets/about-egg-video-placeholder.webp"}
            alt={"video"}
            height={650}
            width={650}
            className="border-2 border-[#000] image-shadow"
          />
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center gap-5">
          <div className="flex flex-col gap-5">
            <p className="font-[redhatdisplay] md:text-xl">
              And thus, EGG ROLL was born. It was the perfect game for degens
              who admired him - a fun, high-stakes lottery game where players
              could put in som e ETH and get some rewards. So pure, so degen, so
              fun. The degens loved it as much as they loved his defined egg
              head.
              <br></br>
              <br></br>
              But Eggman didn&#39;t stop there. He cracked open another golden
              idea: EGG POT. A one-click miracle that would transform shitcoin
              dust into pure gold. At last, the sexiest man became the first
              person on the planet to bring real utility to the meme coin world.
              He saw the gap in the meme world like his irresistible tooth gap,
              so he decided to fill it with real utility and some degen fun.
              <br></br>
              <br></br>
              Eggman promises to keep serving the community with his golden
              juice, just as he continues to bless the world with his charm.
              After all, he&#39;s not just the sexiest man alive, but also a man
              of the people, laying golden opportunities for all. Because when
              you&#39;re as sexy as Eggman, you don&#39;t just make hearts race;
              you make money moves.
            </p>
          </div>
          <Image
            src={"/assets/about-egg-money.webp"}
            alt={"video"}
            height={650}
            width={650}
            className="border-2 border-[#000] image-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
