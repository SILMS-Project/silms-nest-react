import DashboardLayout from "@/components/DashboardLayout";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

const ResultsDetails = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-[#1C274C] text-2xl font-semibold">Result</p>
            <Breadcrumb aria-label="Default breadcrumb example">
              <BreadcrumbItem href="/result">Result</BreadcrumbItem>
              <BreadcrumbItem href={`/result/${1}`}>
                Year 4-Semester 1
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <button className="text-custom-primary-1 border border-custom-primary-1 rounded-[0.3125rem] text-sm font-semibold flex px-8 py-2 text-center h-fit self-end shadow-sm">
            Download Transcript
          </button>
        </div>

        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col">
            <p className="text-custom-primary-1 font-bold text-base ">
              Year 4 | Semester 1
            </p>
            <p className="text-custom-primary-2 font-normal text-xs">
              Comp-Science-19/20-Year1-Sem1
            </p>
          </div>
          <div className="bg-custom-accent-1 rounded-[0.4375rem] px-5 py-2 text-custom-primary-1 text-2xl font-bold">
            4.00<span className="ml-1 font-medium text-xs">GPA</span>
          </div>
        </div>

        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-center text-sm w-full rounded-lg text-[#585859] bg-custom-secondary-3 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-left px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Score
                </th>
                <th scope="col" className="px-6 py-3">
                  Total CA
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Score
                </th>
                <th scope="col" className="px-6 py-3">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3">
                  Grade Point
                </th>
              </tr>
            </thead>
            <tbody>
            <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover:bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Introduction to Computer Science
                </th>
                <td className=" px-6 py-5">45.00</td>
                <td className="px-6 py-5">25.00</td>
                <td className="px-6 py-5">70.00</td>
                <td className="px-6 py-5">A</td>
                <td className="px-6 py-5">5</td>
              </tr>
              <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover:bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Introduction to Problem Solving
                </th>
                <td className=" px-6 py-5">40.00</td>
                <td className="px-6 py-5">30.00</td>
                <td className="px-6 py-5">70.00</td>
                <td className="px-6 py-5">B</td>
                <td className="px-6 py-5">4</td>
              </tr>
              <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover:bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Organization of Programming Languages
                </th>
                <td className=" px-6 py-5">45.00</td>
                <td className="px-6 py-5">20.00</td>
                <td className="px-6 py-5">65.00</td>
                <td className="px-6 py-5">B</td>
                <td className="px-6 py-5">3.7</td>
              </tr>
              <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover:bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Software Engineering
                </th>
                <td className=" px-6 py-5">47.00</td>
                <td className="px-6 py-5">30.00</td>
                <td className="px-6 py-5">77.00</td>
                <td className="px-6 py-5">A</td>
                <td className="px-6 py-5">4.8</td>
              </tr>
              <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover:bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Database Management II
                </th>
                <td className=" px-6 py-5">42.00</td>
                <td className="px-6 py-5">35.00</td>
                <td className="px-6 py-5">77.00</td>
                <td className="px-6 py-5">A</td>
                <td className="px-6 py-5">4.5</td>
              </tr>
              <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover-bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Artificial Intelligence
                </th>
                <td className="px-6 py-5">48.00</td>
                <td className="px-6 py-5">28.00</td>
                <td className="px-6 py-5">76.00</td>
                <td className="px-6 py-5">A</td>
                <td className="px-6 py-5">4.7</td>
              </tr>
              <tr className="text-center bg-white text-custom-primary-1 text-xs font-bold    hover:bg-gray-100 ">
                <th scope="row" className="text-left px-6 py-5 whitespace-nowrap ">
                  Special Topics in Software Engineering
                </th>
                <td className="px-6 py-5">39.00</td>
                <td className="px-6 py-5">38.00</td>
                <td className="px-6 py-5">67.00</td>
                <td className="px-6 py-5">B</td>
                <td className="px-6 py-5">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResultsDetails;
