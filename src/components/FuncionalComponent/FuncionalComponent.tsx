import React, {useState} from "react";

function FuncionalComponent (props: {name: string}){

    const [age, setAge] = useState(20) 

    return <>
                <div>Olá, {props.name}, {age}</div>
                <button onClick={()=> {
                    setAge(age +1)
                }}> +

                </button>


            </>
}

export default FuncionalComponent