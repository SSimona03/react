import React from "react"
import "./Die.css"


export default (props) => {
    const styles = { 
        backgroundColor: props.isHeld ? "#59E391" : "white" 

    }
       
    return(
        <div  className="die" style={styles} onClick={props.holdDice}>
            <p > {props.value} </p>
        </div>
    )
}