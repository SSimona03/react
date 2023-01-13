// import React from "react"
// import ReactDOM from "react-dom/client"
import "./App.css"
import Navbar from "../src/components/Navbar"
import Main from "../src/components/Main"
import data from "../src/components/data"


export default () => {
  const getData = data.map(item => { 
    return <Main 
        key = {item.id}
        {...item}
    />
  })

  return(
        <>
            <Navbar />
            <div className="destinationsCards">
                {getData}
            </div>
        </>
  )
}



// ReactDOM.createRoot(document.getElementById("root")).render
//   (
//         <App />
//   );

