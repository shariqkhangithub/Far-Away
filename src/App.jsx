import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './components/logo/Logo'
import Input from './components/input/Input'
import Button from './components/button/Button'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const[getitem, setgetitem] = useState([])
  console.log(getitem);
  
  return (
    <>
      {/* <h1>hellooo jeeeeeeee </h1> */}
      <Logo  />
      <Input getitem = {getitem} setgetitem = {setgetitem} />
      <Button getitem ={getitem}/>
      <Footer />
    </>
  )
}

export default App
