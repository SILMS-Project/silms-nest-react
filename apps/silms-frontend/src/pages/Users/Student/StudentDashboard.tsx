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

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-black text-[0.875rem] font-bold">
                    Recently Accessed courses
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-full gap-4">
                  {[0, 1, 2].map((_, index) => (
                    // <Link to={"/"}>
                    <div
                      key={index}
                      className="bg-custom-secondary-3 rounded-[0.625rem] h-auto w-full"
                    >
                      <div className="flex flex-col h-full items-center">
                        <img
                          src="/assets/images/course-image1.png"
                          className="w-full h-[7.0625rem] rounded-t-[0.625rem]"
                        />

                        <div className="flex flex-col h-full p-4 justify-between leading-normal">
                          <div className="flex items-center">
                            <div className="w-full bg-custom-secondary-2 rounded-full h-1.5 dark:bg-gray-700">
                              <div
                                className={`bg-custom-primary-1 h-1.5 w-[60%] rounded-full`}
                              ></div>
                            </div>
                            <span className="ml-2 text-custom-primary-1 text-[0.625rem]">
                              {60}%
                            </span>
                          </div>
                          <p className="text-custom-primary-2 text-[0.625rem] font-bold">
                            CSC 419
                          </p>
                          <p className="text-custom-primary-1 font-bold text-sm">
                            Advances in Web, Mobile & Blockchain Technologies
                          </p>
                          <div className="flex gap-2 items-center">
                            <img
                              className="w-4 h-4"
                              src="assets/images/profile-image.png"
                            />
                            <p className="text-custom-primary-2 text-[0.625rem]">
                              Pius Onobhayedo, PhD.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 h-[40rem]">
            <div>
              <img
                src="/assets/icons/SILMS_DashB_Illustration.svg"
                alt="Dashboard Illustartion"
                className="w-full"
              />
            </div>
            <div>
              {" "}
              {/* //TODO: Implement student dashboard calendar designs*/}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
