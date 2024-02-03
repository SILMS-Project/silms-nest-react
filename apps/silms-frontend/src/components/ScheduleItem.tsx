import { ReactNode } from "react";

interface LayoutProps {
  child: ReactNode;
  title: string;
  description: string;
}

const ScheduleItem = (input: LayoutProps) => {
  return (
    <>
      <div className="flex flex-row rounded-[10px] bg-[#E6F0ED] space-x-5 w-[196px] h-[72px]">
        <div className="pl-5 self-center">
          {input.child}
        </div>
        <div className="flex flex-col font-inter self-center space-y-[-5px]">
          <h2 className=" text-[18px] font-[700]">{input.title}</h2>
          <p className="text-[#969696] font-[600] text-[12px]">{input.description}</p>
        </div>
      </div>
    </>
  );
};

export default ScheduleItem;