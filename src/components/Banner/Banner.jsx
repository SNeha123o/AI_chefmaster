import { useEffect, useState } from "react"
import videorul from "../../../styles/InShot_20240103_185705791.mp4"

const Banner = () => {
  const [dish,setDish] = useState()

  const changeHandler = (e) =>{
   setDish(e.target.value)
  }

  return (
  <>
  <div style={{width: "100%;", height: "400px;" ,overflow: "hidden;"}}>

  <video id="chaljabhai" src={videorul} autoPlay loop className="absolute inset-0 h-[60vh] w-full object-fill">
    
    </video>
  </div>
  <div className="w-screen h-[60vh] bg-black ">

    <div className="text-white  flex flex-col items-center justify-center h-full object-cover">
    
    
      <div className="relative text-4xl font-bold ">Welcome To AI Chef Kitchen</div>
      <div className="relative text-2xl font-semibold">Cook your favourite Dish,Cuisines & recipe with AI Chef</div>

      <div className="relative mt-5">
        <form action="">
          <div className="relative flex">
            <div>
             <select name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-none rounded-br-none rounded-tl-lg font-semibold rounded-bl-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 outline-none ">
              <option selected className="font-bold">Breakfast</option>
              <option value="breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Snacks">Snacks</option>
              <option value="Dinner">Dinner</option>
             </select>
            </div>
          <div className="absolute inset-y-0 left-24 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
       
         <input
           type="text"
           placeholder="Search recipes, dishes "
           className=" text-sm font-medium p-2 rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg px-10 text-start text-black focus:border-white focus:ring-white outline-none"
           onChange={changeHandler}
           value={dish}
           />
          </div>
       
       
         
        </form>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default Banner
