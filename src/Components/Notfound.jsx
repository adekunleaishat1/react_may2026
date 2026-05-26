import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const goback = () =>{
       navigate("/")
    }
  return (
    <div>
        Notfound
        <p className='text-center'>404 This is not the page you are looking for</p>
        <button onClick={goback} className='btn btn-danger'>Go Home</button>

    </div>
  )
}

export default Notfound