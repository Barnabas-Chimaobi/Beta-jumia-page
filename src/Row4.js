import React, {Component} from 'react'
import logo3 from "./images/deal1.png";
import logo4 from "./images/deal2.png";
import logo5 from "./images/deal3.png";
import logo6 from "./images/deal4.png";
import logo7 from "./images/deal5.png";
import logo8 from "./images/deal6.png";
import {Link} from "react-router-dom";

class Row4 extends Component {
    render(){
        return (
            <div className= "rowc">
            <Link to="/Extphones">
            <img src ={logo3} alt = "images" />
            </Link>
            <Link to="/Extprint">
            <img src ={logo4} alt = "images" />
            </Link>
            <Link to="/drum">
            <img src ={logo5} alt = "images" />
            </Link>
            <Link to="/fridges">
            <img src ={logo6} alt = "images" />
            </Link>
            <img src ={logo7} alt = "images" />
            <Link to="Extphones">
            <img src ={logo8} alt = "images" />
            </Link>
            </div>
        )
    }
}    
export default Row4