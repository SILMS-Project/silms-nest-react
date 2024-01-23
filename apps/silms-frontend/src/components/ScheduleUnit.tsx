interface LayoutProps {
  icon: string;
  courseCode: string;
  lecturerName: string;
  startTime: string;
  endTime: string;
  bg: string;
  textColor: string;
}

const ScheduleUnit = (props: LayoutProps) => {
  return (
    <div className="flex flex-row space-x-4 w-full">
      <div>
        <p className="font-bold text-[0.75rem]">{props.startTime}</p>
      </div>
      <div
        className={`rounded-[0.625rem] flex flex-row ${props.textColor} ${props.bg} items-center w-full gap-4 px-3 py-4`}
      >
        <img
          src={`${props.icon}`}
          className="w-[2.375rem] h-[2.375rem]"
          alt="schedule unit icon"
        />

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col  w-full">
            <p className="font-bold leading-normal text-[0.875rem] ">
              {props.courseCode}
            </p>
            <p className="leading-normal text-[0.625rem] font-semibold truncate">
              {props.lecturerName}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="leading-normal whitespace-nowrap text-[0.625rem] font-bold">
              {props.startTime} - {props.endTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUnit;
