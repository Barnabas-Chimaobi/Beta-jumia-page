import React, {Component} from "react"
import logo13 from "./images/deodorantafter1.png"
import logo14 from "./images/deodorantafter2.png"
import {Link} from "react-router-dom"

class Row7 extends Component {
    render(){
        return (
            
             <div className="rowc">
             <Link to="/soap">
             <img src ={logo13} alt = "images" />
             </Link>
             
              <img src ={logo14} alt = "images" />
             </div>
        )
    }
}
export default Row7