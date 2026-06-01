import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div style={{width:"200px", height:"100vh", backgroundColor:"blue"}}>
        Sidenav
        <div style={{padding:"10px 20px"}}>
            <Link to={"/home/profile"} style={{display:"block", color:"white"}}>Profile</Link>
            <Link to={"/home/variables"} style={{display:"block", color:"white"}}>About</Link>
            <Link style={{display:"block", color:"white"}}>Orders</Link>
            <Link style={{display:"block", color:"white"}}>Change Password</Link>
        </div>
    </div>
  )
}

export default Sidenav