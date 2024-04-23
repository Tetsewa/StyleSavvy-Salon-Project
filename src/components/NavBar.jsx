// import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <nav>
//     {/* <div className="w-full flex justify-center relative bg-white overflow-hidden text-left text-mini text-white font-inter"> */}
//       {/* <div className="flex justify-between top-[0px] left-[0px] w-[100%] xl:w-[1280px]"> */}
//       <div className="flex justify-between px-3">
//         <img
//           // className="flex top-[0px] left-[0px] w-[160px]"
//           alt="logo"
//           src="/stylesavvy-logo-png-1@2x.png" width={140} height={170}
//         />
//         {/* <div className="flex items-center gap-[30px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]"> */}
//         <div className="flex gap-5 justify-center items-center hidden md:flex">
//           <Link to={`/`} className="text-black">Home</Link>
//           <Link to={`/AboutUs`} className="text-black">About Us</Link>
//           <Link to={`/MakeAnAppointment`} className="text-black">Make An Appointment</Link>
//           <Link to={`/Services`} className="text-black">Services/Prices</Link>
//           <Link to={`/Team`} className="text-black">Team</Link>

//           {/* <a className="text-black">About Us</a>
//           <a className="text-black">Make An Appointment</a>
//           <a className="text-black">Services/Prices</a>
//           <a className="text-black">Team</a> */}
//         </div>

//         <div className="flex items-center  font-semibold mr-4">
//           <button className="flex bg-black text-white p-4 rounded">My Reservation</button>
//           {/* <button class="text-left">Left-aligned Button</button> */}

//         </div>


//         {/*         
//           <div className="flex top-[1px] text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[50px] h-[19px]">
//             HomeDiogo
//           </div>
//           <div className=" text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[125px] h-[19px]">
//             About Us
//           </div>
//           <div className="flex top-[1px] text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[161px] h-[19px]">
//             Make An Appointment
//           </div>
//           <div className="flex top-[0px] text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[75px] h-[19px]">
//             Services/Prices
//           </div>
//           <div className="flex top-[0px] text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[52px] h-[19px]">
//             Team
//           </div>
//         </div>
//         <div className="flex top-[42px] w-[136.2px] h-[35px] font-fira-sans">
//           <div className="flex top-[0px] w-[128.8px] h-[35px]">
//             <div className="flex top-[0px] rounded-lg bg-gray w-[128.8px] h-[35px]" />
//           </div>
//           <div className="flex top-[8px] tracking-[0.02em] capitalize font-semibold inline-block w-[124.3px] h-[16.7px]">
//             My Reservation
//           </div>
//         </div> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav >
      <div className="flex justify-between px-3">
        <img
          alt="logo"
          src="/stylesavvy-logo-png-1@2x.png"
          width={140} height={170}
        />
        <div className="flex gap-5 justify-center items-center hidden md:flex">
          <Link to={`/`} className="text-black">Home</Link>
          <Link to={`/AboutUs`} className="text-black">About Us</Link>
          <Link to={`/MakeAnAppointment`} className="text-black">Make An Appointment</Link>
          <Link to={`/Services`} className="text-black">Services/Prices</Link>
          <Link to={`/Team`} className="text-black">Team</Link>
        </div>



        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <svg
            className="w-6 h-6 mr-2 block md:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center font-semibold mr-4">
          <button className=" bg-black text-white p-4 rounded">My Reservation</button>
        </div>
      </div>



      {menuOpen && (
        <div >
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Link to={`/`} className="text-black">Home</Link>
            <Link to={`/About`} className="text-black">About Us</Link>
            <Link to={`/MakeAnAppointment`} className="text-black">Make An Appointment</Link>
            <Link to={`/Services`} className="text-black">Services/Prices</Link>
    
            <Link to={`/Team`} className="text-black">Team</Link>

          </div>

          <div className="flex items-center justify-center font-semibold mt-5">
            <button className=" bg-black text-white p-4 rounded">My Reservation</button>
          </div>

        </div>
      )}


    </nav>
  );
};

export default Navbar;