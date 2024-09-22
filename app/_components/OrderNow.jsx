import { Button } from "@headlessui/react";
import Image from "next/image";

const OrderNow = () => {
  return (
    <div className="bg-lightgray-50 px-5 py-20">
      <div className="lg:flex lg:items-center">
        <Image
          src="/coffee-mid.png"
          alt="order-now"
          width={500}
          height={500}
          className="w-1/2"
        />
        <div className="w-80 ml-6">
          <h1 className="text-3xl lg:text-5xl font-semibold">Order Your Favorite Coffee</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eum
            labore dolores culpa vero aspernatur vel voluptatem ex magnam porro.
          </p>
          <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all tracking-wide mt-7">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
