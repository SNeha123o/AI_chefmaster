/* eslint-disable react/prop-types */

// import "../../styles/KitchenCardStyle.css"
const KitchenCard = ({title, image, quantity}) => {
    return (
        <div className="  rounded-3xl   border-2 border-zinc-400 flex flex-col  items-center px-2 py-1 justify-start w-[10rem] ">
            
            <img src={image} alt="" className="w-3/12 mt-2" />
            <h3 className='py-2 -mt-1 text-lg font-semibold '>{title}</h3>
          
        </div>
      )
}

export default KitchenCard