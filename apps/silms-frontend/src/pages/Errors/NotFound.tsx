import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate("/dashboard", {
      replace: true,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen p-4 justify-center items-center">
      <div className="w-full md:w-1/2 mx-auto p-16 md:p-64 mt-10 flex flex-col gap-8 justify-center items-center">
        <p className="mt-8 text-4xl text-secondary font-bold text-center lg:text-6xl">
          This page does not exist
        </p>

        <img
          className="w-1/2 h-1/2"
          src="/assets/images/error404.svg"
          alt="error404"
        />

        <div className="w-full flex justify-between gap-5 mt-4">
          <button
            className="w-1/2 px-4 py-2 rounded-lg bg-brand-primary text-white text-base font-medium hover:bg-transparent hover:text-brand-primary border-2 border-brand-primary focus:outline-none"
            onClick={handleGoBack}
          >
            Go back
          </button>
          <button
            className="w-1/2 px-4 py-2 rounded-lg bg-white text-brand-primary text-base font-medium hover:bg-brand-primary hover:text-white border-2 border-brand-primary focus:outline-none"
            onClick={onClickGoHome}
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
