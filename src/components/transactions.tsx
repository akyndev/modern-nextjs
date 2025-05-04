import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

const invoices = [
  {
    name: "Adobe After Effect",
    paymentStatus: "Successful",
    totalAmount: "$250.00",
    paymentMethod: "Sat, 20 Apr 2026",
    logo: "ae.png",
  },
  {
    name: "Mc Donald",
    paymentStatus: "Unsuccessful",
    totalAmount: "$350.00",
    paymentMethod: "Sat, 20 Apr 2026",
    logo: "mcdonald.png",
  },
  {
    name: "Levi",
    paymentStatus: "Pending",
    totalAmount: "$450.00",
    paymentMethod: "Sat, 20 Apr 2026",
    logo: "levi.png",
  },
];

export function Transactions() {
  return (
    <div className="bg-card p-4 rounded-2xl space-y-4">
      <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
        <div className="font-semibold text-2xl">Transactions</div>
        <div className="flex items-center justify-center gap-4">
          <Input placeholder="Search Transaction" />
          <Select>
            <SelectTrigger className="w-[180px]">
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
      </div>

      <Table className="rounded-2xl p-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px] text-gray-400">Name</TableHead>
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Amount</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-none">
          {invoices.map((invoice) => (
            <TableRow key={invoice.name} className="">
              <TableCell className="font-medium  my-4 w-[300px]">
                <div className="flex items-center gap-3 ">
                  <div className="rounded-full h-9 w-9 flex items-center justify-center bg-amber-200">
                    <Image
                      src={`/${invoice.logo}`}
                      alt={invoice.name}
                      width={24}
                      height={20}
                    />
                  </div>
                  {invoice.name}
                </div>
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="">{invoice.totalAmount}</TableCell>
              <TableCell>
                <div
                  className={cn(
                    "rounded-full text-[#02B15A] bg-[#02B15A]/20 w-[120px] text-center h-max px-3 py-0.5",
                    {
                      "text-[#E41414] bg-[#E41414]/20":
                        invoice.paymentStatus === "Unsuccessful",
                    },
                    {
                      "text-amber-300 bg-amber-300/20":
                        invoice.paymentStatus === "Pending",
                    }
                  )}
                >
                  {invoice.paymentStatus}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
