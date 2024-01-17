import ScheduleIcons from "@/assets/icons/ScheduleIcons";
import { ReactNode } from "react";

interface LayoutProps {
  icon: ReactNode;
  courseCode: string;
  lecturerName: string;
  startTime: string;
  endTime: string;
  bg: string;
  textColor: string;
}

const ScheduleUnit = (props: LayoutProps) => {
  return (
    <div className="">
      <div className="flex flex-row space-x-4">
        <div>
          <p className="font-bold text-[0.7rem]">{props.startTime}</p>
        </div>
        <div
          className={`rounded-md flex flex-row ${props.textColor} items-center ${props.bg} w-[229px] h-[68px] px-3`}
        >
          {/* {props.icon} */}
          <ScheduleIcons icon={props.icon} />
          <div className="flex flex-col ml-2 gap-0">
            <p className="font-bold leading-none text-[0.9rem] w-[63px] h-[19px]">
              {props.courseCode}
            </p>
            <p className="leading-none text-[0.5rem] font-bold truncate w-[70px]">
              {props.lecturerName}
            </p>
          </div>
          <div className="flex flex-col items-start ml-5 mb-5">
            <p className="leading-none text-[0.49rem] font-bold w-[63px]">
              {props.startTime} - {props.endTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUnit;
