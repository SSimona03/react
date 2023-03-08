import "./Meme.css"
import React from "react"
import dataMeme from "./data"

export default () => {

    const [memeObj, setMemeObj] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/1ooaki.jpg"
    })

   
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(()=>{
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res => res.json())
        // .then(data => setAllMemeImages(data.data.memes)) OR async 

        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()

        return () => {
            // cleanup function
        }
    },[])

    function handleChange(event){
            const {name, value} = event.target
        
            setMemeObj(prevMemeObj => ({ 
                ...prevMemeObj,
                [name]: value
            }))
    }
    
    
     function getImageMeme() {
     
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const urlMeme = allMemeImages[randomNumber].url;
        
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
                        onChange={handleChange}
                        name="topText"
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        className="form--input"
                        onChange={handleChange}
                        name="bottomText"
                    />
                    <button onClick={getImageMeme}
                        className="form--button"
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme-box">
                    <img src={memeObj.randomImg} className="meme"></img>
                    <h2 className="meme--text top">{memeObj.topText}</h2>
                    <h2 className="meme--text bottom">{memeObj.bottomText}</h2>
                </div>
            </main>
            
    )
}



//old 
  //const [memeImage, setMememImage] = React.useState("https://i.imgflip.com/1g8my4.jpg");
        // //const getImage = arrayMemes[[randomNumber]].url;s
        // setMememImage(arrayMemes[[randomNumber]].url)