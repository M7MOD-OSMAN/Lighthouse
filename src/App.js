import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import MyNavbar from "./components/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Locations from "./pages/locations/Locations";
import StickyButton from "./components/StickyButton";
import Survey from "./components/Survey";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import MyPoints from "./pages/Dashboard/MyPoints/MyPoints";
import History from "./pages/Dashboard/History/History";
import Store from "./pages/Dashboard/Store/Store";
import MyFamily from "./pages/Dashboard/MyFamily/MyFamily";
import Profile from "./pages/Dashboard/MyProfile/Profile";

function App() {
  // console.log(window.location.href.includes("/dashboard"));

  return (
    <div className="overflow-hidden">
      <HashRouter basename="/">
        <MyNavbar />
        <StickyButton />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index path="my-points" element={<MyPoints />} />
            <Route path="history" element={<History />} />
            <Route path="store" element={<Store />} />
            <Route path="my-profile" element={<Profile />} />
            <Route path="my-family" element={<MyFamily />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
