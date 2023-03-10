import React from "react";
import './Trial.css';

const Trial = (props) => {
    return(
        <div className="user-trial">
            <p>{props.name}</p>
        </div>
    )
}

export default Trial;