import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="bg-pink grid grid-cols-1 sm:grid-cols-12 mt-6 p-8">
      <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-3xl sm:text-4xl md:text-6xl md:leading-normal text-indigo-600">
          Tieboo'&apos;s Happy Place
        </h1>
      </div>
      <div className="col-span-5">
        <Image src="/wfh_5.svg" alt="hero image" width={600} height={600} />
      </div>
    </section>
  );
};

export default Hero;
