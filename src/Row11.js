import React ,{Component} from 'react'
import logo20 from "./images/rainaft.png"
import logo21 from "./images/rainaft2.png"
import {Link} from "react-router-dom"

class Row11 extends Component {
    render(){
        return (
            
            <div className="rowc">
            <Link to="/Exttv">
            <img src ={logo20} alt = "images" />
            </Link>
            <Link to="/Extphones">
            <img src ={logo21} alt = "images" />
            </Link> 
            </div>
        )
    }
}         
export default Row11;