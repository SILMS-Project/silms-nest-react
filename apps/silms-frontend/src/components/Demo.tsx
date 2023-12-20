import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./NavBar";
import {
  useGetHelloV1Query,
  useGetHelloV2Query,
} from "@/store/slices/appSlice";

const Demo = () => {
  const [count, setCount] = useState(0);
  const {
    data: dataV1,
    error: errorV1,
    isLoading: isLoadingV1,
  } = useGetHelloV1Query();
  const {
    data: dataV2,
    error: errorV2,
    isLoading: isLoadingV2,
  } = useGetHelloV2Query();

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };


  

  return (
    <>
      <NavBar />
      
      <div className="flex flex-col gap-5 p-4 items-center">
        <div className="flex gap-10">
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a></div>
        <p className="text-3xl font-semibold">Vite + React</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Count is {count}
        </button>
        <p className="text-lg">
          Edit <code className="font-mono">src/App.tsx</code> and save to test HMR
        </p>
        <div className="flex flex-col items-center">
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Data from v1 Backend</h3>
            {isLoadingV1 ? (
              <p>Loading...</p>
            ) : errorV1 ? (
              <p>Error fetching data</p>
            ) : (
              <p>
                {dataV1?.message
                  ? `Message: ${dataV1?.message}`
                  : "No data available"}
              </p>
            )}
          </div>
          <div className="border p-4 rounded-md shadow-md mt-4">
            <h3 className="text-xl font-semibold mb-2">Data from v2 Backend</h3>
            {isLoadingV2 ? (
              <p>Loading...</p>
            ) : errorV2 ? (
              <p>Error fetching data</p>
            ) : (
              <p>
                {dataV2?.message
                  ? `Message: ${dataV2?.message}`
                  : "No data available"}
              </p>
            )}
          </div>
        </div>
        <p className="text-sm mt-4">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
};

export default Demo;
