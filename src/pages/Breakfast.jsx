import React from "react";
import { useState ,useEffect} from "react";
import Card2 from "../components/Card2";
import RecommendedData from "../Data/RecommendedData";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import RecommendedDishes from "./../components/RecommendedDIshes/RecommendedDishes";
import IndianStates from "../Data/countriesStates/IndianStates";
import MexicanStates from "../Data/countriesStates/MexicanStates";
import ThaiStates from "../Data/countriesStates/ThaiStates";
import ItalianStates from "../Data/countriesStates/ItalianStates";
import SpanishStates from "../Data/countriesStates/SpanishStates";
import CountriesData from "../Data/CountriesData";
import Card1 from "../components/Card1";
import Card3 from "../components/Card3";
import "../../styles/BreakfastStyle.css";
function Breakfast() {
  // const [filteredJobs, setFilteredJobs] = useState(TempJobsData);

  const [isJobActive, setIsJobActive] = useState(false);
  const [selected, setSelected] = useState({ JobType: "Cuisine" });
  const options = [["Indian", "Italian", "Spanish", "Mexican", "Thai"]];
  const[index,setIndex]=useState(0);
  // console.log(selected);
  // console.log(selected["JobType"])

  const [currentCountry,setCurrentCountry] = useState(IndianStates);
  const [currentCuisine,setCurrentCuisine] = useState(selected["JobType"]);
  function temp(){
    // setCurrentCuisine(selected["JobType"]);
    
  }
  useEffect(() => {
    // setCurrentCountry(`${currentCuisine}States`)
    switch (currentCuisine) {
      case 'Italian':
        console.log("italian here");
        setCurrentCountry(ItalianStates)
        setIndex(1);
        // setCountryCuisineData(ItalianCuisineData);
        break;
      case 'Spanish':
        setCurrentCountry(SpanishStates);
        setIndex(2);
          // setCountryCuisineData(SpanishCuisineData);
        break;
      case 'Mexican':
        setCurrentCountry(MexicanStates)
        setIndex(3)
        // setCountryCuisineData(MexicanCuisineData);
        break;
      
        
      case 'Thai':
        setIndex(4);
        setCurrentCountry(ThaiStates)
        // setCountryCuisineData(JapaneseCuisineData);
        break;
        
      default:
        // setCountryCuisineData(ChoicesData);
        setIndex(0);
        setCurrentCountry(IndianStates)
        break;
    }
  });
  
  return (
    <div>
      <div className="flex w-full flex-row justify-center items-center bg-black pb-5">
        <h1 className="text-center m-2 w-full bg-black text-2xl font-extrabold leading-none text-white mix-blend-exclusion md:text-[3.3rem]">
          Breakfast time <br />
          Where taste meets the sunrise. <br /> What are you in the mood for?
    
        </h1>
      </div>
      <div className="bg-zinc-800 flex flex-col gap-4 pl-6 py-16">
        <p className="border-l-4 border-red-600 py-2 pl-3 ml-6  text-white mb-3 text-3xl font-semibold">
          Choose Your Cuisine
        </p>
        <div className="flex  border-2 border-[#15f324] bg-black fill-black  flex-col lg:flex-row mb-24 w-36 md:mx-12 mx-1    px-2 z-[1000] gap-x-4 ">
          <div className="dropdown w-full  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div
              onClick={(e) => setIsJobActive(!isJobActive)}
              className="flex px-4 w-[1/5] transition-all duration-300 ease-in-out  text-white items-center justify-between -mr-6 "
            >
              <div className="dropdown-btn font-bolder">
                {selected["JobType"]}
              </div>
              <IoMdArrowDropdown color="green" size={30} />
            </div>

            {isJobActive && (
              <div className="dropdown-content w-full z-[100] text-white transition-all duration-300 ease-in-out ">
                {options[0].map((option) => (
                  <div
                    onClick={(e) => {
                      setSelected({ ...selected, JobType: option });
                      setIsJobActive(false);
                      setCurrentCuisine(option)
                      // console.log("next iteration from here");
                      console.log(option,"option here");;
                      // setCurrentCountry(`${option}States`);
                      console.log(`${option}States`)

                      // setIndex()
                      // console.log(currentCuisine,"hoja updat");
                      // temp();
                    }}
                    className="dropdown-item hover:bg-gray-300  ml-2 mb-1  hover:text-black pl-2"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex text-white justify-center text-[2rem] mb-4">
          Prominent {(currentCuisine=="Cuisine"?`Indian`:(`${currentCuisine}`))} {(currentCuisine=="Indian"?`States`:(`Provinces`))}
        </div>
        <div className="card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 lg:gap-16 items-center justify-center text-white">
          {currentCountry.map((item, index) => (
            <Card1 key={index} title={item.title} imageUrl={item.imageUrl} />
          ))}
        </div>
        <div className="flex flex-col flex-wrap">

        {CountriesData[`${index}`].states.map((state, index) => (
          
          
          
          <Card3
          key={index}
          title={state.state}
          stateImage={state.stateImage}
          famousDish={state.famousDish}
          dishImage={state.famousDish}
          />
          
          ))}
          </div>
      </div>
      <div></div>
    </div>
  );
}

export default Breakfast;
