import data from "/Users/isabelaantoniuk/Desktop/cs1300/Development/src/assets/data.json";
import { DrinkItem } from './Drinkitem.js';
import { useEffect, useState } from 'react';
import Checkbox from "./Checkbox.js"
import Sort from "./Sort.js"
import '/Users/isabelaantoniuk/Desktop/cs1300/Development/src/App.css';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
  });
  /* ############################################################## */
  


function MultipleChecks() {
    const [tempFilters, setTempFilters] = useState([]);
    const [seasonalFilters, setSeasonalFilters] = useState([]);
    const [price, setPrice] = useState(0)
    const [sort, setSort] = useState(false);
    const [drink, setDrink] = useState({});
    const [cart, setCart] = useState({});
    const updateCart = (uid) => {
        let newCart = drink;
        if (newCart[uid]) {
            newCart[uid] += 1;
        }
        else {
            newCart[uid] = 1;
        }
        setCart({ ...newCart });
    }

    function tempFilter(temperature) {
        setTempFilters([...tempFilters, temperature]);
    }

    const removeTempFilter = temperature => {
        setTempFilters(tempFilters.filter(tempFilter => tempFilter != temperature));
    }

    function seasonalFilter(seasonal) {
        setSeasonalFilters([...seasonalFilters, seasonal]);
    }

    const removeSeasonalFilter = seasonal => {
        setSeasonalFilters(seasonalFilters.filter(seasonalFilter => seasonalFilter != seasonal));
    }

    const filterByTemp = item => {
        if (tempFilters.length === 0) return true;

        return tempFilters.includes(item.temperature);
    }

    const filterbySeasonal = item => {
        if (seasonalFilters.length === 0) return true;

        return seasonalFilters.includes(item.seasonal);
    }

    function handleSort() {
        filteredArray = filteredArray.sort((a, b) => sortFunction(a, b));
    }

    const sortFunction = (a, b) => {
        return a.price - b.price
    }

    const randomSort = (a, b) => {
        return -1;
    }

    const sortChange = (a, b) => {
        if (sort) {
            return sortFunction(a, b);
        } else {
            randomSort(a, b);
        }
    }

    //const filteredArray = data;
    const filteredArray = data.filter(item => filterByTemp(item)).filter(item => filterbySeasonal(item));
    filteredArray.sort((a, b) => sortChange(a, b))

    return (
            <div className="App">

                <h1>Starcents Coffee</h1>
                <div>
                <Checkbox tempFilter={tempFilter} seasonalFilter={seasonalFilter} removeTempFilter={removeTempFilter} removeSeasonalFilter={removeSeasonalFilter} />
                </div>
            
                <div>
                    {filteredArray.map((item, index) => {
                        return (<DrinkItem key={index} updateCart={updateCart} item={item} index={index} price={price} setPrice={setPrice} />)
                    })}
                </div>

                <div>
                    <Sort sortFunction={() => setSort(!sort)} />
                </div>


                <div>
                    <h2>Cart</h2>

                    {Object.keys(cart).map((key) => {
                        return (
                            <>
                                <div>
                                    {data[key].name + ": " + cart[key] + " "}
                                </div>
                            </>
                        )
                    })}
                    <h4>Total</h4>
                    <div>{price}</div>
                </div>



            </div>

    )
}

export default MultipleChecks;