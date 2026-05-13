import React, {useState} from 'react'

const Variables = () => {
    const [username, setusername] = useState("James")
    const [userinfo, setuserinfo] = useState(
        {name:"shola", class:"tobi"}
    )
    const [isloading , setisloading] = useState(false)
 const [inputvalue, setInputvalue] = useState("")
 const [inputvalue2, setInputvalue2] = useState("")
 const [alluser, setalluser] = useState([])

    // let name = "John Doe";
    // const userdetail = {name:"shola", class:"tobi"}
    const userarray = [
        {name:"shola", class:"node"},
        {name:"tobi", class:"react"},
        {name:"tola", class:"angular"},
    ]
    const update = () =>{
        setusername("")
    }
    const handleinputchange = (e) =>{
      console.log(e.target.value);
      setInputvalue(e.target.value)
      
    }
   const handleclick = () =>{
    console.log(inputvalue, inputvalue2);
    const userdetail = {
       email: inputvalue,
       password: inputvalue2
    }
    console.log(userdetail);
    setalluser([...alluser, userdetail])
   }
//   {conditional statement ? true expression : flase expression} ternary operator

  return (
    <div>
        Variables
                <p className={isloading ? "text-success" : "text-danger"}>{username}</p>
        <input onChange={handleinputchange} type="text" />
        <input onChange={(e)=> setInputvalue2(e.target.value)} type="text" />
        <button onClick={handleclick}>save</button>

        <button onClick={update}>changes</button>

        {alluser.length == 0 ? <h3>No user is available</h3> : alluser.map((user, index)=>{
            return <>
                 <div>
                    <h2>{user.email}</h2>
                    <h2>{user.password}</h2>
                 </div>
            </>
        })

        }

        <div>{userarray.map((user, index)=>{
            return (
                <>
                <div>
                    <p>{user.name}</p>
                    <p>{user.class}</p>
                </div>
                </>
            )
        })}</div>


        {/* {userarray.map((user, index)=>(
                <>
                <div>
                    <p>{user.name}</p>
                    <p>{user.class}</p>
                </div>
                </>
            )
        )} */}
    </div>
  )
}

export default Variables