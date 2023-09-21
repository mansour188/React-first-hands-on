const BlogList=({blogs,Hundeldelete})=>{
   
    return (
        <div className="BlogList">
             {blogs.map((blog)=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <button onClick={()=>{Hundeldelete(blog.id)}}>delete</button>
          </div>
         ))}
        </div>
    )

}

export default BlogList;