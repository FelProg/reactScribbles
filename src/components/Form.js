import React from "react";

export default function Form(){

    const [inputData,setInputData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isVerified:true
    });

    console.log(inputData);

    function handleInput(event){
        
        const { name, value, type, checked} = event.target


        setInputData( prevValue => {
            return{
                ...prevValue, [name]: type === "checkbox" ? checked : value
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
            <br />
            <input 
                type="checkbox"
                name="isVerified"
                id="isVerified"
                onChange={handleInput}
                checked={inputData.isVerified}
            />
            <label htmlFor="isVerified">
                Eres amistoso?
            </label>
            

        </form>
    );
}