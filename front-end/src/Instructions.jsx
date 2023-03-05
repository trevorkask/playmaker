import React from "react";
import './Instructions.css';

const Instructions = () => {
    return(
        <div className="instructions-container">
            <div className="instructions-demo">
                <h1>Instructions</h1>
                <p>Connect two players through the fewest number of mutual teammates. For example, for Cristiano
                    Ronaldo and Rashford, you can choose Casemiro. You have a maximum of five connections.
                </p>
            </div>
            <div className="first-billboard">
                <p>here is ad number 1</p>
            </div>
        </div>
    )
}

export default Instructions;