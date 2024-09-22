import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-7 mt-30 bg-lightgray-50 ">
      <div className="lg:flex lg:justify-between px-6 mt-10">
        <div>
          <Image src="/logo.png" alt="logo" width={150} height={100} />
          <nav className="my-6">
            <ul className="font-medium text-lg flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 ">
              <li>
                <a href="#">Cafe Menu</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Find Us</a>
              </li>
              <li>
                <a href="#">Alowishus Catering</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-lg font-medium mt-10 mb-3">
            Subscribe to our Newsletter
          </p>
          <form className="flex mb-20">
            <input
              type="email"
              placeholder="Your Email Address"
              className="border rounded-md px-2 py-1"
            />
            <Button className="bg-blackdark-950 text-white px-4 py-2 rounded-md ml-2">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="">
        <hr />
        <p className="text-muted-foreground mt-4 text-xs text-center">
          &copy; Made by Rishikesh K V. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
