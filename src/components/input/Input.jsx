import React, { useState } from 'react'
import "./Input.css"



const Input = ({getitem, setgetitem}) => {

    const [inputName, setInputName] = useState("")
    const [inputNumber, setInputNumber] = useState("")

    function addHandler() {
        const myList = [...getitem]
        myList.push({inputNumber ,  inputName})
        setgetitem(myList)
    //  console.log(inputNumber, inputName) 
    }
    return (
        <>
            <div className='adjest-input'>
                <div className='input-container'>
                    <h3>What do you need for your trip? </h3>
                    <select className='sel' onChange={(e)=>setInputNumber(e.target.value)}>
                        {[1,2,3,4,5,6,7,8,9,10].map((e)=>(
                            <option>{e}</option>
                        ) )}
                    </select>
                    <input className='inp' type="text" placeholder='Type here.....' onChange={(e)=>setInputName(e.target.value)} />
                    <button className='inp-btn' onClick={addHandler}>ADD</button>
                </div>
            </div>
        </>
    )
 
}


export default Input



// export {Senditem}