import React from 'react'
import tree from "./../../assets/tree.png"
import bag from "./../../assets/bag.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={tree} alt="tree" />
      <h1>FAR AWAY</h1>
      <img src={bag} alt="tree" />

    </div>
  )
}

export default Logo