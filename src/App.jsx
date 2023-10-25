import Body from "./components/Body";
import About from "./components/About";
import Navbar from "./components/Navbar";
import CardPlaced from "./components/CardPlaced";
import Service from "./components/Service";
import Doctors from "./components/Doctors";
import Review from "./components/Review";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-background bg-no-repeat bg-contain">
        <Navbar />
        <Body />
        <CardPlaced />
        <About />
        <Service/>
        <Doctors/>
        <Review/>
        <Footer/>
      </div>
    </>
  );
};
export default App;
