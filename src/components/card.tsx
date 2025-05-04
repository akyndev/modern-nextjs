import { cn } from "@/lib/utils";
import { ArrowDownLeft } from "lucide-react";
import React from "react";

const Card = ({ type, amount }: { type?: string; amount: string }) => {
  return (
    <div className="w-full bg-[#1D1D41] rounded-xl p-8 flex gap-8 items-center">
      <div
        className={cn(
          "h-[45px] w-[45px] rounded-lg bg-secondary flex items-center justify-center",
          { "bg-primary rotate-180": type }
        )}
      >
        <ArrowDownLeft />
      </div>

      <div>
        <h5 className="text-gray-400">Total {type ? "outcome" : "income"}</h5>
        <h2 className="font-semibold text-2xl">${amount}</h2>
      </div>

      <div
        className={cn(
          "rounded-full text-[#02B15A] bg-[#02B15A]/20 w-max h-max px-2 py-0.5",
          { "text-[#E41414] bg-[#E41414]/20": type }
        )}
      >
        +1.29%
      </div>
    </div>
  );
};

export default Card;
