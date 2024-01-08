/* eslint-disable react-hooks/rules-of-hooks */
import { BsFillStopwatchFill, BsFire } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import NewMultiSelect from '../components/SingleDishItems/NewMultiSelect'
import RecommendedDishes from "../components/RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from "../components/SingleDishItems/KitchenEquipments";
import { useState } from "react";
import NumberOfPeople from "../components/SingleDishItems/NumberOfPeople";
import { useNavigate } from "react-router-dom";


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

const options = [
  { label: "Cinnamon stick", value: 1 },
  { label: "Dry red chill ", value: 2 },
  { label: "Red Chill Powder ", value: 3 },
  { label: "Ginger garlic paste", value: 4 },
  { label: "Cilantro", value: 5 },
];

const Dish = () => {
  const navigate = useNavigate()
  
  const [isValue,setValue] = useState([options[0].value]);
  console.log(isValue)
 

  const navigateHandler = () =>{
    navigate('/cooking')
  }
  // const navigate = useNavigate();

  const handleNavigate = () => {
   navigate('/')
  }




  return (
    <>
      <div className="h-full w-screen bg-[#0B1018] text-white ">
        {/* single dish image and title,nutrition value  */}
        <div>
        <button
        onClick={handleNavigate}
        className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold ml-6 mt-6">Back</button>
      </div>
        <div className="flex items-center  justify-start ml-16 gap-10 border-10 ">
          <div className="mt-10">
            <img
              src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Dhaba-Style-Paneer-Masala-2-3.jpg"
              alt="dish image"
              className=" w-[35rem] h-[25rem] rounded-md"
            />
          </div>

          <div className="flex flex-col ">
            {/* dish title  and type veg or non veg */}
            <div className="text-6xl font-bold my-3">Paneer Butter Masala</div>
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
                  <p>60 min</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                <SiCodechef className="text-4xl mt-2"/>
                </div>
              
                <div className="font-semibold">
                  <p>Ingredients</p>
                  <p>20</p>
                </div>
              </div>

              <div className="flex gap-3">
                {/* <div> */}
                <div className="text-4xl mt-2" style={{color: 'red'}}>
                 <BsFire size={32} />
              </div>
               
        
                <div className="font-semibold">
                  <p>Calories</p>
                  <p>500 kcal</p>
                </div>
              </div>
            </div>




            {/* nutrition value  */}
            {/* <div>
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
            </div> */}
            <div className="xl:max-w-[45rem] 2xl:max-w-[50rem]">
              <div className="text-2xl font-bold my-3">About the Dish</div>
              <div>Paneer Butter Masala is a rich and creamy North Indian Dish, featuring succelent chunks of paneer(Indian Cottage Cheese) cooked in a luscious tomato-based gravy, enriched wiht butter and aromatic spices. its indulgent flavours and velvety texture make it a beloved vegetarian delicacy.  </div>
            </div>
          </div>

        </div>



    {/* Main Ingradients section  */}
    
        <div className=" ml-16 relative"> 
        <div className="text-2xl font-semibold items-center mt-5">
            Main Ingredients
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
            Customize Ingredients
          </div>

          <div className="">
       
            <NewMultiSelect className="ml-64"
            multiple
            options={options}
            isValue={isValue}
            onChange={(opt)=>setValue(opt)}
            />
          </div>
          <KitchenEquipments/>
          <NumberOfPeople/>
          <div className="flex justify-center items-center  my-5" >
          <button
          className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg"
          onClick={navigateHandler}>Start Cooking</button>
          </div>
         
        </div>
         

        <div></div>
        <div></div>
      
         
        <RecommendedDishes/>
       
      </div>
    </>
  );
};

export default Dish;
