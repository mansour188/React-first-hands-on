import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create=()=>{
    const history=useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [author,setAuthor] = useState("mario")
    const [loading,setLoading]=useState(false)
    const handelRequest=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        setLoading(true)
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
            
        }).then(()=>{

            setLoading(false)
            console.log("blog added")
            history.push("/")
        }).catch((e)=>{
            console.log(e.message)

        })

    }
    return(
        <div className="create">
            <h1>this create page</h1>
            <form onSubmit={handelRequest}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>body</label>
                <textarea type="text" value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario" >mario</option>
                    <option value="yochi" >yochi</option>
                </select>
                {!loading && <button >Add Blog</button>}
                {loading && <button disabled >Adding Blog ...</button>}
            </form>
        </div>
    )
}

export default Create;