import { createContext, useEffect, useState } from "react";
import { Route, Router, Routes, useNavigate } from "react-router";
import DataPage from "./pages/DataPage";
import HomePage from "./pages/HomePage";

export const DataContext = createContext(null);

export default function App() {
  const [data, setData] = useState([]);
    const [display, setDisplay] = useState("All");
    const [yearSearchOption, setYearSearchOption] = useState("");


  function fetchData() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <DataContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataPage display={display} setDisplay={setDisplay} yearSearchOption={yearSearchOption} setYearSearchOption={setYearSearchOption}/>} />
      </Routes>
    </DataContext.Provider>
  );
}
