// import React from 'react'

// import { DayPicker } from 'react-day-picker';
// //import { useState } from 'react';
// // import { formatormat } from 'date-fns';
//  const MakeAnAppointment = () => {

//   // const [selected, setSelected] = useState<date>(null);
//   // let footer = <p>Please pick a day.</p>;
//   // if (selected) {
//   //   footer = <p>You picked {format(selected, 'PP')}.</p>;
//   // }

//     return (
      
//       <div className=" overflow-hidden text-left text-base text-black font-alegreya"> 
//   <img 
//           className=" object-cover"
//           alt=""
//           width={600}
//           height={500}
//           src="/vecteezy_beauty-salon-interior_27819575.jpg"
//         />
//         <span className=" flex  -mt-40  justify-center item-left tracking-[0.02em] capitalize font-alex-brush  inline-block ">
//           Make An Appointment
//         </span><br></br>
//        <div> 
//        <div>
//           <div className=" tracking-[0.02em] capitalize ">
//           Home/Make an Appointment<br></br>
//           </div>
//         </div>
//         <div className=" tracking-[0.02em] capitalize  ">
//           First Name
//         </div>
//         <div className=" bg-gainsboro " />
//         <div className=" tracking-[0.02em] capitalize  ">
//           Last Name
//         </div>
//         <div className=" bg-gainsboro " />
//         <div className="tracking-[0.02em] capitalize  ">Phone/Mobile Number</div>
//         <div className=" bg-gainsboro" />
//         <div className=" tracking-[0.02em] capitalize  ">
//           E-mail ID
//         </div>
//         <div className=" bg-gainsboro " />
//         <div className="left-[calc(50%_+_338px)] text-white font-fira-sans">
//           <div className=" left-[calc(50%_-_47px)] ">
//             <div className=" left-[calc(50%_-_8.05px)] rounded-lg bg-gray " />
//             <div className=" bg-white " />
//           </div>
//           <div className=" flex items-center justify-center font-semibold mt-5">
            
//           </div>
//           <button className=" bg-black text-white p-4 rounded">NEXT</button>
//         </div>
//          <DayPicker/>
//          </div>
//       </div>
      
//     );
//   };
  
//   export default MakeAnAppointment;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { DayPicker } from 'react-day-picker'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeBanner from '../components/HomeBanner';



const MakeAnAppointment = () =>  {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [selectedService, setSelectedService] = useState('');
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };


  

  // Step 1: Setup State for Form Data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  // Step 2: Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  

  // Step 3: Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data, e.g., send it to a backend server
    console.log(formData);
  };

  return (
    <div>
     <HomeBanner/>
          
      <h1>Make An Appointment</h1>
      {/* <h1>Hair Services</h1> */}
     
          <span className=" justify-between px-3"> <select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
                   <option value="">Hair Services</option>
        
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
      {selectedService && <p>You selected: {selectedService}</p>}</span>
      <span className=" justify-between px-3"><select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
                   <option value="">Nail Services</option>
        
           <option value="Classic manicure">Classic Manicure - €50.00</option>
           <option value="Gel manicure">Gel manicure - €30.00</option>
           <option value="Classic Pedicure"> Classic Pedicure - €25.00</option>
           <option value="Spa Pedicure"> Spa Pedicure - €30.00</option>
           <option value="Basic Nail Art"> Basic Nail Art(per Nail) - €50.00</option>
           <option value="Intricate Nail Art"> Intricate Nail Art(Per nail) - €70.00</option>
           
        </select>
      {/* Display selected service */}
      {selectedService && <p>You selected: {selectedService}</p>}</span>
      <span className="  "><select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
                   <option value="">Skin Services</option>
        
           <option value="Exppress Facial">Express Facial - €50.00</option>
           <option value="Signature Facial">Signature Facial - €35.00</option>
           <option value="Hydrating Facial"> Hydrating Facial - €25.00</option>
           <option value="Eyebrow Wax"> Eyebrow Wax - €35.00</option>
           <option value="Lip Wax"> Lip Wax - €20.00</option>
           <option value="Full Face Wax"> Full Face Wax - €50.00</option>
           <option value="Brazilian Wax"> Brazilian Wax - €80.00</option>
           
        </select>
      {/* Display selected service */}
      {selectedService && <p>You selected: {selectedService}</p>}</span>
      <span ><select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 border rounded-md">
                   <option value="">Spa Services</option>
        
           <option value="Relaxation Package">Relaxation Package ( Includes Massage, Facial , Manicure ) - €150.00</option>
           <option value="Pamper Me Package ">Pamper Me Package ( Includes Pedicure , Scalp teatment, MakeUp) - €200.00</option>
           
           
        </select>
      {/* Display selected service */}
      {selectedService && <p>You selected: {selectedService}</p>}</span>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div>
          <label >First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div><br></br>
        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div><br></br>
        {/* Phone Number */}
        <div>
          <label>Phone/Mobile Number</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </div><br></br>
        {/* Email */}
        <div>
          <label>E-mail ID:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        </form><br></br>
       


      
      
            
     
        <div classname = "flex">

<DatePicker className = "w-2/5"
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  timeInputLabel="Date:"
  dateFormat="MM/dd/yyyy"
/>

<DatePicker className="w-2/5"
  selected={startTime}
  onChange={(date) => setStartTime(date)}
  showTimeSelect
  showTimeSelectOnly
  timeIntervals={30}
  timeCaption="Time"
  dateFormat="h:mm aa"
/>


</div>
        {/* Submit Button */}
      <button type="submit" className=" float-right justify-center bg-blue-500 text-white py-2 px-4 rounded-md" ><Link to="/Services" className=" text-white font-bold py-2 px-4 rounded">Book Now</Link></button>
    
     
    </div>
  );
}


export default MakeAnAppointment;

