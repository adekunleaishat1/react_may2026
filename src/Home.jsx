import Button from "./Props/Button"
import Input from "./Props/Input"

function Home (){
    return (
        <div>
            <h1>Welcome to your Home page</h1>
            <p className="styl">styling in index.css file</p>
            <p style={{fontSize:"50px", fontWeight:"bolder", wordSpacing:"20px"}}>imline styling</p>
            <button className="btn btn-success">click me</button>
            <Button onclick={()=> alert("signup successful")} text="Signup"/>
            <Button  onclick={()=> alert("login successful")} text="Login"/>
            <Button text="click"/>
           <Input onchange={(e)=>console.log(e.target.value)} placeholder="Enter your Password" type="password"/>
        </div>
    )
    
}


export default Home