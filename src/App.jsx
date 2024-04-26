import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
//import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MakeAnAppointment from "./pages/MakeAnAppointment";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Services from "./pages/Services";
import MyReservation from "./pages/MyReservation";
// import ErrorPage from "./pages/ErrorPage";


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

        <Route path="/" element={<Home />} />
        <Route path="/MakeAnAppointment" element={<MakeAnAppointment />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/MyReservation" element={MyReservation} />
        {/* <Route path="*" element={ErrorPage} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;