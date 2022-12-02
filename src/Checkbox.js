
function Checkbox({tempFilter: applyTempFilter, seasonalFilter: applySeasonalFilter, removeTempFilter, removeSeasonalFilter}){
    const handleTempFilterChange = (event, temperature) => {
        if(event.target.checked == true){
            applyTempFilter(temperature)
        } else {
            removeTempFilter(temperature)
        }
    }

    const handleSeasonalFilterChange = (event, seasonal) => {
        if(event.target.checked == true){
            applySeasonalFilter(seasonal)
        } else {
            removeSeasonalFilter(seasonal)
        }
    }

    return (
        <div>
            <div>
                <label>
                    <input type="checkbox" onChange={event => handleTempFilterChange(event, "Hot")}/>
                    Hot Drinks
                </label>
                <label>
                    <input type="checkbox" onChange={event => handleTempFilterChange(event, "Cold")}/>
                    Cold Drinks
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" onChange={event => handleSeasonalFilterChange(event, "Yes")}/>
                    Seasonal Drinks
                </label>
                <label>
                    <input type="checkbox" onChange={event => handleSeasonalFilterChange(event, "No")}/>
                    Classic Menu
                </label>   
            </div>
        </div>
    )
}

export default Checkbox