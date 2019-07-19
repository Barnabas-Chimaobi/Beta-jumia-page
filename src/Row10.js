import React, {Component} from 'react'
import logo18 from "./images/rainydays.png"
import {Link} from "react-router-dom"


class Row10 extends Component {
    render(){
        return (
             
             <div className="rowc">
             <Link to="/kets">
             <img src ={logo18} alt = "images" />
             </Link>
             </div>
        )
    }
}             
export default Row10;