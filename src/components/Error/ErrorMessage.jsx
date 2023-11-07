import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-fira-Code p-2">
      <Link to={"/"}>
        <svg
          className="cursor-pointer w-12 h-12 text-red-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Link>

      <p className="text-lg sm:text-2xl text-center text-gray-600 mb-4">
        Oops! Something went wrong on the server.
      </p>
      <p className="text-sm text-center text-gray-400">
        Please try again later.
      </p>
    </div>
  );
};
export default ErrorMessage;
