import { useEffect, useRef, useState } from "react";

export function useFetch(url){  
  const [post, setpost] = useState({});
    async function getdetails() {
        const response = await fetch(url);
        const set  = await response.json()
        setpost(JSON.stringify(set));
    }
    useEffect(()=>{        
       getdetails()
    },[url])

    return post 
}

export function useDebounce(fn){
  const ref = useRef();
  function called(){
    clearInterval(ref.current)
    ref.current = setTimeout(fn, 500)
  }   
  return called;
}
