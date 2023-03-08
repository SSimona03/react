import React from "react"
import "./Die.css"


export default (props) => {
    const styles={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div onClick={props.holdD} className="die" style={styles}>
            <p > {props.number} </p>
        </div>
    )
}