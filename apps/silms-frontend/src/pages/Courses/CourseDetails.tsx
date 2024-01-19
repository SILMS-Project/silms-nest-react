import DashboardLayout from "@/components/DashboardLayout";

const CourseDetails = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="relative h-[8.6875rem] rounded-[0.3125rem] overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center"
            style={{ backgroundImage: 'url("/assets/icons/bannerBg.svg")' }}
          ></div>
          <div className="absolute inset-0">
            <div
              className="h-full"
              style={{
                backgroundImage: `linear-gradient(to right,  rgba(230, 240, 237, 1) 0%, rgba(230, 240, 237, 1) calc(100% - 12rem), rgba(232, 234, 243, 0) 100%)`,
              }}
            >
              
              <div className="flex flex-col gap-2 px-6 py-4 h-full space-center">
                <div className="flex flex-row gap-4 items-center">
                  <p className="text-[#9E9E9E] text-center text-[0.75rem] font-medium ">
                    CSC 421
                  </p>
                  <div className="rounded-[0.8125rem] bg-[#40E0BA] px-3 py-1">
                    <p className="text-black text-center text-[0.625rem] leading-normal font-medium">
                      Elective
                    </p>
                  </div>
                </div>
                <p className="text-[#263238] text-[1.25rem] font-semibold leading-normal">
                  Introduction to Data Science and Engineering
                </p>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-8 h-8 "
                    src="/assets/icons/profile-image1.svg"
                  />
                  <p className="text-custom-primary-2 text-[0.75rem] font-medium leading-normal">
                  Mr. Charles Igah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9 gap-4">
          <div className="col-span-6 bg-gray-600">
            {/* //TODO:  Implement the course details modules designs*/}
          </div>
          <div className="col-span-3">
            <div className="flex flex-col gap-8">
              <div className="h-[25rem] bg-blue-800">
                {/* //TODO: Implement grades summary on course details designs*/}
              </div>
              <div className="bg-[#063760] rounded-[0.3125rem]">
                <div className="flex flex-col py-6 px-5">
                  <p className="text-white text-base font-semibold"> Enrolled Students</p>
                  <p className="text-white text-xs font-semibold"> 25 students </p>
                  <div className="flex flex-col w-full justify-between py-2 gap-3">
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Anderson Pepple</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">apepple@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Nweje Wendy</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">nwendy@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Ali-concern Abba</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">aabba@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex items-center gap-1 py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center align-middle">
                    <p className="text-white text-xs font-medium leading-normal">Olowokere Anjola</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">oanjola@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Egbuna Kenenna</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">ekenenn@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Oyewole Nifemi</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">onifemi@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Juba Anjolade</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">ajubs@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Pepple Anderson</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">apepple@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-between">
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Lewu Oyindamola</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">olewu@pau.edu.ng</p>
                  </div>
                  </div>
                  <div className="flex gap-1 items-center py-2">
                  <img src="/assets/icons/profile-image1.svg" />
                  <div className="flex flex-col place-items-start justify-center">
                    <p className="text-white text-xs font-medium leading-normal">Tswanya Grace</p>
                    <p className="text-[#969696] text-[0.625rem] font-medium leading-normal">tswanya@pau.edu.ng</p>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseDetails;
