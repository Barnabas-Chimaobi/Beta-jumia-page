import React, {Component} from 'react'
import logo16 from "./images/tvafter1.png"
import logo17 from "./images/tvafter2.png"
import {Link} from "react-router-dom"


class Row9 extends Component {
    render(){
        return (

            <div className="rowc">
            <img src ={logo16} alt = "images" />
            <Link to = "/hoodie">
            <img src ={logo17} alt = "images" />
            </Link>
            </div>
        )
    }    
}    
export default Row9