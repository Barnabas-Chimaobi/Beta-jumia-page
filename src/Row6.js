import React ,{Component} from 'react'
import logo12 from "./images/deodorant.png";
import {Link} from "react-router-dom"


class Row5 extends Component {
    render(){
        return (
            
            <div className="rowc">
            <Link to ="/deo">
            <img src ={logo12} alt = "images"/>
            </Link>
            </div>
        )
    }
}
export default Row5