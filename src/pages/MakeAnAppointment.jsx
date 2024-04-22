import React from 'react'
//import Calendar from 'react-calendar';
import { DayPicker } from 'react-day-picker';
//import { useState } from 'react';
// import { formatormat } from 'date-fns';
 const MakeAnAppointment = () => {

  // const [selected, setSelected] = useState<date>(null);
  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }

    return (
      
      <div className=" overflow-hidden text-left text-base text-black font-alegreya"> 
  <img 
          className=" object-cover"
          alt=""
          width={1200}
          height={1000}
          src="/vecteezy_beauty-salon-interior_27819575.jpg"
        />
        <div className=" flex -ml-40 -mt-40  justify-center item-center tracking-[0.02em] capitalize font-alex-brush  inline-block ">
          Make An Appointment
        </div><br></br>
       <div> 
          <div className=" tracking-[0.02em] capitalize ">
          Home/Make an Appointment<br></br>
          </div>
        </div>
        <div className=" tracking-[0.02em] capitalize  ">
          First Name
        </div>
        <div className=" bg-gainsboro " />
        <div className=" tracking-[0.02em] capitalize  ">
          Last Name
        </div>
        <div className=" bg-gainsboro " />
        <div className="tracking-[0.02em] capitalize  ">Phone/Mobile Number</div>
        <div className=" bg-gainsboro" />
        <div className=" tracking-[0.02em] capitalize  ">
          E-mail ID
        </div>
        <div className=" bg-gainsboro " />
        <div className="left-[calc(50%_+_338px)] text-white font-fira-sans">
          <div className=" left-[calc(50%_-_47px)] ">
            <div className=" left-[calc(50%_-_8.05px)] rounded-lg bg-gray " />
            <div className=" bg-white " />
          </div>
          <div className=" flex items-center justify-center font-semibold mt-5">
            
          </div>
          <button className=" bg-black text-white p-4 rounded">NEXT</button>
        </div>
         <DayPicker/>
      </div>
      
    );
  };
  
  export default MakeAnAppointment;
