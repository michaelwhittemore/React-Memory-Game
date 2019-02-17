import React from "react";
//need to adjust the css so that the cards are 
function Card(props) {
    //const image=props.image
    const title = props.title
    return <div className="card d-flex">
        <div className="card-body" onClick={props.handleOnClick} id={props.title}>
            {title}
        </div>
    </div>
}

export default Card