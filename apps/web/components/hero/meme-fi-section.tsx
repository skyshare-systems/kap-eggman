import React from "react";
import Image from "next/image";
import Link from "next/link";

const MemeFiPage = () => {
  const dataeggroll = [
    {
      id: 1,
      description: "Deposit ETH, receive your lottery ticket!",
    },
    {
      id: 2,
      description: "Winners to be announced every 48 hours!",
    },
    {
      id: 3,
      description: "Claim your prize within 40 hours if you win!",
    },
  ];

  const dataeggpot = [
    {
      id: 1,
      description: "Send your shitcoin dust into our EGGMAN POT",
    },
    {
      id: 2,
      description:
        "Hang tight while EGGMAN cooks up a mean dish to get you the best swap rates",
    },
  ];

  return (
    <div
      className="flex justify-center items-center py-[8rem] h-auto bg-white"
      id="memefi"
    >
      <div className="flex flex-col grow max-w-[1400px] px-2 2xl:px-0 gap-8">
        <h1 className="font-[bagel] text-xl sm:text-2xl md:text-5xl text-black text-center sm:title-stroke-egg uppercase">
          Memefi
        </h1>

        <div className="flex flex-col 2xl:flex-row w-full h-full items-center justify-center">
          <div className="flex flex-col justify-between items-center p-5 w-full h-auto md:h-[90vh] max-w-[720px] md:max-h-[700px] border-[1px] border-black gap-2">
            <div className="w-full flex flex-col justify-between items-center gap-5 ">
              <h1 className="font-[bagel] text-lg sm:text-xl md:text-3xl text-black text-center sm:title-stroke-egg uppercase">
                Egg Roll
              </h1>
              <h1 className="font-[bagel] text-lg sm:text-xl md:text-xl text-white text-center sm:title-stroke-egg uppercase px-11 py-5 bg-black w-full">
                STRICTLY FOR DEGENS ONLY <br></br>88 HOURS PER ROLL
              </h1>
              <div className="flex flex-col gap-2">
                {dataeggroll.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center gap-2"
                    >
                      <div className="flex justify-center items-center font-[bagel] bg-[#fef500] h-10 w-10">
                        {data.id}
                      </div>
                      <h1 className="font-[redhatdisplay] text-md font-bold">
                        {data.description}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <Link href="http://Eggroll.eggmancoin.com" target="_blank">
              <button className="bg-black px-5 py-3 font-[bagel] text-lg sm:text-xl md:text-xl text-white uppercase button-shadow">
                Launch Egg Roll
              </button>
            </Link>
          </div>
          {/* Egg Roll  */}
          <div className="flex flex-col justify-between items-center p-5 w-full h-auto md:h-[90vh] max-w-[720px] md:max-h-[700px] bg-[#fef500] gap-2">
            <div className="w-full flex flex-col justify-between items-center gap-5 ">
              <h1 className="font-[bagel] text-lg sm:text-xl md:text-3xl text-black text-center sm:title-stroke-egg uppercase">
                Egg Pot
              </h1>
              <h1 className="font-[bagel] text-lg sm:text-xl md:text-xl text-white text-center sm:title-stroke-egg uppercase px-11 py-5 bg-black w-full">
                TURN YOUR SHITCOIN DUST INTO GOLD!
              </h1>
              <div className="flex flex-col gap-2">
                {dataeggpot.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-center gap-2 px-5"
                    >
                      <div className="flex justify-center items-center font-[bagel] bg-white h-10 w-10">
                        {data.id}
                      </div>
                      <h1 className="font-[redhatdisplay] text-md max-w-[80%] font-bold">
                        {data.description}
                      </h1>
                    </div>
                  );
                })}
                <div className="flex flex-col p-5 border-[1px] border-black gap-5">
                  <h1 className=" font-[bagel] text-white title-stroke-text text-xl uppercase">
                    Standard Swap
                  </h1>
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src={"/assets/egg-icon.svg"}
                      alt={"egg"}
                      height={20}
                      width={20}
                    />
                    <p className="text-black font-[redhatdisplay] text-md font-bold">
                      Claim your ETH - up to 60% of the total value.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col p-5 border-[1px] border-black gap-2">
                  <h1 className=" font-[bagel] text-white title-stroke-text text-xl uppercase">
                    Hatch Golden Egg
                  </h1>
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src={"/assets/egg-icon.svg"}
                      alt={"egg"}
                      height={20}
                      width={20}
                    />
                    <p className="flex flex-col  font-[redhatdisplay] text-md font-bold">
                      <span className="text-black">
                        Claim your ETH - up to 70% of the total value + Entry to
                        lucky draw
                      </span>
                      <span className="text-black opacity-50">
                        Tickets allocated based on claim value - 0.001 ETH per
                        ticket
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src={"/assets/egg-icon.svg"}
                      alt={"egg"}
                      height={20}
                      width={20}
                    />
                    <p className="text-black font-[redhatdisplay] text-md font-bold">
                      Winners to be announced every Tuesday and Friday.
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src={"/assets/egg-icon.svg"}
                      alt={"egg"}
                      height={20}
                      width={20}
                    />
                    <p className="text-black font-[redhatdisplay] text-md font-bold">
                      Winners must burn $EGG token to claim rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled
              className="bg-black/40 px-5 py-3 font-[bagel] text-lg sm:text-xl md:text-xl text-white uppercase button-shadow"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeFiPage;
