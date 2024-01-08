
import IngredientCard from '../IngredientCard'
import IngredientsData from '../../Data/IngredientsData'
import KitchenItemsData from "../../Data/KitchenItemsData"
// import KitchenCard from '../KitchenCard'
import KitchenCard from '../../components/KitchenCard'

const IngredientsSection = () => {
  return (
    <div className=" text-white flex flex-col justify-center items-center  py-16">
      {/* SEASONAL DISHES */}

      <h1 className='text-3xl font-semibold pb-8 ml-[18rem]' style={{ alignSelf: 'flex-start' }}>While Cooking</h1>
      <h1 className='text-3xl font-semibold pb-8 ml-[18rem]' style={{ alignSelf: 'flex-start' }}>Ingredients</h1>
      <div className="card-container grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-16 items-center justify-center">
      {IngredientsData.map((item, index) => (
        <IngredientCard key={index} title={item.title} quantity={item.quantity} image={item.image}  />
      ))}
      </div>
      <h1 className='text-3xl mt-6 font-semibold pb-8 ml-[18rem]' style={{ alignSelf: 'flex-start' }}>Kitchen Equipments</h1>
      <div className="card-container grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-16 items-center -ml-[7rem]" >
      {KitchenItemsData.map((item, index) => (
        <KitchenCard key={index} title={item.title} quantity={item.quantity} image={item.image}  />
      ))}
      </div>


    </div>
  )
}

export default IngredientsSection