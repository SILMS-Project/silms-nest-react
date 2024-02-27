import DashboardLayout from "../../components/DashboardLayout";
import PageLoader from "../../components/PageLoader";
import ScheduleItemsLabel from "../../components/ScheduleItemsLabel";
import ScheduleUnit from "../../components/ScheduleUnit";
import ConditionalRoute from "../../routes/ConditionalRoute";
import { Role, UserStateProps } from "../../store/interfaces/user.interface";
import { useGetScheduleByProgramAndLevelQuery } from "../../store/slices/appSlice";
import { RootState } from "../../store/store";
import { getRandomColor } from "../../utils/colorUtils";
import { useState } from "react";
import { useSelector } from "react-redux";

const SchedulePage = () => {
  const [isSelectedSchedule, setIsSelectedSchedule] = useState<string>("1");

  const authSlice = useSelector<RootState, UserStateProps>(
    (state) => state.auth.user
  );

  const { data: scheduleData, isLoading: isLoadingScheduleData } =
    useGetScheduleByProgramAndLevelQuery({
      programId: authSlice?.student?.programme || "",
      level: authSlice?.student?.level || "",
    });

  // Create an array of days of the week
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Calculate corresponding dates for each day in the week
  const currentDate = new Date();
  const correspondingDates = daysOfWeek.map((_, index) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + index);
    return date.getDate();
  });

  // Create schedule labels based on the days of the week and the number of classes for each day
  const scheduleLabels = scheduleData
    ? daysOfWeek.map((day, index) => {
        const matchingSchedules = scheduleData?.data?.filter(
          (schedule: any) => schedule.dayOfWeek === day
        );
        const sortedSchedules = matchingSchedules.sort((a: any, b: any) =>
          a.startTime.localeCompare(b.startTime)
        );
        const smallestTime =
          sortedSchedules.length > 0 ? sortedSchedules[0].startTime : "";
        const highestTime =
          sortedSchedules.length > 0
            ? sortedSchedules[sortedSchedules.length - 1].endTime
            : "";

        return {
          id: `${index + 1}`,
          day: day,
          date: correspondingDates[index].toString(),
          classes: matchingSchedules.length.toString(),
          time: `${smallestTime.replace(/^0/, "")} - ${highestTime.replace(
            /^0/,
            ""
          )}`,
        };
      })
    : null;

  return (
    <ConditionalRoute redirectTo="/login" condition={authSlice ? true : false}>
      <ConditionalRoute
        redirectTo="/404"
        condition={authSlice?.auth?.role === Role.Student ? true : false}
      >
        <DashboardLayout>
          {isLoadingScheduleData ? (
            <PageLoader />
          ) : (
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 space-x-6 sm:space-x-8 w-full">
              <div className="col-span-2 flex flex-col gap-2">
                {scheduleLabels?.map((schedule) => (
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
                {scheduleData &&
                  scheduleLabels &&
                  scheduleData.data.map(
                    ({
                      id,
                      dayOfWeek,
                      course,
                      startTime,
                      endTime,
                    }: any) =>
                      dayOfWeek ===
                        scheduleLabels[parseInt(isSelectedSchedule) - 1]
                          ?.day && (
                        <ScheduleUnit
                          key={id}
                          courseCode={course.courseCode}
                          lecturerName={`${course.lecturerCourses[0].lecturer.user.firstName} ${course.lecturerCourses[0].lecturer.user.lastName}`}
                          startTime={startTime.replace(/^0/, "")} // Remove leading zero
                          endTime={endTime.replace(/^0/, "")} // Remove leading zero
                          color={getRandomColor()}
                        />
                      )
                  )}
              </div>
            </div>
          )}
        </DashboardLayout>
      </ConditionalRoute>
    </ConditionalRoute>
  );
};

export default SchedulePage;
