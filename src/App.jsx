import "./App.css"
import { Route, Routes } from "react-router-dom"
import Landingpage from "./Landingpage"
import Home from "./Home"
import Sportify from "./Components/Sportify"
import Notfound from "./Components/Notfound"

function App() {
  // const username = "lola"
  //  const sty ={
  //    backgroundColor:"blue",
  //    color:"black",
  //    fontSize:"56px"
  //  }
  return( 
    <div>
      {/* <h1>May Cohort {Math.random()}</h1>
      <p className="ptag">Personal css file</p>
      <p style={{color:"green", fontWeight:"bold" , fontFamily:"monospace"}}>Inline styling</p>
      <p style={sty}>{username}</p> */}
      <Routes>
        <Route path="/landingpage" element={<Landingpage/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/sportify" element={<Sportify/>} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App