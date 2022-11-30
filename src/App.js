import './App.css';
import data from "./assets/data.json";
import {DrinkItem} from "./components/Drinkitem.js";
import {useEffect, useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [drink, setDrink] = useState({})
  const [myDrinks, setmyDrinks] = useState(0)
  return (
    <div className="App">
      <h1>Starcents Coffee</h1>
      <input type='text' placeholder='Search Drinks...' onChange={event => {setSearchTerm(event.target.value)}}/>
      <div>
        {data.filter((item, index) => {
          if(searchTerm === ""){
            return(<DrinkItem key= {index} item={item}/>)
          } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return(<DrinkItem key={index} item={item}/>)
          }
        }).map((item, index) => {
          return(<DrinkItem key={index} item={item}/>)
        })}
      </div>

      <div className= "filterTemp" >


      </div>

      <div className= "filterSeasonal">

      </div>


      <div className="Function to Sort">
      </div>
    </div>
  );
}

export default App;
