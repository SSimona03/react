import "./Main.css"




export default ({title, location, googleMapsUrl, startDate, endDate, description, imageUrl,locationIcon}) => {
    let urlImg = `./assets/${imageUrl}`;
    return(
        <div className="entry">
                <div className="mainImage" style={{backgroundImage: `url(${urlImg})` }} ></div>  
                
                        <div className="details">
                                <img src={`./assets/${locationIcon}`} width="8px" height="11px" alt="location-logo"></img>
                                <span className="location-tag">{location}</span>
                                <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
                                <h1>{title}</h1>
                                <div className="dates">{startDate} - {endDate}</div>
                                <p>{description}</p>
                        </div>
                
        </div>
    )
}


