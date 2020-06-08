import React from "react";

const MediaCard =({title,body,imageUrl}) => (

<>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imageUrl} alt={imageUrl}/>
</>
    
)

export default MediaCard;