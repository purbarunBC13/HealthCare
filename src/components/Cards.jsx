import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

const Cards = (props) => {
  return (
    <>
      <div className="w-1/5 h-80 p-5 m-4 shadow-lg flex flex-col border-2 rounded-md items-center justify-between backdrop-blur-[10px] hover:bg-[rgba(201,158,229,0.21)]">
        <div className="flex justify-center items-center py-5 drop-shadow-[-5px_10px_15px_#0ea5e9]">
          <IconContext.Provider value={{ color: "#38bdf8", size: "50" }}>
            {props.icon}
          </IconContext.Provider>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl text-slate-700 font-bold">{props.title}</h1>
          <p className="text-slate-400 text-center">{props.description}</p>
          <div className="flex gap-2 justify-center items-center">
            <a href="" className="text-sky-400 font-bold">
              Get Started
            </a>
            <IconContext.Provider value={{ color: "#38bdf8", size: "30" }}>
              <BsArrowRight />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
