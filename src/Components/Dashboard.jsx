import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{width:"100%",height:"100vh", display:"flex", justifyContent:"space-between",alignItems:"center"}}>
       {/* <div style={}> */}
         <Sidenav/>
       {/* </div> */}
        <div style={{backgroundColor:"bisque", width:"100%", height:"100vh"}}>
            <Navbar/>
            <div>
               <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard