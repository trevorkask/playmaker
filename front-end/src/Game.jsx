import React from "react";
import './Game.css';
import './Trial.css'
import Trial from './Trial'

const Game = () => {
    return(
        <div>
            <p>Connect between these two players using mutual teammates</p>
            <input type="text" placeholder="Trial 1 out of 5"></input>
            <div className="main-container">
                <div id = "end-point">
                    <p>Cristiano Ronaldo</p>
                </div>
                <Trial name="Mason Mount" state="gray"></Trial>
                <Trial name="Sergio Ramos" state="white"></Trial>
                <p><b>?</b></p>
                <div id = "end-point">
                    <p>Lionel Messi</p>
                </div>
            </div>
        </div>
    )
}

export default Game;