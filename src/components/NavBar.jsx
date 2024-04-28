
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="h-[120px]">
        <div className="flex justify-between px-3">
          <img
              alt="logo"
              src="/stylesavvy-logo-png-1@2x.png"
              width={140} height={170}
          />
          <div className="flex gap-8 justify-center items-center  text-xl hidden md:flex">
            <Link to={`/`} className="text-black no-underline">Home</Link>
            <Link to={`/AboutUs`} className="text-black no-underline">About Us</Link>
            <Link to={`/MakeAnAppointment`} className="text-black no-underline">Make An Appointment</Link>
            <Link to={`/Services`} className="text-black no-underline">Services/Prices</Link>
            <Link to={`/Team`} className="text-black no-underline">Team</Link>


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

          
        </div>



        {menuOpen && (
            <div >
              <div className="flex flex-col items-center justify-center gap-5 ">
                <Link to={`/`} className="text-black no-underline">Home</Link>
                <Link to={`/About`} className="text-black no-underline">About Us</Link>
                <Link to={`/MakeAnAppointment`} className ="text-black no-underline">Make An Appointment</Link>
                <Link to={`/Services`} className="text-black no-underline">Services/Prices</Link>

                <Link to={`/Team`} className="text-black no-underline">Team</Link>



              </div>

              

            </div>
        )}


      </nav>
  );
};

export default Navbar;