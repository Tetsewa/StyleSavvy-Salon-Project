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
      {/* Step 3: Render the Dropdown List */}
      <select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
        <option value="">Select a service</option>
        
        <option value="Haircut">Haircut</option>
        <option value="Hair Coloring">Hair Coloring</option>
        <option value="Hair Styling">Hair Styling</option>
        {/* Add more options for other services */}
      </select>
      {/* Display selected service */}
      {selectedService && <p>You selected: {selectedService}</p>}
    </div>
  );
}

export default Services;

