interface LayoutProps {
  courseCode: string;
  lecturerName: string;
  startTime: string;
  endTime: string;
  color: any
}

const ScheduleUnit = (props: LayoutProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
      <div>
        <p className="font-bold text-[0.75rem]">{props.startTime}</p>
      </div>
      <div
        className={`rounded-[0.625rem] flex flex-row ${props.color.textColor} ${props.color.bg} items-center w-full gap-2 sm:gap-4 px-2 sm:px-3 py-4`}
      >
        <img
          src={`${props.color.icon}`}
          className="sm:w-[2.375rem] sm:h-[2.375rem] w-[1.75rem] h-[1.75rem]"
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
          <div className="flex flex-col text-right w-full">
            <p className="leading-normal w-full text-[0.625rem] font-bold">
              {props.startTime} - {props.endTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUnit;
