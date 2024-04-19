import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to={`/`} className="text-black">Make An Appointment</Link>
          <Link to={`/`} className="text-black">Services/Prices</Link>
          <Link to={`/`} className="text-black">Team</Link>


        </div>

        <div className="flex items-center font-semibold mr-4">
          <button className=" bg-black text-white p-4 rounded">My Reservation</button>
        </div>



      </div>
    </nav>
  );
};

export default Navbar;