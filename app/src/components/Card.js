import React from "react";
//need to adjust the css so that the cards are 
const cardStyle= {height: 200, width: 200}
function Card(props) {
    const image = props.image
    const title = props.title
    return <div className="w-25 h-5 d-inline" style={cardStyle}>
     <img className="img-thumbnail img-fluid" onClick={props.handleOnClick}
      id={props.title} style={cardStyle} src={image} alt={title} />
        </div>
}

export default Card
