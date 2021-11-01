import React from "react";

function Logo(props) {
    return (
        <div>
           <img className="Logo"
            src={props.logo.src}
            alt={props.logo.altText}
            style={{"height": "3em" }}
            /> 
        </div>
    );
}

export default Logo;