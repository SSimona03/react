import "./Meme.css"
import React from "react"
import dataMeme from "./data"

export default () => {

    const [memeObj, setMemeObj] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/1g8my4.jpg"
    })

   
        const [allMemeImages, setAllMemeImages] = React.useState(dataMeme)
        console.log(allMemeImages)
        
    
     function getImageMeme() {
        const memePath = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memePath.length);
        const urlMeme = memePath[randomNumber].url;
        
        setMemeObj(provMeme => ({
          
                ...provMeme,
                randomImg: urlMeme

        }))

    }
    
    return(
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text" 
                        className="form--input"
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button onClick={getImageMeme}
                        className="form--button"
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <img src={memeObj.randomImg} className="meme"></img>
            </main>
            
    )
}



//old 
  //const [memeImage, setMememImage] = React.useState("https://i.imgflip.com/1g8my4.jpg");
        // //const getImage = arrayMemes[[randomNumber]].url;s
        // setMememImage(arrayMemes[[randomNumber]].url)