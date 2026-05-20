import React from 'react'

const Input = (props) => {
    console.log(props);
    
  return (
    <div>
        <input onChange={props.onchange} placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default Input