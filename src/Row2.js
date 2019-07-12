import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import seeall from "./images/Extseall.png"

class Row2 extends Component {
    render (){
        return (
    <div className = "rowb">
      Deals of The Day
   
      <a href ={seeall}> SEE ALL ></a>
  
    </div>
        )
    }
}
export default Row2