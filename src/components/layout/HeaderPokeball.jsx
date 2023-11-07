import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice";
import FooterPokeball from "./FooterPokeball";
import usePokedex from "../../hooks/usePokedex";
import  { IconUserCancel } from "@tabler/icons-react";



const HeaderPokeball = ({ children }) => {
  const { isError } = usePokedex();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <section>
        <header>
          <div className="h-16 bg-red-600 relative">
            <div className="absolute left-0 bottom-0 sm:w-[300px] w-[200px]">
              <img src="/img/banner.png" alt="" />
            </div>
          </div>
          <div className="h-12 bg-black relative">
            <div
              className=" h-16 bg-white aspect-square rounded-full absolute 
        right-0 -translate-x-1/2 -top-8 border-[8px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-black"
            >
              {!isError && (
                <button
                  onClick={handleLogout}
                  className="shadow-xl rounded-md bg-black/40 absolute -right-6  -bottom-20  sm:-bottom-[100px] p-2 text-white "
                >
                  <i className=" font-semibold  sm:text-[50px]" ></i>
                  <IconUserCancel/>
                  
                </button>
              )}
            </div>
          </div>
        </header>
        {children}
      </section>
      <FooterPokeball />
    </>
  );
};
export default HeaderPokeball;
