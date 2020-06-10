import React, {useState} from "react";
import bulbOn from "../src/assets/images/blub-on.png";
import bulbOff from "../src/assets/images/blub-off.png";
const Room = () => {

    const [isLit,setLit]=useState(true);
    const [isTemp,setTemp]=useState(0);
    const [isBlub,setBlub]=useState(true);



    return <>
            <h1>
                The Room is {isLit ? 'lit':'dark'}
                <br/>
                The Room Temp is {isTemp}

            </h1>

        <br/>

        {isBlub ? <img src={bulbOff} alt="no img" height={200}/> : <img src={bulbOn} alt="no img" height={200}/>}

        <br/>
        <button onClick={()=>setLit(!isLit)}>
            Flip
        </button>

        <button onClick={()=>setTemp(isTemp + 1)} >
            +
        </button>

        <button onClick={()=>setTemp(isTemp -1)}>
            -
        </button>

        <button onClick={()=>setBlub(!isBlub)}>
            Blub on/ff
        </button>
        </>
}


export default Room;