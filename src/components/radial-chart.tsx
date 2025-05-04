"use client";

import { ArrowRight, TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./ui/button";
const chartData = [{ month: "january", mobile: 20, desktop: 55 }];

const chartConfig = {
  desktop: {
    label: "Daily",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Hobby",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RadialChart() {
  return (
    <Card className="">
      <CardHeader className="items-center pb-0">
        <div className="flex items-enter justify-between">
          <h2>Activity</h2>
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Jan</SelectItem>
                <SelectItem value="banana">Feb</SelectItem>
                <SelectItem value="blueberry">Mar</SelectItem>
                <SelectItem value="grapes">Apr</SelectItem>
                <SelectItem value="pineapple">May</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex  items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full aspect-3/2 flex items-center"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-white  text-2xl font-bold"
                        >
                          75%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2 bg-[orange]"
            />
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2 bg-[orange]"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 w-full">
        <div className="flex items-cnter justify-between w-full font-semibold">
          <div>
            <div className="flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-primary mr-3" />
              Daily Payment
            </div>
            <p>55%</p>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-secondary mr-3" />
              Hobby
            </div>
            <p>20%</p>
          </div>
        </div>

        <Button variant={"outline"} className="w-full py-6 bg-transparent">
          View all activity <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
