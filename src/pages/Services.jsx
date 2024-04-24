// import React from 'react'

// function Services() {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Services;
import React, { useState } from 'react';
import HomeBanner from '../components/HomeBanner';

function Services() {
  // Step 1: Define State for Selected Service
  const [selectedService, setSelectedService] = useState('');

  // Step 2: Handle Service Change
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <div>
     <div className='relative  '>
             <HomeBanner/>   
                </div>
                <img className=" object-cover"
                 alt="" src="haircut.jpeg" width={190} height={190} />
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
      <div className='relative' >
                
                </div>
                <img className=" object-cover"
                 alt="" src="nailservice.png" width={190} height={190} />
                <h1>Nail Services</h1>
     
           <select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
                   <option value="">Select a service</option>
        
           <option value="Classic manicure">Classic Manicure - €50.00</option>
           <option value="Gel manicure">Gel manicure - €30.00</option>
           <option value="Classic Pedicure"> Classic Pedicure - €25.00</option>
           <option value="Spa Pedicure"> Spa Pedicure - €30.00</option>
           <option value="Basic Nail Art"> Basic Nail Art(per Nail) - €50.00</option>
           <option value="Intricate Nail Art"> Intricate Nail Art(Per nail) - €70.00</option>
           
        </select>
      {/* Display selected service */}
      {selectedService && <p>You selected: {selectedService}</p>}
    </div>
  );
}

export default Services;

