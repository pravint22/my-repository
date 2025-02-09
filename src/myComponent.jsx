import { useState } from "react";
import "./index.css";

const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 600,
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#007bff',
    color: 'white',
    margin: '5px 0',
};

function MyComponent(){
    const [name,setName] = useState("Guest")
    const [age,setAge] = useState(0)
    const [status,setStatus] = useState(false)

    function handleClick(){
        setName("Pravin")
    }
    return(
        <>
            <p>name: {name}</p>
            <button onClick={handleClick} style={buttonStyle}></button>

            <p>age: {age}</p>
            <button onClick={() => setAge(age + 1)} style={buttonStyle}></button>

            <p>status: {status ? "Yes" : "No"}</p>
            <button onClick={() => setStatus(!status)} style={buttonStyle}></button>
        </>
    )
}

export default MyComponent;