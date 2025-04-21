import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css"; 
import Navbar from './Components/NavBar/NavBar';
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import MalePage from "./Pages/MalePage/MalePage"; 
import FemalePage from "./Pages/FemalePage/FemalePage"; 
import AboutPage from "./Pages/AboutPage/AboutPage";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        <Route path="/male" element={<MalePage/>} />  
        <Route path="/female" element={<FemalePage/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
