import React, { createElement, useEffect, useRef, useState } from 'react';      
import { useDebounce } from './debounce.jsx';
import axios from 'axios';


function FindBooksFunction(){
    const [Book, setBook] = useState("");
    const debouncedBook = useDebounce(Book, 500);
    const [BookState, setBookState] = useState();

    async function GetBook(){
        const response = await axios.post("http://localhost:5000/book/find", {debouncedBook})
        const realresponse = response.data.message;
        
        alert(realresponse);

    }

    return (
       <>
        <div className='flex justify-center flex-col' >
            <input type="text" placeholder="Search Books" onChange={(e) => setBook(e.target.value)} 
            className='border-none bg-transparent shadow-custom h-14 w-3/5 rounded-xl focus:outline-none focus:ring-0 focus:border-transparent'/>
            <button onClick={()=>{GetBook()}} className = ' relative top-4 border border-black text-black font-semibold h-10 w-20 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300' >Find Book</button>
        </div>
        
       </>
    )
}


const FindBooks = () => {   
    return (
        <div>
            <FindBooksFunction/>
        </div>
    
    );
}
export default FindBooks;
