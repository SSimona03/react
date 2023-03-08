import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import "./Index.css"
import Die from "../src/components/Die.jsx"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default () => {
  
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
     
 

  useEffect(()=>{

    const isHold = dice.every(each=> each.isHeld)
    const allValues = dice.every(each => each.value == dice[0].value)

  //   const hold = [];
  //   const value = [];
  //  dice.map(x => hold.push(x.isHeld))
  //  dice.map(x => value.push(x.value))

  //  const allEqualHold = arr => arr.every(val => val === true);
  //  const allEqualValue = arr2 => arr2.every(y => y == value[0]); 
  //let check = (allEqualHold(hold) && allEqualValue(value)) 

   if(isHold && allValues) (setTenzies(true))

  },[dice])



  function generateNewDie() {
    return {

        value: Math.ceil(Math.random() * 2),
        isHeld: false,
        id: nanoid()
    }
}

function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
}

  function rollDice(){
    if(tenzies){
     // window.location.reload();
     setTenzies(false)
     setDice(allNewDice)
      
    }else{
      setDice(prevDice => prevDice.map(dice=>{
        return dice.isHeld ? dice : generateNewDie()
      }))
    }
    

  }



  function hold(id) {
    setDice(prevDice => prevDice.map( dice =>{
      return dice.id == id ? {...dice, isHeld: !dice.isHeld} : dice
    }))
}


  const diceElements = dice.map(dice =>
     <Die 
        key={dice.id} 
        value = {dice.value} 
        isHeld = {dice.isHeld}
        holdDice={()=> hold(dice.id) } 
     />) 
  
    return(
      <main>
        {tenzies && <Confetti /> }
        <div className="info">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolles.</p>
        </div>
        <div className="container">
            {diceElements} 
        </div>
          <button onClick={rollDice}> {tenzies ? "New Game" : "Roll"} </button>
      </main>
    )
}
