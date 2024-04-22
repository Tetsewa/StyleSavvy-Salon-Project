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
import { DayPicker } from 'react-day-picker'


const MakeAnAppointment = () =>  {
  

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
     <img 
          className=" object-cover"
        alt=""
           width={1000}
          height={600}
           src="/vecteezy_beauty-salon-interior_27819575.jpg"
           //src="styleSavvywriting.png"
        />
        <img 
           alt=""
           width={150}
          height={150}
          src="styleSavvywriting.png" />
          
      <h1>Make An Appointment</h1>
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
        </div><br></br>
        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" ><Link to="/Services" className=" text-white font-bold py-2 px-4 rounded">NEXT</Link></button>
        
      </form><br></br>
      <DayPicker/>
     
    </div>
  );
}

export default MakeAnAppointment;

