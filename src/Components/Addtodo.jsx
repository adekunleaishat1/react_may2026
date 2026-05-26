import React,{useState} from 'react'
import Input from '../Props/Input'
import Button from '../Props/Button'
import Distodo from './Distodo'

const Addtodo = () => {
    const [inputValue, setinputValue] = useState("")
    const [inpuarray, setinpuarray] = useState([])
    const Addinfo = () =>{
      console.log(inputValue);
      setinpuarray([...inpuarray , inputValue])
    }
  return (
    <div>
        <Input onchange={(e)=> setinputValue(e.target.value)} type="text" placeholder="Enter message..."/>
        <Button onclick={Addinfo} text="Add"/>
        <Distodo array={inpuarray}/>
    </div>
  )
}

export default Addtodo