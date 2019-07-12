import React ,{Component} from 'react'
import logo from './images/row1.png';
import {Link} from "react-router-dom";

class Row1 extends Component {
    render (){
        return (
            <div className="rowc">
            <Link to ="/Extphones">
            <img src={logo} alt = "images"/> 
            </Link>
              
            </div>
        )
    }
}
export default Row1
