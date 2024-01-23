import EnrolledCoursesIcon from "@/assets/icons/EnrolledCoursesIcon";
import HiIcon from "@/assets/icons/HiIcon";
import LineIcon from "@/assets/icons/LineIcon";
import OutStandingFeesIcon from "@/assets/icons/OutStandingFeesIcon";
import ReportIcon from "@/assets/icons/ReportIcon";
import UnitsDoneIcon from "@/assets/icons/UnitsDoneIcon";
import CalenderImage from "@/assets/images/CalenderImage";
import DashboardLayout from "@/components/DashboardLayout";
import ScheduleItem from "@/components/ScheduleItem";

const SchedulePage = () => {
  // const menus = [
  //   {
  //     title: "4.05",
  //     description: "CGPA",
  //     icon: <ReportIcon />,
  //   },
  //   {
  //     title: "12",
  //     description: "Enrolled Courses",
  //     icon: <EnrolledCoursesIcon />,
  //   },
  //   {
  //     title: "64",
  //     description: "Units Done",
  //     icon: <UnitsDoneIcon />,
  //   },
  //   {
  //     title: "1",
  //     description: "Outstanding Fees",
  //     icon: <OutStandingFeesIcon />,
  //   },
  // ];

  return (
    <DashboardLayout>
      Schedule Page
      {/* <div className="flex flex-col">
        <div className="flex flex-row space-x-2">
          <h2 className="font-inter font-bold text-[20px]">Hi, Adeola</h2>
          <HiIcon />
        </div>
        <p className="text-[#969696]">Welcome back</p>
      </div>

      <div className="flex flex-row space-x-5 mt-6">
        <div className="flex flex-row gap-4">
          {menus.map(({ title, description, icon }) => (
            <ScheduleItem
              child={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div>
          <div className="flex flex-col">
            <div className="bg-[#EDEEF1] self-center rounded">
              <CalenderImage />
            </div>
            <div className="flex flex-col pt-4 bg-[#FFF] rounded border-2 border-[#EDEEF1]">
              <div className="self-center">
                <LineIcon />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </DashboardLayout>
  );
};

export default SchedulePage;
