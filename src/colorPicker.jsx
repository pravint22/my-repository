import { useState } from "react";

function ColorPicker(){
    const [color,setColor] = useState("#ffffff")

    const handleColor = (event) => {
        setColor(document.querySelector('#root').style.backgroundColor = event.target.value)
    }
    console.log(document.querySelector('#root').style)
    return(
        <>
            <h1>this is color</h1>
            <input
                type="color" 
                name="color picker" 
                id="colorPickerId"
                value={color}
                onChange={handleColor}
            />
        </>
    )
}

export default ColorPicker;