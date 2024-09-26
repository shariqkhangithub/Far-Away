import React from 'react'
import "./Button.css"



const Button = ({ getitem }) => {
  return (
    <div className='button-container'>

      <div className='itemlist'>
        {getitem.map((i)=>(
        <Item i={i}/>
        ))}
      </div>

      <div className='itembutton'>
        <select name="case" id="slc">
          <option value="larger">Larger to Lower</option>
          <option value="Lower to Larger">Lower to Larger</option>
          <option value="Date wise">Date wise</option>
          <option value="A to Z">A to Z</option>
        </select>
        <button className='btn'>Clear List</button>
      </div>
    </div>
  )
}

export default Button



function Item({i}) {
  return (
    <div className='list-design'>
      <input type="checkbox" />
      <h3>{i.inputNumber} {i.inputName}</h3>
      <button className='x-btn'>X</button>
    </div>
  )
}
