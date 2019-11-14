import React, {useState} from "react";
import "./FavoritesCities.css"
import Spinner from "../Spinner/Spinner"
import addButton from './svg/addButton.svg'
import crossButton from './svg/crossButton.svg'

const FavoritesCities = ({id, cityData, getWeather, deleteCity}) => {
  const [inputText, setInputText] = useState('');
  const [condition, setCondition] = useState('Add');
  const {
      city,
      temp,
      image,
      wind,
      overcast,
      pressure,
      humidity,
      coordinatesLat,
      coordinatesLon
  } = cityData ? cityData : {};

  const onClickAddButton = () => {
    setCondition('Input');
  }

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  }

  const onClickAddCity = (event) => {
    event.preventDefault();
    setCondition('List');
    getWeather(id, inputText);
  }

  const onClickDelete = () => {
    deleteCity(id);
    setCondition(' ');
  }

  const renderSwitch = () => {
    switch (condition) {
      case 'Input':
        return(
          <div id="input">
            <form>
              <input type="text" value={inputText} onChange={onChangeInput}/>
              <button type="submit" onClick={onClickAddCity}>Add</button>
            </form>
          </div>
        )
      case 'List':
        return(
          <div id="list">
            <div>{city}</div>
            <div>{temp}</div>
            <div>{wind}</div>
            <div>{overcast}</div>
            <div>{humidity}</div>
            <div>{pressure}</div>
            <img src={crossButton} alt="" onClick={onClickDelete}/>
          </div>
        )
        default :
          return(
            <div id={"addButton"}>
              <img src={addButton} alt="icon" onClick={onClickAddButton}/>
            </div>
          )
      }
  }

  return(
    <div id={"city" + id} className="favCity">
      {renderSwitch()}
    </div>
  )
}

export default FavoritesCities;
