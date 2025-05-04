import React from "react";
import { Input } from "./ui/input";
import { MobileNav } from "./mobile-nav";
import Logo from "./logo";

const Header = () => {
  return (
    <>
      <div className="flex lg:hidden items-center justify-between px-6 py-4">
        <Logo />
        <MobileNav />
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-between px-8 py-6 ">
        <div className="flex-1">
          <div className="w-full items-center justify-between">
            <h2 className="font-semibold text-2xl">Welcome Back, Serah 👋</h2>
            <p className="text-gray-400">
              Here is what's happening with your store today
            </p>
          </div>
        </div>

        <div className="lg:w-4/12">
          <Input placeholder="Search Anything" className="py-6 px-5 " />
        </div>
      </div>
    </>
  );
};

export default Header;
