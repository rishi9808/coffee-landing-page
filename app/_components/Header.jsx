"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Button } from "@headlessui/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-lightgray-100">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">
                Alowishus delicoius
            </span>
            <Image src="/logo.png" alt="logo" width={130} height={80} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12  ">
          <a href="#" className="text-lg font-medium leading-6 text-gray-900">
            Cafe Menu
          </a>
          <a href="#" className="text-lg font-medium leading-6 text-gray-900">
            About Us
          </a>
          <a href="#" className="text-lg font-medium leading-6 text-gray-900">
            Find Us
          </a>
          <a href="#" className="text-lg font-medium leading-6 text-gray-900">
            Alowishus Catering
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <ShoppingBagIcon
              width={25}
              className="hover:cursor-pointer bg-white rounded-full p-1 hover:scale-105 transition-all"
            />
          </a>

          <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all">
            Buy Gift Vouchers
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Alowishus delicoius</span>
              <Image src="/logo.png" alt="logo" width={100} height={80} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cafe Menu
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Find Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Alowishus Catering
                </a>

                <Button className="bg-blackdark-950 text-white px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-all">
                  Buy Gift Vouchers
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
