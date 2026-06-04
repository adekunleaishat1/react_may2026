import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Http = () => {
    const [allpost , setallpost] = useState([])
   useEffect(()=>{
       fetch("https://dummyjson.com/post")
    .then((res)=> res.json())
    .then((data)=> {
        setallpost(data.posts)
        console.log(allpost);
        
    })

    axios.get("https://dummyjson.com/post")
    .then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    })

   },[])
   
   

  return (
    <div>
          {allpost.map((post, index)=>{
            return(
                <>
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/onepost/${post.id}`}>View More</Link>
                </div>
                </>
            )
          })

          }
    </div>
  )
}

export default Http