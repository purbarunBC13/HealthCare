import { carditems } from "../constants";

import Cards from "./Cards";
const CardsPlaced = () => {
    return(
        <>
            <div className="flex gap-3 justify-evenly px-20 ">
                {
                    carditems.map((item,index) => {
                        console.log(item.icon);
                        return(
                            <Cards icon={<item.icon/>} title={item.title} description={item.description} key={index}/>
                        );
                    })
                }
            </div>
        </>
    );
};

export default CardsPlaced;