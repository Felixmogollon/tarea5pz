import ClipLoader from "react-spinners/ClipLoader";
const Loader = ({ isLoading }) => {
  return (
    <div>
      <div className=" absolute bg-white w-[100%] h-[100vh] flex justify-center items-center z-50 top-0 ">
        <ClipLoader color={"##d63636"} loading={isLoading} size={90} />
      </div>
    </div>
  );
};
export default Loader;
