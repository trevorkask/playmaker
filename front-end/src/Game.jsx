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

    const playerData = [
        { name: "Mason Mount", state: "gray" },
        { name: "Sergio Ramos", state: "white" },
        { name: "Neymar", state: "gray" },
        { name: "Kylian Mbappé", state: "white"}
    ];

    return(
        <div>
            <p>Connect between these two players using mutual teammates</p>
            <SearchBar onData={handleData}/>
            <div className="main-container">
                <div id = "end-point">
                    <p>Cristiano Ronaldo</p>
                </div>

                {playerData.map((player) => (
                    <Trial key={player.name} name={player.name} state={player.state} />
                ))}

                {data.map((player) => (
                    <Trial key={player.name} name={player.name} state={player.state} />
                ))}

                <p><b>?</b></p>
                <div id = "end-point">
                    <p>Lionel Messi</p>
                </div>
            </div>
        </div>
    )
}

export default Game;