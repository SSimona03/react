import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import "./Index.css"
import Die from "../src/components/Die.jsx"
import { nanoid } from 'nanoid'

export default () => {
  
  const [dice, setDice] = React.useState(allNewDice());


  function allNewDice() {
    const arrayDice = [];
    
      for(let i = 0; i < 10; i++){
      const objDice =  { value: Math.ceil(Math.random() * 10), 
        isHeld: false,
        id: nanoid()
      };
        arrayDice.push(objDice)
      }
   
      return arrayDice
  }

  function rollDice(){
    setDice(allNewDice)
  }

  function hold(id) {
   
    setDice(prevDice => {
        return {
            ...prevDice,
            isHeld: !prevDice.isHeld
        }
    })
}

  const diceElements = dice.map(dice => < Die key={dice.id} number = {dice.value} holdD={()=> hold(dice.id)} />) 
  
    return(
      <main >
        <div className="container">
            {diceElements} 
        </div>
          <button onClick={rollDice}> Roll </button>
      </main>
    )
}