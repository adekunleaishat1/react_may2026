import React, {useState} from 'react'

 const Todo = () => {
   const [title, settitle] = useState("")
   const [description, setdescription] = useState("")
   const [alltodo, setalltodo] = useState([])

   const handleinput = (e) =>{
     settitle(e.target.value)
   }
   const Add = () =>{
    const todoinfo = {
        title,
        description
    }
    console.log(todoinfo);
    setalltodo([...alltodo, todoinfo])
   }
   const deleteTodo = (i) =>{
    console.log(i);
    alltodo.splice(i, 1)
    setalltodo([...alltodo])
   }

  return (
    <div>
        <input onChange={handleinput} type="text" />
        <input onChange={(e) => setdescription(e.target.value)} type="text" />
        <button onClick={Add}>AddTodo</button>

        {alltodo.map((todo, index)=>{
            return (
                <>
             <div key={index}>
                <p>{index + 1}</p>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <button onClick={()=>deleteTodo(index)} >delete</button>
             </div>
            </>
            )
            
        })

        }
    </div>
  )
}


export default Todo