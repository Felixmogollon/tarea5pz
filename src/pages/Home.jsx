import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section className="flex justify-center items-center p-4 ">
        <article className="grid gap-4 p-2">
          <div>
            <img src="/img/banner.png" alt="" />
          </div>
          <div>
            <h2 className="text-center text-[#FE1936] font-fira-Code font-bold text-[30px] ">
              Hello trainer!
            </h2>
            <p className="text-center font-fira-Code text-[15px]">
              To start give your name
            </p>
          </div>

          <form
            className=" flex  justify-center  font-fira-Code text-[12px] sm:text-[25px] "
            onSubmit={handleSubmit}
          >
            <input
              className="shadow-md p-2 focus:outline-none  "
              autoComplete="off"
              id="nameTrainer"
              type="text"
              required
              placeholder="Your name..."
            />
            <button className="bg-red-500 p-2 px-6  text-white">Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
