import "./MainTop.css"
import groupImg from "/assets/groupPhotos.png"

export default () =>{
    return(
            <div className="main-top">
                <img src={groupImg}></img>
                <div className="online-exp">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
    )
}

