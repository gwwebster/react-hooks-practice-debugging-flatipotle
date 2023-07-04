import React, { useState } from "react";
import Side from "./Side";
import burritoImg from "../images/burrito-bowl.jpg";

function Order({ order }) {
  const [isClicked, setIsClicked] = useState(false);

  console.log(order)
  
  const { protein, fillings, toppings, sides } = order;

  function handleClick() {
    setIsClicked(isClicked => !isClicked);
  }

  return (
    <div className="ui centered raised card">
      <div className="image">
        <img src={burritoImg} alt="burrito bowl" />
      </div>
      <div className="content">
        <b>Protein:</b>
        <br />
        {protein.length > 0 ? protein.join(", ") : "None"}
        <br />
        <b>Fillings:</b>
        <br />
        {fillings.length > 0 ? fillings.join(", ") : "None"}
        <br />
        <b>Toppings:</b>
        <br />
        {toppings.length > 0 ? toppings.join(", ") : "None"}
        <br />
      </div>
      <div className="extra content">
        {sides.length > 0 ? (
          <button className="ui button small" onClick={handleClick}>
            View Sides
          </button>
        ) : (
          <p>No sides</p>
        )}

        {/* this is just a shortcut to writing isClicked ? <Side sides={sides} /> : null */}
        {isClicked && <Side sides={sides} />}
      </div>
    </div>
  );
}

export default Order;
