import { MdHealthAndSafety } from "react-icons/md";
import { IconContext } from "react-icons";
const Navbar = () => {
  return (
    <>
      <nav className="bg-[rgba(39,39,39,0.1)] flex justify-around items-center text-white p-5 sticky top-0 z-10 backdrop-blur-[16px] rounded-b-[20px] drop-shadow-lg">
        <ul className="flex justify-center items-center gap-2">
          <IconContext.Provider value={{ size: "40", color: "#eb5f72" }}>
            <li className="flex justify-center items-center">
              <MdHealthAndSafety />
            </li>
          </IconContext.Provider>
          <li className="text-2xl font-bold">Healthest</li>
        </ul>
        <ul className="flex justify-center items-center gap-11 text-xl">
          {["Home", "Doctor", "Service", "Review"].map((item, index) => {
            return (
              <a href={`#${item}`} key={index}>
                <li>{item}</li>
              </a>
            );
          })}
        </ul>
        <ul className="flex justify-center items-center">
          <li className="border-2 rounded-3xl font-semibold py-2 px-5 cursor-pointer">
            Let's Talk
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
