import "./Card.css"


//
export default ({coverImg, star, rating, reviewCount, location, title, price, openSpots }) =>{
     
    let badgeText ;
    if(openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(location == "Online"){
        badgeText = "Online "
    }
    
    return(
            <div className="card">
                {badgeText && <div className="soldOut">{badgeText}</div>}
               <img src={`/assets/${coverImg}`} alt="image-card"></img>
               <div className="description">
                        <img src={`/assets/${star}`} width="14px"></img> {rating} <span style={ {color:"gray"} }>({reviewCount}) &middot; {location} 
                            </span>
                        <p>{title}</p>
                        <p><strong>From ${price} </strong> / person</p>              
               </div>
            </div>
    )
}

