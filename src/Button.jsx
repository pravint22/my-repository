function Button(){
    const handleClick = (e) => e.target.textContent = "ouch...!";
    return(
        <>
            <button onDoubleClick={handleClick}>click me..!</button>
        </>
    )
}

export default Button