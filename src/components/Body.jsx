import { HeroImg } from "../assets/images";
import Navbar from "./Navbar";
import CardPlaced from "./CardPlaced";

const Body = () => {
  return (
    <>
      <div className="bg-background bg-no-repeat bg-cover">
        <Navbar />
        <main className="grid grid-cols-2 gap-10 min-h-screen min-w-full px-40">
          <section className="flex flex-col gap-10 py-20">
            <div className="text-white font-bold text-5xl ">
              Providing Community <br />
              Access to Quality <br />
              Healthcare
            </div>
            <p className="text-white text-lg">
              The Quality of our service and the professionalism of our <br />
              staff are the reeason for trustlife center's success.
            </p>
            <button className="bg-white text-blue-400 text-lg font-bold w-40 px-5 py-3 rounded-full hover:bg-blue-500 hover:text-white">
              Book Now
            </button>
          </section>
          <img
            src={HeroImg}
            className="rounded-full absolute top-40 left-[55%] ring-[20px] ring-white h-[460px] w-[460px]"
          />
        </main>
        <CardPlaced />
      </div>
    </>
  );
};
export default Body;