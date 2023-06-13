import React from "react";

export default function Form(){

    const [inputData,setInputData] = React.useState("");

    console.log(inputData);

    function handleInput(event){
        setInputData(event.target.value)
    }


    return(
        <form>
        <input
        type="text"
        onChange={handleInput}
        >
        </input>
        </form>
    );
}