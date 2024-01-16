import DashboardLayout from "@/components/DashboardLayout";
import { FileInput, Label } from "flowbite-react";

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
              {/* //TODO:  Implement the course assignment banner designs*/}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <div className="flex flex-col gap-8">
              <div className="h-80 bg-black">
                {/* //TODO: Implement assignment description designs*/}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-black text-[0.875rem] font-semibold">
                  File Submissions
                </p>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-[0.3125rem] bg-custom-secondary-3 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <img src="/assets/icons/backup.svg"/>
                      <p className="mb-3 text-black text-[0.875rem] font-semibold">
                      Browse or drag a file here to upload it.
                      </p>
                      <button className="rounded-[0.3125rem] bg-custom-accent-1 shadow-md px-4 py-2">
                        <p className="text-custom-primary-1 text-[0.875rem] font-semibold "> Browse</p>
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
              <div className="h-[7rem] bg-yellow-400">
                {/* //TODO: Implement submission deadline timer designs*/}
              </div>
              <div className="h-96 bg-lime-600">
                {/* //TODO: Implement submission status designs */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseAssignment;
