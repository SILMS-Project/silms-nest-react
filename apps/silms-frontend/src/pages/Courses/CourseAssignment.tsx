import DashboardLayout from "@/components/DashboardLayout";
import { Checkbox, FileInput, Label } from "flowbite-react";

const CourseAssignment = () => {
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
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <div className="flex flex-col gap-8">
              <div className="">
                <div className="w-full rounded-[0.3125rem] bg-[#063760] flex flex-row items-center gap-3 px-4 py-[0.63rem]">
                  <Checkbox />
                  <p className="text-base text-[#ffffff] font-semibold leading-normal">Regression Assessment</p>
                </div>
                <div className="px-4 py-9 flex flex-col gap-3" >
                  <div className="flex gap-2">
                    <img src="/assets/icons/description-icon.svg" alt="description icon" />
                    <p className="text-black text-base font-semibold leading-normal">Description</p>
                  </div>
                  <p className="px-8 text-black text-sm font-medium leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a doloremque aspernatur nesciunt. Cumque quibusdam nam modi quas a obcaecati facere placeat earum sit molestias, vero ex iusto minima est enim ut vitae voluptatem quae corrupti illo doloribus id. Rem.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-black text-[0.875rem] font-semibold">
                  File Submissions
                </p>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-[0.3125rem] bg-custom-secondary-3 hover:bg-custom-secondary-2"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <img src="/assets/icons/backup.svg" />
                      <p className="mb-3 text-black text-[0.875rem] font-semibold">
                        Browse or drag a file here to upload it.
                      </p>
                      <button className="rounded-[0.3125rem] bg-custom-accent-1 shadow-md px-4 py-2">
                        <p className="text-custom-primary-1 text-[0.875rem] font-semibold ">
                          {" "}
                          Browse
                        </p>
                      </button>
                    </div>
                    <FileInput id="dropzone-file" className="hidden" />
                  </Label>
                </div>
                {/* //TODO: Implement assignment file submission designs*/}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-8">
              <div
                className="h-[6.1875rem] rounded-[0.3125rem] relative"
                style={{
                  background:
                    "linear-gradient(103deg, #1C274C 31.19%, #063760 86.87%)",
                }}
              >
                <div className="flex justify-center gap-2 px-8 py-5">
                  <div className="flex text-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-[2rem] font-semibold">2 </p>
                      <p className="text-white font-semibold text-xs ">Days</p>
                    </div>
                    <div className="flex flex-col gap-1 ml-2">
                      <p className="text-white text-[2rem] font-semibold">:</p>
                      <p className="text-white font-semibold text-xs "></p>
                    </div>
                  </div>
                  <div className="flex text-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-[2rem] font-semibold">
                        22{" "}
                      </p>
                      <p className="text-white font-semibold text-xs ">Hours</p>
                    </div>
                    <div className="flex flex-col gap-1 ml-2">
                      <p className="text-white text-[2rem] font-semibold">:</p>
                      <p className="text-white font-semibold text-xs "></p>
                    </div>
                  </div>
                  <div className="flex text-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-[2rem] font-semibold">
                        30{" "}
                      </p>
                      <p className="text-white font-semibold text-xs ">
                        Minutes
                      </p>
                    </div>
                    <div className="flex flex-col gap-1  ml-2">
                      <p className="text-white text-[2rem] font-semibold">:</p>
                      <p className="text-white font-semibold text-xs "></p>
                    </div>
                  </div>
                  <div className="flex text-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-[2rem] font-semibold">
                        59{" "}
                      </p>
                      <p className="text-white font-semibold text-xs ">
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full flex justify-center">
                  <div className="rounded-t-2xl bg-white pt-2 px-4 w-fit">
                    <p className="text-[#1C274C] text-xs font-semibold">
                      Time Remaining
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#E6F0ED] rounded-[0.3125rem] w-full">
                <p className="text-[#063760] text-base font-semibold leading-normal text-center mt-6">
                  Submissions
                </p>
                <div className="flex flex-col justify-between py-7 gap-3">
                  <div className="flex justify-between items-center px-4 py-1 gap-1 w-full">
                    <div className="flex gap-2">
                      <img src="/assets/icons/clock-loader.svg"></img>
                      <p className="text-black font-semibold text-xs leading-normal">
                        Submission Status
                      </p>
                    </div>
                    <div className="rounded-[0.8125rem] bg-[#DB4545] px-2 py-1 w-[6.0625rem]">
                      <p className="text-[#fff] text-[0.625rem] font-medium leading-normal text-center">
                        Not submitted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-1 gap-1 w-full">
                    <div className="flex gap-2">
                      <img src="/assets/icons/clock-loader.svg"></img>
                      <p className="text-black font-semibold text-xs leading-normal">
                        Grading Status
                      </p>
                    </div>
                    <div className="rounded-[0.8125rem] bg-[#9E9E9E] px-2 py-1 w-[6.0625rem]">
                      <p className="text-[#fff] text-[0.625rem] font-medium leading-normal text-center">
                        Not graded
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-1 gap-1 w-full">
                    <div className="flex gap-2">
                      <img src="/assets/icons/clock-loader.svg"></img>
                      <p className="text-black font-semibold text-xs leading-normal">
                        Submission Status
                      </p>
                    </div>
                    <div className="rounded-[0.8125rem] bg-[#DB4545] px-2 py-1 w-[6.0625rem]">
                      <p className="text-[#fff] text-[0.625rem] font-medium leading-normal text-center">
                        Not submitted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-1 gap-1 w-full">
                    <div className="flex gap-2">
                      <img src="/assets/icons/clock-loader.svg"></img>
                      <p className="text-black font-semibold text-xs leading-normal">
                        Submission Status
                      </p>
                    </div>
                    <div className="rounded-[0.8125rem] bg-[#DB4545] px-2 py-1 w-[6.0625rem] ">
                      <p className="text-[#fff] text-[0.625rem] font-medium leading-normal text-center">
                        Not submitted
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 py-1 gap-1 w-full">
                    <div className="flex gap-2">
                      <img src="/assets/icons/clock-loader.svg"></img>
                      <p className="text-black font-semibold text-xs leading-normal">
                        Submission Status
                      </p>
                    </div>
                    <div className="rounded-[0.8125rem] bg-[#DB4545] px-2 py-1 w-[6.0625rem]">
                      <p className="text-[#fff] text-[0.625rem] font-medium leading-normal text-center">
                        Not submitted
                      </p>
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

export default CourseAssignment;
