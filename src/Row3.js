import React, {Component} from 'react'
import logo2 from "./images/dealafter.png";
import logo11 from "./images/dealafter1.png";
import {Link} from "react-router-dom";



class row3 extends Component {
    render(){
        return(

            <div className = "rowc">
            <Link to = "/orders" >
            <img src ={logo2} alt = "images" />
            </Link>
            <Link to="/stable">
            <img src ={logo11} alt = "images" />
            </Link>
            
            </div>

        )
    }
}
export default row3;