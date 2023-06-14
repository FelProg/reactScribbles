import React from "react";

export default function Form(){

    const [inputData,setInputData] = React.useState({firstName:"",lastName:"",email:"",comments:""});

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
            <input
                placeholder="First name"
                name="firstName"
                type="text"
                onChange={handleInput}
                value={inputData.firstName}
            >
            </input>
            <br />
            <input
                placeholder="Last name"
                name="lastName"
                type="text"
                onChange={handleInput}
                value={inputData.lastName}
            >
            </input>
            <br />
            <input
                placeholder="Email"
                name="email"
                type="text"
                onChange={handleInput}
                value={inputData.email}
            >
            </input>
            <br />
            <textarea 
                name="comments"
                placeholder="leave a comment please!!"
                onChange={handleInput}
                value={inputData.comments}
            />

        </form>
    );
}