import React from "react";
import { Chart } from "./chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Analytics = () => {
  return (
    <div className="bg-card p-3 rounded-2xl">
      <div className="flex lg:flex-row flex-col lg:items-center justify-between p-4 pb-2">
        <div className="text-2xl font-semibold">Analytics</div>
        <div className="flex items-center gap-12">
          <div className="flex items-center justify-center font-semibold">
            <span className="h-3 w-3 rounded-full bg-primary mr-3" />
            Income
          </div>
          <div className="flex items-center justify-center font-semibold">
            <span className="h-3 w-3 rounded-full bg-secondary mr-3" />
            Outcome
          </div>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">2024</SelectItem>
                <SelectItem value="banana">2023</SelectItem>
                <SelectItem value="blueberry">2022</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default Analytics;
