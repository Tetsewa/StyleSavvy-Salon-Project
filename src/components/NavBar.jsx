
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
            <Link to={`/`} className="text-black no-underline">Home</Link>
            <Link to={`/AboutUs`} className="text-black no-underline">About Us</Link>
            <Link to={`/MakeAnAppointment`} className="text-black no-underline">Make An Appointment</Link>
            <Link to={`/Services`} className="text-black no-underline">Services/Prices</Link>
            <Link to={`/Team`} className="text-black no-underline">Team</Link>
            {/* <Link to={`/MyReservation`} className="text-black">My Reservation</Link>
 */}

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

          {/* <div className="hidden md:flex items-center font-semibold mr-4">
            <button className=" bg-black text-white p-4 rounded">My Reservation</button>
          </div> */}
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

              {/* <div className="flex items-center justify-center font-semibold mt-5">
                <button className=" bg-black text-white p-4 rounded"><Link to="/MyReservation" className="text-black">MyReservation</Link> </button>
              </div> */}

            </div>
        )}


      </nav>
  );
};

export default Navbar;
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between items-center">
//         <Link to="/">
//           <img
//             alt="logo"
//             src="/stylesavvy-logo-png-1@2x.png"
//             width={140}
//             height={170}
//           />
//         </Link>
//         <div className="hidden md:flex gap-5">
//           <Link to={`/`} className="text-black">Home</Link>
//           <Link to={`/AboutUs`} className="text-black">About Us</Link>
//           <Link to={`/MakeAnAppointment`} className="text-black">Make An Appointment</Link>
//           <Link to={`/Services`} className="text-black">Services/Prices</Link>
//           <Link to={`/Team`} className="text-black">Team</Link>
//           <Link to={`/MyReservation`} className="text-black">My Reservation</Link>
//         </div>
//         <button onClick={() => setMenuOpen((prev) => !prev)} className="md:hidden">
//           <svg
//             className="w-6 h-6 block"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {menuOpen ? (
//               <path d="M6 18L18 6M6 6l12 12"></path>
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             )}
//           </svg>
//         </button>
//       </div>
//       {menuOpen && (
//         <div className="bg-white">
//           <div className="container mx-auto py-2 md:hidden flex flex-col gap-2">
//             <Link to={`/`} className="text-black">Home</Link>
//             <Link to={`/About`} className="text-black">About Us</Link>
//             <Link to={`/MakeAnAppointment`} className="text-black">Make An Appointment</Link>
//             <Link to={`/Services`} className="text-black">Services/Prices</Link>
//             <Link to={`/Team`} className="text-black">Team</Link>
//             <Link to={`/MyReservation`} className="text-black">My Reservation</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
