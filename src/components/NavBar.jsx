import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav className="h-20">
        <div className="flex justify-between p-3 h-[100%]">
          <img
              alt="logo"
              src="/stylesavvy-logo-png-1@2x.png"
              width={110} height={110}
          />
          <div className="flex gap-10 justify-center items-center hidden md:flex">
            <Link to={`/`} className="xl:text-base text-pink uppercase no-underline transform transition duration-300 hover:scale-105 hover:shadow-xl hover:text-pink-500">Home</Link>
            <Link to={`/AboutUs`} className="xl:text-base text-pink uppercase no-underline transform transition duration-300 hover:scale-105 hover:shadow-xl hover:text-pink-500">About Us</Link>
            <Link to={`/MakeAnAppointment`} className="xl:text-base text-pink uppercase no-underline transform transition duration-300 hover:scale-105 hover:shadow-xl hover:text-pink-500">Make An Appointment</Link>
            <Link to={`/Services`} className="xl:text-base text-pink uppercase no-underline transform transition duration-300 hover:scale-105 hover:shadow-xl hover:text-pink-500">Services/Prices</Link>
            <Link to={`/Team`} className="xl:text-base text-pink uppercase  no-underline transform transition duration-300 hover:scale-105 hover:shadow-xl hover:text-pink-500">Team</Link>
            {/* <Link to={`/MyReservation`} className="text-black">My Reservation</Link> */}
          </div>
          <button className="bg-white flex justify-center items-center p-0" onClick={() => setMenuOpen((prev) => !prev)}>
            <svg
                className="w-6 h-6 mx-4 block md:hidden z-30"
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
            <div className="fixed w-full top-0 bg-white p-8">
              <div className="bg-white flex flex-col items-left gap-5">
                <Link to={`/`} className="text-black no-underline uppercase">Home</Link>
                <Link to={`/AboutUs`} className="text-black  no-underline uppercase">About Us</Link>
                <Link to={`/MakeAnAppointment`} className="text-black  no-underline uppercase">Make An Appointment</Link>
                <Link to={`/Services`} className="text-black  no-underline uppercase">Services/Prices</Link>
                <Link to={`/Team`} className="text-black no-underline uppercase">Team</Link>
              </div>
            </div>
        )}
      </nav>
  );
};
export default Navbar;