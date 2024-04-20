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
          <Link to={`/About`} className="text-black">About Us</Link>
          <Link to={`/MakeAnAppointment`} className="text-black">Make An Appointment</Link>
          <Link to={`/Services`} className="text-black">Services/Prices</Link>
          <Link to={`/`} className="text-black">Team</Link>
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
        <div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Link to={`/`} className="text-black">Home</Link>
            <Link to={`/About`} className="text-black">About Us</Link>
            <Link to={`/`} className="text-black">Make An Appointment</Link>
            <Link to={`/`} className="text-black">Services/Prices</Link>
            <Link to={`/`} className="text-black">Team</Link>
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