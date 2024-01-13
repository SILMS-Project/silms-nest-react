import DashboardLayout from "@/components/DashboardLayout";

const CourseDetails = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
      <div className="relative h-[8.6875rem] rounded-[0.3125rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center"
          style={{ backgroundImage: 'url("/assets/icons/bannerBg.svg")' }}
        >
        </div>
        <div className="absolute inset-0">
          <div
            className="h-full"
            style={{
              backgroundImage: `linear-gradient(to right,  rgba(230, 240, 237, 1) 0%, rgba(230, 240, 237, 1) calc(100% - 12rem), rgba(232, 234, 243, 0) 100%)`,
            }}
          >
            
            {/* //TODO:  Implement the course details banner designs*/}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
  <div className="col-span-5 bg-gray-600">
            {/* //TODO:  Implement the course details modules designs*/}
    
  </div>
  <div className="col-span-2"> 
  <div className="flex flex-col gap-8">
      <div className="h-[25rem] bg-blue-800">
            {/* //TODO: Implement grades summary on course details designs*/}
      </div>
      <div className="h-24 bg-rose-600">
            {/* //TODO: Implement course details enrolled students designs */}

      </div>
      </div> 
  </div>
</div>

      </div>
    </DashboardLayout>
  );
};

export default CourseDetails;
