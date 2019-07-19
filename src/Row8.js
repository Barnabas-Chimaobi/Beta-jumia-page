import React, {Component} from 'react'
import logo15 from "./images/TV.png"
import {Link} from "react-router-dom"


class Row8 extends Component {
    render(){
        return (

             <div className="rowc">
             <Link to="/teli">
             <img src ={logo15} alt = "images" />
             </Link>
             
             </div>
        )
    }    
}    
export default Row8