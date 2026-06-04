import React , {useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Onepost = () => {
   const {id} = useParams()
  useEffect(() => {
   axios.get(`https://dummyjson.com/post/${id}`)
   .then((res)=>{
    console.log(res);
    
   }).catch((err)=>{
    console.log(err);
    
   })
  }, [])
  
   
  return (
    <div>

    </div>
  )
}

export default Onepost