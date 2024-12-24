import { useRef, useState, useEffect } from "react";

//use debounce hook
export function useDebounce(value, delay){
    const [debounced, setdebounced] = useState(value);
    const timer = useRef(null);
    useEffect(function(){

        if (timer.current) {
            clearTimeout(timer.current);
        }

        //set a new timer
       timer.current =  setTimeout(() => setdebounced(value), delay)
    
    //if user put nothing then timer runs which causes waste so,
    return () => {
        clearTimeout(timer.current);
    };

   }, [value, delay])
    return debounced;
}