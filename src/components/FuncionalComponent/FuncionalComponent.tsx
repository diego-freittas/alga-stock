import React, {useState, useEffect} from "react";

function FuncionalComponent (props: {name: string}){

    const [age, setAge] = useState(20) 

    useEffect(()=> {
        console.log('Age has been updated to: ' + age)
    }, [age])

    return <>
                <div>Olá, {props.name}, {age}</div>
                <button onClick={()=> {
                    setAge(age +1)
                }}> +

                </button>


            </>
}

export default FuncionalComponent