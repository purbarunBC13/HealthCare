import Newsletter from "./Newsletter";
const Footer = () => {
  return (
    <>
      <div className="bg-slate-700 px-16 pt-40 flex flex-col gap-5">
        {/* Upper Scetion Starts Here */}
        <Newsletter/>
        <div className="grid grid-cols-4 gap-10 border-b-2 border-b-slate-600 pb-10 text-stone-400">
          <div className="flex flex-col gap-7">
            <h1 className="text-white text-2xl font-semibold">Healthest</h1>
            <p>
              The implication is that the anger of people who are normally
              slower to Anger is when it eventually camers Terrible
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="text-white text-2xl font-semibold">Department</li>
            <li>Eye Care</li>
            <li>Skin Care</li>
            <li>Pathology</li>
            <li>Medicine</li>
          </ul>
          <ul className="flex flex-col gap-3 ">
            <h1 className="text-white text-2xl font-semibold">Useful Links</h1>
            <li>About</li>
            <li>Blog</li>
            <li>Content</li>
            <li>Appointment</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="text-white text-2xl font-semibold">Services</li>
            <li>Emergency Services</li>
            <li>Qualified Doctors</li>
            <li className="flex gap-3">
              {[1, 2, 3, 4].map((item, index) => (
                <div className="bg-stone-400 w-10 h-10 rounded-full"></div>
              ))}
            </li>
          </ul>
        </div>
        {/* Upper ssection ends here */}
        {/* Lower Section starts here */}
        <div className="text-center p-5 text-xl text-stone-400">
          <p>2023 BHARAT , All Right Reserved</p>
        </div>
        {/* Lower Section Ends here */}
      </div>
    </>
  );
};

export default Footer;
