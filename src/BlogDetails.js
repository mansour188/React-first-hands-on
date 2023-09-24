import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch"

const BlogDetails=()=>{
    const {id}=useParams()
    const {data:blog,error,loading}=useFetch("http://localhost:8000/blogs/"+id)
    return(
        <div className="Blog-details">
            {loading && <div>loading ......</div>}
            {error && <div>{error}</div>}
          
         {blog && <article>
            
            <h2>{blog.title}</h2>
         <h3>written by {blog.author}</h3>
         <div>
            {blog.body}
         </div>
            
            </article>}

        </div>
    )

}

export default BlogDetails