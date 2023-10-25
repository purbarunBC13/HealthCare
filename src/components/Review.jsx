import { IconContext } from "react-icons";
import {BiSolidQuoteRight} from "react-icons/bi";
import { reviewData } from "../constants";
const Review = () => {
  return (
    <>
      <main className="flex flex-col items-center gap-10 mt-10 mb-72 px-20">
        <h1 className="text-blue-900 text-4xl font-bold">
          What Our Client Say
        </h1>
        <section className="grid grid-cols-2 gap-5 h-80">
         {
                reviewData.map((item,index)=>(
                    <div className="flex flex-col gap-10 p-10 shadow-lg ring-4 ring-slate-200 rounded-xl hover:ring-blue-300" key={index}>
                    <p className="text-xl font-medium text-slate-500 italic">
                    {item.rev}
                    </p>
                    <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                        <img
                        src={item.propic}
                        alt=""
                        className="bg-orange-400 h-16 w-16 rounded-full"
                        ></img>
                        <h1 className="text-xl font-bold text-blue-900">
                        {item.userName} <br />
                        <span className="text-base text-slate-600 font-medium">
                            {item.des}
                        </span>
                        </h1>
                    </div>
                    <IconContext.Provider value={{color: "skyblue",size: "50"}}>
                        <BiSolidQuoteRight/>
                    </IconContext.Provider>
                    </div>
                </div>
                ))
         }
        </section>
      </main>
    </>
  );
};
export default Review;
