import { useEffect,useState } from "react";
const useFetch=(url)=>{
    const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{

    const abortController=new AbortController();
  setTimeout(() => {
    fetch(url,{signal:abortController.signal}).then((resp)=>{
      if(!resp.ok){
        setLoading(false)
        throw Error("error can't fetch resources .....")

      }
     
    return resp.json()
  }).then((data)=>{
  
    setData(data)
    setLoading(false)
    setError(null)
  }).catch(error=>{
    if(error.name==='AbortError'){
      console.log("fetch aborted")
    }else{
      
    setData(null)
    setError(error.message)
    }
    
  })
    
  }, 1000);
  return ()=> abortController.abort()

  },[url])
  return {data,error,loading}

}
export default useFetch;