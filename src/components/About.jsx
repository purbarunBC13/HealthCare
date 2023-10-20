import React from "react";

const About = () => {
    return (
      <div className="flex gap-10 p-5">
        <div className="w-3/10 bg-gray-200 h-screen"></div>
        <div className="w-7/10 bg-gray-100 h-screen">
          <h1 className="text-slate-500">
            Short Story About Our
            <br />
            Medical Deserve
          </h1>
          <p className="text-slate-400">
            A Translator And Interpreter By Training, I Specialized In
            Communicating Medical Content Soon After Oraduating From University
            in Both Vienna, Austria. And Monterey, Californ
          </p>
          <p className="text-slate-400">
            The Text Clinic Allows Me To Combine My Life-Long Infatuation
            Vascinating Subject-Matter Fields
          </p>
          <div className="">
            <h1 className=""></h1>
            <p className=""></p>
          </div>
          <button className="bg-white text-blue-400 text-lg font-bold w-40 px-5 py-3 rounded-full hover:bg-blue-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    );
};

export default About;
