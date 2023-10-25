const Newsletter = () => {
  return (
    <>
      <section className="flex flex-col gap-5 items-center bg-blue-500 w-[70%] p-14 rounded-xl absolute left-1/2 -translate-x-1/2 top-[224rem]">
        <h1 className="text-4xl text-white font-bold">
          Subscribe To Newsletter
        </h1>
        <p className="text-white text-xl text-center">
          Stay Up To Date With our Latest News Updates <br /> And Special Offer
        </p>
        <div className="flex flex-col items-center">
          <input type="email" placeholder="Enter Your Email Address" className="w-[30rem] h-16 rounded-full p-5 outline-blue-400 text-blue-400 text-lg"/>
          <button className=" bg-blue-600 rounded-full px-10 py-3 text-white text-lg relative top-[-3.6rem] left-36">Send Now</button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
