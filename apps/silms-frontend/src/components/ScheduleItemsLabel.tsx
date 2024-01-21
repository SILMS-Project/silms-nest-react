interface ScheduleItemsLabelProps {
  id: string;
  day: string;
  date: string;
  classes: string;
  time: string;
  isSelectedSchedule: string;
  setIsSelectedSchedule: any;
}

const ScheduleItemsLabel = ({
  id,
  day,
  date,
  classes,
  time,
  isSelectedSchedule,
  setIsSelectedSchedule,
}: ScheduleItemsLabelProps) => {
  const handleClick = () => {
    setIsSelectedSchedule(id);
  };

  return (
    <div
      className="flex flex-row pl-0 relative space-x-3 rounded-md px-5 cursor-pointer  h-[74.954px] w-full"
      onClick={handleClick}
    >
      <div
        className={`flex flex-row w-[98%] h-full items-center rounded-md ${
          isSelectedSchedule === id ? "bg-[#E6F0ED]" : "bg-white"
        } pb-2 `}
      >
        <div
          className={`flex flex-col pl-2 sm:pl-5 ${
            isSelectedSchedule === id ? "text-[#9747FF]" : "text-black"
          } items-center mr-2`}
        >
          <p className="sm:text-[0.9rem] text-[0.75rem]">{day}</p>
          <p className="font-extrabold sm:text-[1.7rem] text-[1.3rem]">{date}</p>
        </div>
        <div className="flex flex-col gap-1 border-l-2 border-[#D9D9D9] pl-3 pr-6">
          <p className="text-[#000] text-[0.9rem] sm:text-[1rem] font-bold pt-2 leading-none ">
            {classes} Classes
          </p>
          <p className="text-[#8D8D92] text-[0.59rem] font-semibold leading-none ">
            {time}
          </p>
        </div>
      </div>
      <div
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-[3.5rem] h-[3.5rem] rounded-md ${
          isSelectedSchedule === id ? "bg-[#E6F0ED]" : "bg-white"
        } border-r-8 border-t-8 ${
          isSelectedSchedule === id ? "border-[#E6F0ED]" : "border-white"
        } border-[#E6F0ED] border-solid rotate-45 z-[-1]`}
      ></div>
    </div>
  );
};

export default ScheduleItemsLabel;
