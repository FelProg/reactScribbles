import React from "react";

export default function Form(){

    const [inputData,setInputData] = React.useState({firstName:"",lastName:""});

    console.log(inputData);

    function handleInput(event){
        setInputData( prevValue => {
            return{
                ...prevValue, [event.target.name]:event.target.value
            }
        })
    }


    return(
        <form>
            <label htmlFor="firstName">First name</label>
            <input
                name="firstName"
                type="text"
                onChange={handleInput}
            >
            </input>
            <br />
            <label htmlFor="lastName">Last name</label>
            <input
                name="lastName"
                type="text"
                onChange={handleInput}
            >
            </input>
        </form>
    );
}