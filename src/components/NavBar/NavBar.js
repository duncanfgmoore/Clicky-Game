import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div className="navBar sticky">
        <h1 className="title">Memory Challenge</h1>

        <div className="scores">
            <div className="score">Current Score:{props.score}</div>
            <div className="highscore">Highscore: {props.highscore}</div>
        </div>

    </div>
);

export default NavBar;
