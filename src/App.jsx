import "./App.css"

function App() {
  const username = "lola"
   const sty ={
     backgroundColor:"blue",
     color:"black",
     fontSize:"56px"
   }
  return( 
    <div>
      <h1>May Cohort {Math.random()}</h1>
      <p className="ptag">Personal css file</p>
      <p style={{color:"green", fontWeight:"bold" , fontFamily:"monospace"}}>Inline styling</p>
      <p style={sty}>{username}</p>

    </div>
  )
}

export default App