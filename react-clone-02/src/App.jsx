import React from "react"
import ReactDOM from "react-dom/client"
import "./App.css"
import Navbar from "./components/Navbar";
import MainTop from "./components/MainTop"
import Card from "./components/Card"
import data from "./components/data"



const App = () => {

    
    const getData = data.map(dataItems => {  return <Card 

                    key = {dataItems.id}
                     {...dataItems} 
                    /> 
            })

    return(
        <div>
               <Navbar />
               <MainTop />
               <div className="cards">
                    {getData}
               </div>
               
        </div>
        
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// coverImg = {dataItems.coverImg}
                    // star = {dataItems.star}
                    // rating = {dataItems.stats.rating}
                    // reviewCount = {dataItems.stats.reviewCount}
                    // location = {dataItems.location}
                    // title = {dataItems.title}
                    // price = {dataItems.price}
                    // openSpots={dataItems.openSpots}

            // former dataItems = {dataItems}

             