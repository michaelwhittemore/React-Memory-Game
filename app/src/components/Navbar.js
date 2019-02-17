import React from "react";

function Navbar(props) {
    return <nav className="navbar bg-primary">
        <h1> Clicky Game </h1>
        <span className="navbar-text">
            Current score: {props.current} Best Score: {props.best} 
    </span>
    </nav>
}

export default Navbar