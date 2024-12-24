import React from 'react';
import '../Components/allot.css';
import { useState,useContext } from 'react';
import axios from 'axios';



export function Allot(){
    const [name, setname] = useState("");
    const [year, setyear] = useState("");
    const [branch, setbranch] = useState("");
    const [bookname, setbookname] = useState(""); 
    


    async function allotpost(){
        //on clicking backend request goes to localhost:5000/newregister
        if (name != "" && year !="" && branch !="" && bookname != "") {
            
            const res = await axios.post("http://localhost:5000/allot", {name:name, year: year, branch: branch, bookname: bookname})
            alert(res.data.message)
        }

        else{
            alert("please fill all credential correct")
        }
    }
    
    return (
        
        <div className='Login'>
            
            <span>Allot Books</span>
            <div className='name'>
                <input type="text" placeholder='Name' name='name' onChange={(e)=>(setname(e.target.value.trim()))} />
            </div>

            <div className='year'>
                <input type="text" name='year' placeholder='Year'onChange={(e)=>(setyear(e.target.value.trim()))}/>
            </div>

            <div className='branch'>
                <input type="text" placeholder='Branch' onChange={(e)=>(setbranch(e.target.value.trim()))}/>
            </div> 
            <div className='bookname'>
                <input type="text" placeholder='Book Name' onChange={(e)=>(setbookname(e.target.value.trim()))}/>
            </div> 
           
   
            <button onClick={(e)=>{allotpost()}} className='border border-black text-black font-semibold h-10 px-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300'>Allot Books</button>
        </div> 
        
    );


}