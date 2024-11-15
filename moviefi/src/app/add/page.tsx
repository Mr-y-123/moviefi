"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";

export default function AddMovie() {
  const [title, setTitle] = useState<string>("");
  const [Pyear, setPyear] = useState<string>("");
  return (
    <div className="min-h-screen  flex flex-col items-start justify-center p-[24px] sm:p-[120px] gap-[120px]">
      <div className="w-full text-white text-[48px] font-[600] leading-[56px] ">
        Create a new movie
      </div>
      <div className="flex items-start justify-between gap-[127px]">
        <div className="w-[473px] h-[504px] border border-red-50 flex items-center justify-center"></div>
        <div className="flex flex-col items-start justify-center gap-[64px] ">
          <div className="flex flex-col items-start justify-center gap-[25px] ">
            <InputField
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              width="w-[362px]"
              height="h-[45px]"
              bgColor="bg-inputColor" // Custom background color
              className="focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <InputField
              id="title"
              type="text"
              value={Pyear}
              onChange={(e) => setPyear(e.target.value)}
              placeholder="Publishing year"
              width="w-[216px]"
              height="h-[45px]"
              bgColor="bg-inputColor" // Custom background color
              className="focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center justify-center gap-[16px]">
            <Button
              width="w-[167px]"
              height="h-[56px]"
              type="button"
              className="border"
            >
              Cancle
            </Button>
            <Button
              width="w-[167px]"
              height="h-[56px]"
              type="button"
              bgColor="bg-primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
