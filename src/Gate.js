import React from "react";
import MediaCard from "./MediaCard";

const Gate=({isOpen})=>(
    <>
    {isOpen === true ? <h2>Open</h2> : <h2>Closed</h2>}

        <MediaCard body={"this is body "} imageUrl={"this is  image URL"} title={"This is title"} />
    </>
)

export default Gate;