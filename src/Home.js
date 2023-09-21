import { useState,useEffect } from "react"
import BlogList from "./BlogList";


const Home=()=>{
  const [blogs,setBlog]=useState(null);
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
  setTimeout(() => {
    fetch("http://localhost:8000/blogs").then((resp)=>{
      if(!resp.ok){
        setLoading(false)
        throw Error("error can't fetch resources .....")

      }
     
    return resp.json()
  }).then((data)=>{
  
    setBlog(data)
    setLoading(false)
    setError(null)
  }).catch(error=>{
    console.log(error)
    setBlog(null)
    setError(error.message)
  })
    
  }, 1000);
  },[error])
  const Hundeldelete=(id)=>{
    let newBlogs=blogs.filter((blog)=>blog.id!==id)
    setBlog(newBlogs)

  }




   
    return (
       <div className="home">
         <h1>this home page</h1>
         {loading && <div>loading .....</div>}
         {error && <div>{ error }</div>}
         {blogs && <BlogList blogs={blogs} Hundeldelete={Hundeldelete}/>}
         

      
        
        
       </div>
        
    )
}

export default Home;