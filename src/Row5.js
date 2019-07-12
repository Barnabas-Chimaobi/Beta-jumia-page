import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import logo9 from "./images/fridge.png";
import logo10 from "./images/fan.png";



class Row5 extends Component {
    render(){
        return (
            
            <div className="rowc">
            <Link to = "/fridges">
            <img src ={logo9} alt = "images"/>
            </Link>
            <Link to ="/fans">
            <img src ={logo10} alt = "images"/>
            </Link>
            </div>
        )
    }
}
export default Row5