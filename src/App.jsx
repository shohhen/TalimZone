import "./styles/_main.scss";
import MainPage from "./pages/main-page/MainPage";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import EssayCheck from "./pages/essay-check/EssayCheck";
import Loader from "./components/loader/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  return (
    <>
     <Loader visible={loading} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route  path="/essay-check" element={<EssayCheck />}/>
      </Routes>
    </>
  );
}

export default App;
