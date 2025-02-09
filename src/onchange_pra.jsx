import { useState } from "react";

function From(){
    const [name,setName] = useState("Guest");
    const [number,setNumber] = useState(0);
    const [select,setSelect] = useState("Forth");
    const [radi,setRadi] = useState("");

    const handleName = (event) => setName(event.target.value)
    const handleQuantity = (event) => setNumber(event.target.value)

    return(
        <>
            <input type="text" placeholder="ex. your name" onChange={handleName} />
            <p>Name: {name}</p>
            <input type="number" value={number} onChange={handleQuantity}/>
            <p>Quantity: {number}</p>

            <select name="Your choise" id="optionId" onChange={(event) => setSelect(event.target.value)}>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="Third">Third</option>
                <option value="Forth">Forth</option>
            </select>
            
            <p>this is output for select: {select}</p>
            <label>
                <input type="radio" value="Delivery" checked={radi=="Delivery"} onChange={(e) => setRadi(e.target.value)} />
                Delivery
            </label>
            <label>
                <input type="radio" value="COD" checked={radi=="COD"} onChange={(e) => setRadi(e.target.value)} />
                COD
            </label>
            <p>payment method: {radi}</p>
        </>
    )
}
export default From;