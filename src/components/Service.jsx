import { Service1 } from "../assets/images";

const Service = () => {
  return (
    <>
      <main className="flex flex-col gap-10 px-32 mb-20">
        <h1 className="text-4xl font-bold text-blue-900 text-center">
          Best Surgery We Give the Patient
        </h1>
        <div className="grid grid-cols-2 gap-2 bg-slate-800 rounded-xl">
          {[
            {
              heading: "Stomach diseases the surgery of the abdomen",
              des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            },
            {
              heading: "Stomach diseases the surgery of the abdomen",
              des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            },
          ].map((item, index) => (
            <section className="flex gap-5 p-5" key={index}>
              <img
                src={Service1}
                alt=""
                className="rounded-lg w-[300px] h-[400px]"
              />
              <div className="flex flex-col gap-5">
                <h2 className="text-white text-3xl">{item.heading}</h2>
                <p className="text-base text-zinc-400 ">{item.des}</p>
                <div className="bg-blue-500 w-full h-20 rounded-md ring-2 ring-white text-2xl text-white font-bold flex justify-center items-center cursor-pointer hover:bg-slate-600">Book Now</div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default Service;
