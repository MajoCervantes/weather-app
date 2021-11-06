import { BrowserRouter, Routes, Route } from "react-router-dom";

// //Components
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AllCityInfo from "./views/AllCityInfo/AllCityInfo";




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/info/:name" exact element={<AllCityInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
