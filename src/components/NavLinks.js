import React from "react";

function NavLinks(props) {  
    return (
        <>
        <li className="nav-item">
            <a 
            className="nav-link active"     
            aria-current="page" 
            href="#">
                {props.pages.main}
            </a>
        </li>
        <li className="nav-item">
            <a 
            className="nav-link active"     
            aria-current="page" 
            href="#">
                {props.pages.second}
            </a>
        </li> 
        {props.pages.dropdown.dropdownContent && 
        <li className="nav-item dropdown">
            <a 
            className="nav-link dropdown-toggle" 
            href="#" id="navbarDropdown" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
            {props.pages.dropdown.title}
            </a>
        <ul 
        className="dropdown-menu"
        aria-labelledby="navbarDropdown" >
        { props.pages.dropdown.dropdownContent.map((c, i) => 
            <li className="nav-item">
                <a 
                className="nav-link dropdown-item" 
                key={i} 
                href="">
                    {c}
                </a>
            </li>
        ) }
        </ul>
        </li> }
        </>
    )
}

export default NavLinks;



