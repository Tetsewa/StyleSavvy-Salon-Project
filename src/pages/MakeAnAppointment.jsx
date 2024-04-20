import React from 'react'

/*function MakeAnAppointment() {
    return (
        <div>

        </div>
    )
}

export default MakeAnAppointment*/

import {useState} from "react";
//import { Calendar } from 'primereact/calendar';
import Calendar from 'react-calendar';

const MakeAnAppointment = () => {
  const [value, onChange] = useState();
  
    return (
      
      <div className=" overflow-hidden text-left text-base text-black font-alegreya"> 
  <img 
          className=" object-cover"
          alt=""
          src="/parallaxbackgroundwithhairsaloninterior-10779113827-1@2x.png"
        />
        <div className=" tracking-[0.02em] capitalize font-alex-brush inline-block ">
          Make An Appointment
        </div>
        <div className=" tracking-[0.02em] capitalize inline-block ">
          Home/Make an Appointment
        </div>
        <div className=" tracking-[0.02em] capitalize inline-block ">
          First Name
        </div>
        <div className=" bg-gainsboro " />
        <div className=" tracking-[0.02em] capitalize inline-block ">
          Last Name
        </div>
        <div className=" bg-gainsboro " />
        <div className="tracking-[0.02em] capitalize inline-block ">Phone/Mobile Number</div>
        <div className=" bg-gainsboro" />
        <div className=" tracking-[0.02em] capitalize inline-block ">
          E-mail ID
        </div>
        <div className=" bg-gainsboro " />
        <div className="left-[calc(50%_+_338px)] text-white font-fira-sans">
          <div className=" left-[calc(50%_-_47px)] ">
            <div className=" left-[calc(50%_-_8.05px)] rounded-lg bg-gray " />
            <div className=" bg-white " />
          </div>
          <div className=" left-[calc(50%_-_4.64px)] tracking-[0.02em] capitalize font-semibold inline-block ">
            Next
          </div>
        </div>
        <div>
      <Calendar onChange={onChange} value={value} />
    </div>
      </div>
    );
  };
  
  export default MakeAnAppointment;
