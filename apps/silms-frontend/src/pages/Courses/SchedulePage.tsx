import DashboardLayout from "@/components/DashboardLayout";
import ScheduleItemsLabel from "@/components/ScheduleItemsLabel";
import ScheduleUnit from "@/components/ScheduleUnit";
import { scheduleUnits } from "@/utils/colorUtils";
import { useState } from "react";

const SchedulePage = () => {
  const [isSelectedSchedule, setIsSelectedSchedule] = useState<string>("1");

  const scheduleLabels = [
    {
      id: "1",
      day: "Mon",
      date: "10",
      classes: "4",
      time: "8:00 AM - 12:00 PM",
    },
    {
      id: "2",
      day: "Tue",
      date: "11",
      classes: "3",
      time: "1:00 PM - 4:00 PM",
    },
    {
      id: "3",
      day: "Wed",
      date: "12",
      classes: "5",
      time: "9:30 AM - 2:30 PM",
    },
    {
      id: "4",
      day: "Thu",
      date: "13",
      classes: "2",
      time: "10:00 AM - 12:00 PM",
    },
    {
      id: "5",
      day: "Fri",
      date: "14",
      classes: "6",
      time: "8:00 AM - 3:00 PM",
    },
  ];

  return (
    <DashboardLayout>
     <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 space-x-6 sm:space-x-8 w-full">
                <div className="col-span-2 flex flex-col gap-2">
                  {scheduleLabels.map((schedule) => (
                    <ScheduleItemsLabel
                      key={schedule.id}
                      id={schedule.id}
                      day={schedule.day}
                      date={schedule.date}
                      classes={schedule.classes}
                      time={schedule.time}
                      isSelectedSchedule={isSelectedSchedule}
                      setIsSelectedSchedule={setIsSelectedSchedule}
                    />
                  ))}
                </div>

                {/* {scheduleUnits.length > 3 && (
                      // Code to be rendered if the condition is true

                    )} */}

                <div className=" col-span-3 sm:col-span-5 md:col-span-6 grid md:grid-cols-2 gap-4  h-fit">
                  {scheduleUnits.map(
                    ({
                      scheduleId,
                      courseCode,
                      lecturerName,
                      startTime,
                      endTime,
                      color,
                    }) =>
                      scheduleId === isSelectedSchedule && (
                        <ScheduleUnit
                          icon={color.icon}
                          courseCode={courseCode}
                          lecturerName={lecturerName}
                          startTime={startTime}
                          endTime={endTime}
                          bg={color.bg}
                          textColor={color.textColor}
                        />
                      )
                  )}
                </div>
              </div>
    </DashboardLayout>
  );
};

export default SchedulePage;
