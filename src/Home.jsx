function Home (){
    return (
        <div>
            <h1>Welcome to your Home page</h1>
            <p className="styl">styling in index.css file</p>
            <p style={{fontSize:"50px", fontWeight:"bolder", wordSpacing:"20px"}}>imline styling</p>
            <button className="btn btn-success">click me</button>
        </div>
    )
    
}


export default Home