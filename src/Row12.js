import React, {Component} from 'react'
import logo19 from "./images/rainydaysafter.png"
import {Link} from "react-router-dom"

class Row12 extends Component {
    render(){
        return (

             <div className="rowc">
             <Link to="powd">
             <img src ={logo19} alt = "images" />
             </Link>
             </div>
        )
    }    
}
export default Row12    