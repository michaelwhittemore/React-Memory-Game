import React from "react";
import Card from "./Card"
//need to adjust the css so that the cards are 
function CardContainer(props) {
    //const image=props.image
    const cardArray= props.cardArray.map( (item) => 
        <Card title={item} handleOnClick={props.handleOnClick}
        key={item} />
    )
    
    return <div className="container">
        {cardArray}
    </div>
}

export default CardContainer