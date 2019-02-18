import React from "react";
import Card from "./Card"
//need to adjust the css so that the cards are 
function CardContainer(props) {
    const cardArray= props.cardArray.map( (item) => 
        <Card title={item[0]} image={item[1]} handleOnClick={props.handleOnClick}
        key={item[0]} />
    )
    
    return <div className="container">
        {cardArray}
    </div>
}

export default CardContainer