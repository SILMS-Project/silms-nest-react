import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "flowbite";

const Demo: React.FC = () => {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState("");
  const fetchBackend = async () => {
    try {
      const message = (await fetch("/backend")).text();
      setMessage(await message);
    } catch (error: unknown) {
      setMessage("");
    }
  };

  useEffect(() => {
    fetchBackend();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          <h3>Message from the backend:</h3>
          <h1>{message}</h1>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Demo;
