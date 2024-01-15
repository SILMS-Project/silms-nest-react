import DashboardLayout from "@/components/DashboardLayout";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="bg-neutral-600 h-14 w-full">
          {/* //TODO: Implement student dashboard user greeting designs*/}
        </div>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <div className="flex flex-col gap-8">
              <div className="h-[4.5rem] w-full gap-4 grid grid-cols-4">
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard cgpa display designs*/}
                </div>
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard enrolled courses display designs*/}
                </div>
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard units done display designs*/}
                </div>
                <div className="bg-indigo-800">
                  {/* //TODO: Implement student dashboard outstanding fees display designs*/}
                </div>
              </div>
              <div className="h-60 bg-red-700">
                {/* //TODO: Implement student schedules designs*/}
              </div>
              <div className="h-32 bg-amber-700">
                {/* //TODO: Implement student dashboard upcoming assessments designs*/}
              </div>

              <div className="h-60 bg-blue-600">
                {/* //TODO: Implement student dashboard recently accessed courses designs*/}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-[30rem]">
              <div className="h-[10rem]">
                {/* //TODO: Implement student dashboard illustration designs*/}
                <img
                  src="/assets/icons/SILMS_DashB_Illustration.svg"
                  alt="Dashboard Illustartion"
                  style={{
                    width: "281px",
                    height: "187.333px",
                    flexShrink: 0,
                    position: "absolute",
                    top: "162px",
                    right: "36px",
                  }}
                />
              </div>
              {/* //TODO: Implement student dashboard calendar designs*/}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
