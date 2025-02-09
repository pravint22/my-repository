import { useState } from "react";


function CarList(){
    const [car,SetCar] = useState({
        year: 2025,
        model:"mastang",
        make:"ford"
    })

    const handleYearChange = (event) => {
        SetCar(c => ({...c, model: event.target.value}));
    }
    const handleMakeChange = (event) => {
        SetCar(c => ({...c, model: event.target.value}));
    }
    const handleModelChange = (event) => {
        SetCar(c => ({...c, model: event.target.value}));
    }

    return(
        <>
            <p>Your Favrourt car: {car.year} {car.make} {car.model} </p>
            <input type="number" placeholder={car.year} onChange={handleYearChange} />
            <input type="text" placeholder={car.make} onChange={handleMakeChange} />
            <input type="text" placeholder={car.model} onChange={handleModelChange} />
            
        </>
    )
}

export default CarList;