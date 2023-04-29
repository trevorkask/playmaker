import React, { useState } from "react";
import './Game.css';
import './Trial.css'
import Trial from './Trial'
import SearchBar from "./SearchBar";

const Game = () => {
    const [data, setData] = useState([]); 

    const handleData = (childData) => {
        // add a function that communicates to the backend and gets the state
        setData([...data, {name: childData, state: "gray"}]); //fixme
    };

    return(
        <div>
            <p>Connect between these two players using mutual teammates</p>
            {data.length < 5 ? <SearchBar onData={handleData}/> : <br></br>}
            <div className="main-container">
                <div id = "end-point">
                    <p>Cristiano Ronaldo</p>
                </div>

                {data.map((player) => (
                    <Trial key={player.name} name={player.name} state={player.state} />
                ))}

                {data.length < 5 ? <p><b>?</b></p> : null}
                <div id = "end-point">
                    <p>Lionel Messi</p>
                </div>
            </div>
        </div>
    )
}

export default Game;