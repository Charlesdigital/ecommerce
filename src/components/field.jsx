import React from "react";

function field() {
  return (
    <div>
      <h1>Find an eBike for that fits your criteria</h1>
      <p>range</p>
      <select>
        <option value="10">10 KM</option>
        <option value="20">20 KM</option>
        <option value="30">30 KM</option>
        <option value="40">40 KM</option>
        <option value="50">50 KM</option>
        <option value="60">60+ KM</option>
      </select>
      <p>Max speed</p>
      <select>
        <option value="20">20 KM</option>
        <option value="32">32 KM</option>
        <option value="45">45 KM</option>
        <option value="46">45+ KM</option>
      </select>
      <p>Frame Model</p>
      <select>
      <option value="1">Step through </option>
      <option value="1"> Step Over </option>
      </select>

      <p>wheel Size</p>
      <select>
        <option value="20">20 Inch</option>
        <option value="26">26 Inch </option>
        <option value="27.5">27.5 Inch</option>
        <option value="29">29 Inch</option>
      </select>
      <p>price</p>
      <option value="500">500</option>
        <option value="1000">1000 </option>
        <option value="1500">1500</option>
        <option value="2000">2000</option>
      <p>brand</p>
    </div>
  );
}

export default field;
