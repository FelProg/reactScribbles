import React from "react";

export default function Form(){

    //inicialización de la variable inputData con un objeto
    //de 5 key : value
    const [inputData,setInputData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isVerified:true,
        employmentType:"",
        favColor:""
    });

    //debbug console
    console.log(inputData.employmentType);

    function handleInput(event){
        
        //se destructura event.target en la propiedades.
        const { name, value, type, checked} = event.target


        setInputData( prevValue => {
            return{
                ...prevValue, [name]: type === "checkbox" ? checked : value
            }
            //se lee. obtén todas las propiedades del objeto
            //pero modifica name con los valores de checked o de value
            //si se cumple la condición del ternario.
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


            <fieldset className="radio-inputs">
                <legend>job details</legend>

                <label><input 
                    type="radio" 
                    name="employmentType" //same as state property
                    id="Unemployed"
                    value="Unemployed"
                    checked={inputData.employmentType === "Unemployed"}
                    onChange={handleInput}    
                />Unemployed</label><br />

                <label><input 
                    type="radio"
                    name="employmentType" //same as state property
                    id="Full-Time"
                    value="Full-Time"
                    checked={inputData.employmentType === "Full-Time"}
                    onChange={handleInput}     
                />Full-Time</label><br />

                <label><input 
                    type="radio"
                    name="employmentType" //same as state property
                    id="Part-Time"
                    value="Part-Time"
                    checked={inputData.employmentType === "Part-Time"}
                    onChange={handleInput}     
                />Part-Time</label><br />
                <select
                    name="favColor"  //poder acceder a la propiedad name del objeto
                    onChange={handleInput} //va a asignar el valor seleccionado de las opciones
                                           //a [name]
                    value={inputData.favColor} //va a utilizar el valor del objeto para
                                               //asignarselo al estado en el que se encuentre el 
                                               //select en este momento.
                >
                    <option value="">--Choose--</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                </select>

            </fieldset>
            

        </form>
    );
}