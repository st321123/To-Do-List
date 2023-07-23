import React, { useState } from "react";
import Footer from "./Footer";
import InputArea from "./InputArea";
function Body() {
  const ans = [];
 
  const [items, setItems] = useState([]);
 
  function addd(state) {
    setItems((prevValue) => [...prevValue, state]);
    
  }

  function delt(id) {
    setItems((prevValue) => {
      return (prevValue.filter((items, idx) => { return (idx !== id) }))
    });
  }
  return (
    <div className="form">
    <InputArea onAdd = {addd}/>
      <ul>
        {items.map((todo, index) => (<Footer key={index} id={index} text={todo} deltu={delt} />))}
      </ul>

    </div>)
}
export default Body;