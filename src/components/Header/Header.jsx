import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header(){
    return(
        <div className="header">
            <h5>
                <Link to="/" >Home</Link>
            </h5>
            <h5>
                <Link to="/about" >About</Link>
            </h5>
            <h5>
                <Link to="/completed" >Completed</Link>
            </h5>
            <h5>
                <Link to="/notCompleted" >Not Completed</Link>
            </h5>
        </div>
    )
}

export default Header;