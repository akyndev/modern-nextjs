import React from "react";
import { Separator } from "./ui/separator";
import {
  BadgeHelp,
  ChartNoAxesCombined,
  ChevronDown,
  LayoutDashboard,
  Settings,
  Shield,
  UserRound,
  WalletMinimal,
} from "lucide-react";
import Image from "next/image";
import Logo from "./logo";

const Sidebar = () => {
  return (
    <aside className="w-full flex flex-col  p-6 sticky top-0 h-screen bg-[#1D1D41] rounded-r-2xl">
      <Logo />

      <div className="flex-1 mt-14">
        <nav>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 px-8 rounded-xl bg-primary hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <LayoutDashboard fill="white" />
              Dashboard
            </li>
            <li className="flex items-center gap-4 px-8 rounded-xl hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <ChartNoAxesCombined />
              Analytics
            </li>
            <li className="flex items-center gap-4 px-8 rounded-xl hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <WalletMinimal />
              My wallets
            </li>
            <li className="flex items-center gap-4 px-8 rounded-xl hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <UserRound />
              Accounts
            </li>
            <li className="flex items-center gap-4 px-8 rounded-xl hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <Settings />
              Settings
            </li>

            <li>
              <Separator className="w-full bg-[#4B4B99]" />
            </li>
            <li className="flex items-center gap-4 px-8 rounded-xl hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <Shield />
              Security
            </li>
            <li className="flex items-center gap-4 px-8 rounded-xl hover:bg-primary/80 transition-colors duration-300 cursor-pointer py-4">
              <BadgeHelp />
              Help Centre
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-white overflow-hidden">
          <Image
            src={"/avatar.png"}
            alt="avatar "
            width={24}
            height={24}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-xl">Serah Ruth</h4>
          <p className="text-gray-400">Web developer</p>
        </div>

        <div className="">
          <ChevronDown />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
