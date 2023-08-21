import IngredientsSection from "../components/IngredientsSection/IngredientsSection"
import KitchenEquipmentSection from "../components/KitchenEquipmentSection/KitchenEquipmentSection"

const Cooking = () => {
  return (
    <div className="h-screen w-screen bg-[#0B1018]">
      <IngredientsSection/>
      <KitchenEquipmentSection/>
    </div>
  )
}

export default Cooking
