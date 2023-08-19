import Multiselect from "multiselect-react-dropdown"
import { useState } from "react"



const MultiSelectCom = () => {

    // eslint-disable-next-line no-unused-vars
    const [ingradinets, setIngradients] = useState(["Panner 🧀","Tomatoes 🍅", "Salt 🧂","Onion 🧅"])
  return (
    <div className="w-72 h-96">
      <Multiselect
      isObject={false}
      onSelect={(event) => console.log(event)}
      onRemove={(event) => console.log(event)}
      showCheckbox
      options={ingradinets}
      placeholder="Select Ingradients"
  
      
    
      style={{
      
        chips: {
           background: '#1e293b',
          'padding':'.7rem',
          'border':'1px solid white',
          'borderRadius': '100px',
          'font-size':'1rem',
          'display':'block',
          'width':'fit-content'

        },
        multiselectContainer: {
          color: 'red',
        },

         searchBox:{
          border: 'none',
          'width':'20rem',
          'borderBottom':'1px solid white'
          // 'display':'block',
          // 'display':'flex',
        },
        
        optionsBox:{
          border: 'none',
          'width':'20rem',
          'color':'blue',
          
      },
     
        // optionContainer:{
        //   // 'width':'fit-content',
        //    'height':'15rem',
        //   'background':'#1C2332'
        // },
    
        // eslint-disable-next-line no-undef
     

      }}
      />
    </div>
  )
}

export default MultiSelectCom
