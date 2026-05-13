import { FaEye } from "react-icons/fa";
import hero from "./assets/hero.png"
import { BsAirplaneEnginesFill } from "react-icons/bs";

function Landingpage() {
    const user = "students"
     const mysty = {
        width:"200px",
        height:"200px",
        backgroundColor:"green",
        student:{
            color:"white",
            fontSize:"20px"
        }
     }

    return (
        <>
        <div style={mysty}>
            {/* <h1>Welcome to your landingpage {2 *2}</h1> */}
            <div style={mysty.student}>{user}</div>
        </div>
        <div>
            <BsAirplaneEnginesFill />
            <FaEye/>
            <img src={hero} alt="" />
       
        </div>
        
        </>
    )
}



export default Landingpage