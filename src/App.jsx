import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Footer from "./components/FooterTwo";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import MakeAnAppointment from "./pages/MakeAnAppointment"
import Services from "./pages/Services";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<NavBar />} /> */}
        {/* <Route path="/Footer" element={<Footer />} />  */}
        {/* <Route path="/" element={<NavBar />} /> */}
        {/* <Route path="/Footer" element={<Footer />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/MakeAnAppointment" element={<MakeAnAppointment />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );



}
export default App;
