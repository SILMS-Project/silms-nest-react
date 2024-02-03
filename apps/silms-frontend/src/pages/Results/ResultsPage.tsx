import DashboardLayout from "@/components/DashboardLayout";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { Link } from "react-router-dom";

const ResultsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-[#1C274C] text-2xl font-semibold">Result</p>
          <Breadcrumb aria-label="Default breadcrumb example">
            <BreadcrumbItem href="/result">Result</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between w-full">
          <div className="flex gap-4">
            <div className="flex justify-between items-center bg-custom-secondary-3 p-4 rounded-[0.625rem] w-52">
              <div className="h-full justify-center flex flex-col">
                <p className="text-custom-primary-1 text-lg font-bold">4.48</p>
                <p className="text-[#969696] text-xs font-medium">
                  Second-Class Upper
                </p>
              </div>
              <img src="/assets/icons/gpa-icon.svg" />
            </div>
            <div className="flex justify-between items-center bg-custom-secondary-3 p-4 rounded-[0.625rem] w-52">
              <div className="h-full justify-center flex flex-col">
                <p className="text-custom-primary-1 text-lg font-bold">100</p>
                <p className="text-[#969696] text-xs font-medium">
                  Out of 120 credits
                </p>
              </div>
              <img src="/assets/icons/credits-icon.svg" />
            </div>
          </div>
          <button className="text-custom-primary-1 border border-custom-primary-1 rounded-[0.3125rem] text-sm font-semibold flex px-8 py-2 text-center h-fit self-end shadow-sm">
            Download Transcript
          </button>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right ">
            <thead className="text-sm w-full rounded-lg text-[#585859] bg-custom-secondary-3 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Session
                </th>
                <th scope="col" className="px-12 py-3 text-right">
                  GPA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 4 | Semester 1
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year4-Sem1
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      4.80
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 3 | Semester 2
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year3-Sem2
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      4.73
                    </div>
                  </div>
                </td>
              </tr><tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 3 | Semester 1
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year3-Sem1
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      4.79
                    </div>
                  </div>
                </td>
              </tr><tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 2 | Semester 2
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year2-Sem2
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      4.96
                    </div>
                  </div>
                </td>
              </tr><tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 2 | Semester 1
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year2-Sem1
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      5.00
                    </div>
                  </div>
                </td>
              </tr><tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 1 | Semester 2
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year1-Sem2
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      4.84
                    </div>
                  </div>
                </td>
              </tr><tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Link to={`/result/${1}`} className="">
                  <th
                    scope="row"
                    className="flex flex-col px-6 py-4 whitespace-nowrap"
                  >
                    <p className="text-custom-primary-1 font-bold text-base ">
                      Year 1 | Semester 1
                    </p>
                    <p className="text-custom-primary-2 font-normal text-sm">
                      Comp-Science-22/23-Year1-Sem1
                    </p>
                  </th>
                </Link>
                <td>
                  <div className="flex justify-end px-8">
                    <div className="bg-custom-primary-1 text-custom-secondary-3  px-6 py-1 font-bold text-lg rounded-[0.3125rem]">
                      5.00
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResultsPage;
