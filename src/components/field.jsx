import {useState} from "react";
import axios from "axios"

function field() {

  // const [button, getButton] = useState(false)

// const data = () => {
//   axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
// }.then((data) => {
//   console.log(response);
// })
// // const data = function() {
// //   axios.get()
// // axios()
// // }
// }


const options = {
  method: 'GET',
  url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
  params: {itemId: '3256804591426248'},
  headers: {
    'X-RapidAPI-Key': 'fa3caf02d1msh723fb8916116f8ap14b9fajsnba73d390648a',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

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
      <select>

      <option value="500">500</option>
        <option value="1000">1000 </option>
        <option value="1500">1500</option>
        <option value="2000">2000</option>
        </select>

      <p>brand</p>
    </div>
  );
}

export default field;
