import { BsFillStopwatchFill, BsFire } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
// import NewMultiSelect from '../components/SingleDishItems/NewMultiSelect'
import MultiSelectCom from "../components/SingleDishItems/MultiSelect";
import RecommendedData from "../Data/RecommendedData";
import RecommendedDishes from "../components/RecommendedDIshes/RecommendedDishes";
import Footer from "../components/Footer";


const NutritionValue = [
  {
    title: "Calories",
    quantity: "350",
  },
  {
    title: "Protein",
    quantity: "20g",
  },
  {
    title: "Carbs",
    quantity: "60g",
  },
  {
    title: "Fats",
    quantity: "20g",
  },
  {
    title: "Fiber",
    quantity: "10g",
  },
];

const mainIngradients = [
  {
    title:"Panner 🧀",
  },
  {
    title:"Tomatoes 🍅"
  },
  {
    title:"Red Chill Powder 🌶️"
  },
  {
    title:"Salt 🧂"
  },
  {
    title:"Onion 🧅"
  }
]

const Dish = () => {
  return (
    <>
      <div className="h-full w-screen bg-[#0B1018] text-white">
        {/* single dish image and title,nutrition value  */}
        <div className="flex items-center justify-center gap-10 ">
          <div className="mt-10">
            <img
              src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Dhaba-Style-Paneer-Masala-2-3.jpg"
              alt="dish image"
              className="h-[30rem] w-[30rem] rounded-md"
            />
          </div>

          <div className="flex flex-col ">
            {/* dish title  and type veg or non veg */}
            <div className="text-6xl font-bold my-3">Panner Masala</div>
            <div className="bg-slate-700 rounded-full w-fit py-1 px-2 mb-8 f">
              Vegetarian
            </div>

            {/* dish description  */}
            <div className="flex justify-evenly mt-8 text-xl bg-slate-600 py-2 rounded-2xl">
              <div className="flex gap-3">
                <div>
                <BsFillStopwatchFill className="text-4xl mt-2" />
                </div>
             
                <div className="font-semibold">
                  <p>Time</p>
                  <p>60min</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                <SiCodechef className="text-4xl mt-2"/>
                </div>
              
                <div className="font-semibold">
                  <p>Ingradients</p>
                  <p>20</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                <BsFire className="text-4xl mt-2" />
                </div>
        
                <div className="font-semibold">
                  <p>Calories</p>
                  <p>500kcal</p>
                </div>
              </div>
            </div>




            {/* nutrition value  */}
            <div>
              <div className="text-2xl font-bold py-5">Nutrition Per Serving</div>
              <div className="" >
                <ul className="flex">
                  {NutritionValue.map((item, index) => {
                    return (
                      <li key={index} className="bg-slate-600  rounded-full h-24 w-16 flex flex-col items-center justify-center mx-5">
                        <div className="bg-stone-800  w-fit rounded-full h-fit p-2 ">{item.quantity}</div>
                        <div className="text-sm font-semibold">{item.title}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

        </div>



    {/* Main Ingradients section  */}
    
        <div className=" translate-x-[24%]">
        <div className="text-2xl font-semibold items-center mt-5">
            Main Ingradients
          </div>
          <ul className="flex gap-5 mt-5">
          {
            mainIngradients.map((item,index) => {
            return (
              <li key={index} className="bg-slate-800 w-fit p-2 rounded-3xl border"> 
                  <div>{item.title}</div>
              </li>
            )
            })
           } 
          </ul>


          <div className="text-2xl font-semibold mt-5">
            Customize Ingradients
          </div>

          <div className="text-black">
            <MultiSelectCom/>
            {/* <NewMultiSelect/> */}
          </div>
        </div>
         

        <div></div>
        <div></div>

        <RecommendedDishes/>
        <Footer/>
      </div>
    </>
  );
};

export default Dish;
