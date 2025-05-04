import Analytics from "@/components/analytics";
import Card from "@/components/card";
import { AtmCard } from "@/components/card-carousel";
import Header from "@/components/header";
import { RadialChart } from "@/components/radial-chart";
import { Transactions } from "@/components/transactions";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[auto_378px] px-8 pt-6 gap-8">
        <div className="space-y-8 pb-8">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card amount="6,500.23" />
            <Card type="outcome" amount="3,299.89" />
          </div>
          <div>
            <Analytics />
          </div>

          <div>
            <Transactions />
          </div>
        </div>

        <div className=" space-y-6 sticky">
          <div className="rounded-2xl bg-[#1D1D41] p-6 space-y-4">
            <h2 className="text-2xl font-semibold">My Card</h2>

            <div>
              <h4 className="text-gray-400">Card Balance</h4>
              <h2 className="text-2xl font-semibold">$15,595.015</h2>
            </div>

            <AtmCard />

            <div className="flex justify-between gap-4">
              <Button className="flex-1 py-6">Manage Cards</Button>
              <Button
                variant={"outline"}
                className="flex-1 py-6 border-1 bg-transparent"
              >
                Transfer
              </Button>
            </div>
          </div>
          <div className="rounded-2xl">
            <RadialChart />
          </div>
        </div>
      </div>
    </div>
  );
}
