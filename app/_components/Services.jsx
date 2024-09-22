import { Button } from "@headlessui/react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="px-5 py-20 mt-10 space-y-20">
      <div className="text-center w-full">
        <h1 className="text-4xl lg:text-5xl font-bold ">
          Explore Our Alowishus
        </h1>
        <p className="text-muted-foreground text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          consectetur!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-9 space-y-6 lg:space-y-0">
        {/* card design */}
        <div className="border shadow-md p-7 rounded-xl w-80 h-96">
          <h1 className="text-3xl font-semibold">Our Catering</h1>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icon1.png"
              alt="Our Catering"
              width={200}
              height={100}
            />
            <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all tracking-wide mt-7">
              Order Now!
            </Button>
          </div>
        </div>

        <div className="border shadow-md p-7 rounded-xl w-80 h-96">
          <h1 className="text-3xl font-semibold">The Food</h1>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icon2.png"
              alt="Our Catering"
              width={200}
              height={100}
            />
            <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all tracking-wide mt-7">
              Food Menu
            </Button>
          </div>
        </div>

        <div className="border shadow-md p-7 rounded-xl w-80 h-96 mt-2">
          <h1 className="text-3xl font-semibold">The Getato</h1>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icon1.png"
              alt="Our Catering"
              width={200}
              height={100}
            />
            <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all tracking-wide mt-7">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
