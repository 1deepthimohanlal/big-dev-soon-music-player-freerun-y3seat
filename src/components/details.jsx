import React from "react";

function Details(props)
{
    return(
        <div className="details">
            <h1>{props.title}</h1>
            <h5>{props.author}</h5>
        </div>
    );
}
export default Details;