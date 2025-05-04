import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function AtmCard() {
  return (
    
    <Carousel className="w-full bg-gradient-to-b from-[#9C2CF3] to-[#3A6FF9] rounded-2xl text-white overflow-hidden">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card
              className="bg-transparent rounded-none"
            >
              <CardContent className="flex relative">
                <div className="relative w-full space-y-10">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium text-sm text-gray-400">
                        Current Balance
                      </h4>
                      <h2 className="font-medium text-3xl">$5,750.20</h2>
                    </div>

                    <div>
                      <svg
                        width="47"
                        height="28"
                        viewBox="0 0 47 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.3707 2.97418H29.9628V24.8367H17.3707V2.97418Z"
                          fill="#FF5F00"
                        />
                        <path
                          d="M18.17 13.9055C18.17 9.46353 20.3286 5.52356 23.6464 2.97416C21.2081 1.12013 18.1301 0 14.7722 0C6.81684 0 0.38092 6.21876 0.38092 13.9055C0.38092 21.5921 6.81684 27.811 14.772 27.811C18.1299 27.811 21.2079 26.6909 23.6464 24.8367C20.3286 22.326 18.17 18.3475 18.17 13.9055V13.9055Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M46.9519 13.9055C46.9519 21.5921 40.516 27.811 32.5608 27.811C29.2029 27.811 26.1249 26.6909 23.6864 24.8367C27.0443 22.2874 29.163 18.3475 29.163 13.9055C29.163 9.46353 27.0042 5.52356 23.6864 2.97416C26.1247 1.12013 29.2029 0 32.5608 0C40.516 0 46.9521 6.25747 46.9521 13.9055H46.9519Z"
                          fill="#F79E1B"
                        />
                      </svg>
                      <span className="text-[10px]">mastercard</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-medium text-sm">
                    <p>5238 2315 8123 8234</p>
                    <p>09/26</p>
                  </div>
                </div>

                <div className="absolute -z-10 -top-36 -right-16 rounded-full h-[226px] w-[226.21px] bg-[#3A6FF9]/90" />
                <div className="absolute -z-10 -bottom-36 -left-16 rounded-full h-[226px] w-[226.21px] bg-[#3A6FF9]/90" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
