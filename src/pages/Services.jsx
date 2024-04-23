// import React from 'react'

// function Services() {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Services;
import React, { useState } from 'react';

function Services() {
  // Step 1: Define State for Selected Service
  const [selectedService, setSelectedService] = useState('');

  // Step 2: Handle Service Change
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <div>
    <img className=" object-cover"
        alt="" src="hairservice.png" width={500} height={500} />
      <h1>Hair Services</h1>
     
      <select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
        <option value="">Select a service</option>
        
        <option value="Haircut">Men's Haircut - €35.00</option>
        <option value="Hair Coloring">Women's Haircut - €40.00</option>
        <option value="Hair Styling"> Kids Haircut - €30.00</option>
        <option value="Hair Styling"> Blow Out - €40.00</option>
        <option value="Hair Styling"> Updo/Event Styling - €70.00</option>
        <option value="Hair Styling"> Deep Conditioning Treatment - €50.00</option>
        <option value="Hair Styling"> Keratin Treatment - €80.00</option>
        <option value="Hair Styling">Scalp Treatment - €60.00 </option>
        <option value="Hair Styling"> Bridal Hair(Including trial) - €50.00 </option>
        
        
        
      </select>
      {/* Display selected service */}
      {selectedService && <p>You selected: {selectedService}</p>}
    </div>
  );
}

export default Services;

