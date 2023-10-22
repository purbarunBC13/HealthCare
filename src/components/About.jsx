import React from "react";
import { hospitalData } from "../constants";
import { PatientDoc } from "../assets/images";
const About = () => {
  return (
    <div className="grid grid-cols-9 gap-10 px-40 my-20">
      <div className="col-span-4 ">
        <img
          src={PatientDoc}
          alt="patient and doctor"
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="col-span-5 p-10 flex flex-col gap-7">
        <h1 className="text-slate-600 text-5xl font-[680]">
          Short Story About Our
          <br />
          Medical Deserve
        </h1>
        <p className="text-slate-400 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-slate-400 text-xl">
          The Text Clinic Allows Me To Combine My Life-Long Infatuation
          Vascinating Subject-Matter Fields
        </p>
        <div className="flex flex-row justify-start items-center">
          {hospitalData.map((item, index) => (
            <div className="flex flex-col items-center gap-2 w-32">
              <h1 className="text-blue-400 text-2xl font-bold">{item.num}</h1>
              <p className="text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
        <button className="hover:bg-white hover:text-blue-400 text-lg font-bold w-40 px-5 py-5 rounded-full bg-blue-500 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
