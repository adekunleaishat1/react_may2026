import React from 'react'

const Distodo = ({array}) => {
  return (
    <div>
         {array && array.map((el)=>(
            <h2>{el}</h2>
         ))
         }
    </div>
  )
}

export default Distodo