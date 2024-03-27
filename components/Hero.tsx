import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="bg-pink grid grid-cols-1 sm:grid-cols-12 mt-6 p-8">
      <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-2xl sm:text-4xl md:text-6xl md:leading-normal text-red">
          Happiness Promoting Blog
        </h1>
        <button className="text-red bg-white border-2 border-red mt-3 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba((0,0,0,1))] px:4 py:2 sm:px-6 sm:py-4">
          Browse Articles
        </button>
      </div>
      <div className="col-span-5">
        <Image src="/wfh_5.svg" alt="hero image" width={600} height={600} />
      </div>
    </section>
  );
};

export default Hero;
