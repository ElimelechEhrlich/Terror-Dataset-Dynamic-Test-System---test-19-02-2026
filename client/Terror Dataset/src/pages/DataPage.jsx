import React, { useContext, useState } from "react";
import Table from "../comps/Table";

export default function DataPage({ display, setDisplay, yearSearchOption, setYearSearchOption }) {
  return (
    <>
      <div>
        <label className="p-3" htmlFor="search">
          search by city or contry:
        </label>
        <input
          className="border p-1"
          name="search"
          onChange={(e) => {
            setDisplay(e.target.value);
            console.log(display);
          }}
          type="text"
          placeholder="your search"
        />
        <label className="p-3" htmlFor="iyearSearch">
          search by iyear{" "}
          <select onChange={e => setYearSearchOption(e.target.value)}>
            <option value="greater">greater</option>
            <option value="less">less</option>
          </select>
          from:
        </label>
        <input
          className="border p-1"
          name="iyearSearch"
          onChange={(e) => {
            setDisplay(e.target.value);
          }}
          type="number"
          placeholder="iyear"
        />
      </div>
      <Table display={display} yearSearchOption={yearSearchOption} />
    </>
  );
}
