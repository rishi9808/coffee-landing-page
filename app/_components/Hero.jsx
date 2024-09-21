import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-lightgray-100 p-7 line-clamp-3">
      <div className="lg:grid grid-cols-2 space-y-4 lg:space-y-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold flex leading-[50px]">
            Alowishus <br /> Delicious <br />
            Coffee
            <Image
              src="/cafe.png"
              alt="cafe"
              width={50}
              height={50}
              className="relative size-16 lg:size-20 top-[90px] lg:top-[150px] right-[70px] lg:right-[100px]"
            />
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, odit?
          </p>

          <div className="flex gap-x-4 items-center py-6">
            <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all tracking-wide">
              Download App
            </Button>
            <Link href="/shop" className=" underline">
              Shop Coffee
            </Link>
          </div>
        </div>

        <div>
          <Image
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
