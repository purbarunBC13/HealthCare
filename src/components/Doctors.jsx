import { Doc1 } from "../assets/images";

const Doctors = () => {
    return (
      <>
        <main className=" flex flex-col gap-10 px-40 py-10">
          <h1 className="text-4xl font-bold text-blue-900 text-center">
            Best Surgery We Give the Patient
          </h1>
          <div className="grid grid-cols-4 gap-7">
            {
                [1,2,3,4].map((item,index)=>(
                    <div className="border-2 shadow-md hover:bg-blue-500 rounded-lg p-5 flex flex-col gap-3 text_white" key={index}>
                    <img src={Doc1} className="h-56 rounded-md" />
                    <h3 className="text-slate-600 font-bold text-xl ">
                      Dr. Mary Doe
                    </h3>
                    <p className="text-slate-400 font-semibold text-lg">
                      Neurology Specialist
                    </p>
                  </div>
                ))
            }
          </div>
        </main>
      </>
    );
};

export default Doctors;