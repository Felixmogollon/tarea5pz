import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="w-[100%] h-[100vh] flex justify-center items-center flex-col ">
      <p className="absolute top-[5px] text-[112px] text-[#030E0063]">404</p>
      <div className="h-[280px] aspect-square">
        <img
          className="h-full w-full object-contain"
          src="/img/not-found.gif"
          alt=""
        />
      </div>
      <h2 className="absolute bottom-[100px] text-[30px] ">
        Look like you're lost
      </h2>
      <h5 className="absolute bottom-[80px] text-[#9C9C9C]">
        the page you are looking for not available
      </h5>
      <Link
        className="absolute bottom-[16px] bg-black/25 p-2 text-white text-[23px] rounded-[13px] "
        to={"/"}
      >
        Go to Home
      </Link>
    </section>
  );
};
export default Page404;
