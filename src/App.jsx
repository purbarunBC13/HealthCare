import Body from "./components/Body";
import About from "./components/About";
import Navbar from "./components/Navbar";
import CardPlaced from "./components/CardPlaced";

const App = () => {
  return (
    <>
      <div className="bg-background bg-no-repeat bg-contain">
        <Navbar />
        <Body />
        <CardPlaced />
        <About />
      </div>
    </>
  );
};
export default App;
