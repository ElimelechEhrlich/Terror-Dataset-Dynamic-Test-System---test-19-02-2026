import React, { useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router";

export default function Table({ display, yearSearchOption }) {
    const data = useContext(DataContext);
    let dataBySearch = data
    if ((display !== 'All' || !display)|| yearSearchOption) {
        console.log(yearSearchOption);
        
       dataBySearch = data.filter((row) => (row.city.includes(display) || row.country_txt.includes(display) || ((Number(row.iyear) > Number(display) && yearSearchOption === 'greater') || (Number(row.iyear) < Number(display) && yearSearchOption === 'less'))))
    } 
  return (
    <table className="">
      <thead>
        <tr>
          {(dataBySearch.length > 0) &&
            Object.keys(dataBySearch[0]).map((key) => <th className={`${key === 'summary' && 'w-3'} border p-2 bg-cyan-950 text-white`}  key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataBySearch.map((row, index) => (
          <tr className={`${index%2===0? 'bg-cyan-600': 'bg-cyan-300'} ${index%2!==0 && 'hover:bg-cyan-400 '}`} key={index}>
            {Object.values(row).map((val, i) => (
              <td className={`p-1 font-bold border text-center`} key={i}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
