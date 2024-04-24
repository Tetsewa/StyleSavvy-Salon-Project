import { Link } from "react-router-dom";

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
          <Link to={`/`} className="text-black">About Us</Link>
          <Link to={`/`} className="text-black">Make An Appointment</Link>
          <Link to={`/`} className="text-black">Services/Prices</Link>
          <Link to={`/`} className="text-black">Team</Link>

          {/* <a className="text-black">About Us</a>
          <a className="text-black">Make An Appointment</a>
          <a className="text-black">Services/Prices</a>
          <a className="text-black">Team</a> */}
        </div>

        <div className="flex items-center  font-semibold">
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