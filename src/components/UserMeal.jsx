
import LuxuryData from '../Data/LuxuryData'
import Card2 from './Card2'

const UserMeal = () => {
  return (
    <div className="bg-zinc-800 text-white flex flex-col justify-center items-center py-16">
         <h1 className='text-3xl font-semibold pb-8'>Create your own meal</h1>
            <div className="mx-12 text-2xl items-center justify-center">
            Hey there! 🌮 Hungry for some food for thought? How about we turn this into a feast of flavors? <br /> Share the joy of your favorite meal – whether it's a savory secret or a sweet delight. <br />Let's spice up our conversations with a dash of your culinary creativity! 🍲 <br /> Your taste buds are unique, and so is your story behind the plate. Don't keep it all to yourself;<br />  let's savor the essence of sharing and build a virtual potluck of diverse tastes. <br /> Ready to dish out your culinary masterpiece? Share the recipe for connection and let the feast begin!
            <br />  <br/> 🥂 #FoodieConnection #ShareYourMeal
            {/* {LuxuryData.map((item, index) => (
        <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
      ))} */}
    </div>
    </div>
  )
}

export default UserMeal