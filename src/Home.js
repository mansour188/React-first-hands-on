import { useState,useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home=()=>{
  const {data:blogs,error,loading}=useFetch("http://localhost:8000/blogs")
  




   
    return (
       <div className="home">
         <h1>this home page</h1>
         {loading && <div>loading .....</div>}
         {error && <div>{ error }</div>}
         {blogs && <BlogList blogs={blogs}/>}
         

      
        
        
       </div>
        
    )
}

export default Home;