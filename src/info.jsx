import { useState } from "react";
import {sculptureList} from "./data.jsx"
function Info(){
    const [index,setIndex] = useState(0);
    function handleClick(){
        setIndex(index + 1)
    }
    const sculpture = sculptureList[index];
    return(
        <>
            <button onClick={handleClick}>Next</button>
            <h3>{sculpture.name} by {sculpture.artist}</h3>

        </>
    )
}

export default Info