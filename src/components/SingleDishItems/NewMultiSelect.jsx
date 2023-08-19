import  { useState } from 'react';
import axios from 'axios';

const NewMultiSelect = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (event) => {
    const selectedValuesArray = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedValues(selectedValuesArray);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send selected values to the backend
    try {
      const response = await axios.post('/backend-endpoint', {
        selectedValues: selectedValues,
      });

      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div>
      <h1>Multiple Select Example</h1>
      <div>
        <h1 className='text-white '>{
          selectedValues.map((item,index) =>{
            return (
              <div key={index}>
                   {item}
              </div>
            )
          })
        }</h1>
      </div>
      <form onSubmit={handleSubmit} className='text-white'>
        <label htmlFor="multiSelect">Select multiple values:</label>
        <select
          id="multiSelect"
          multiple
          value={selectedValues}
          onChange={handleSelectChange}
          className='text-black'
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4"> 4</option>
          <option value="5">Option 5</option>
          <option value="">Option 6</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewMultiSelect;
