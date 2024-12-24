import React from 'react';
import '../Components/login.css'
import { useState } from 'react';
import axios from 'axios'
const Login = () => {
    
    const [name, setname] = useState("");
    const [year, setyear] = useState("");
    const [branch, setbranch] = useState("");

    async function Register(){
        //on clicking backend request goes to localhost:5000/newregister
        const res = await axios.post("http://localhost:5000/newregister", {name, year,branch})
        alert(res.data.message)
    }
    
    return (
        <div className='Login'>
            <span>New Registeration</span>
            <div className='name'>
                <input type="text" placeholder='Name' onChange={(e)=>(setname(e.target.value.trim()))}/>
            </div>

            <div className='year'>
                <input type="text" placeholder='Year'onChange={(e)=>(setyear(e.target.value.trim()))}/>
            </div>

            <div className='branch'>
                <input type="text" placeholder='Branch' onChange={(e)=>(setbranch(e.target.value.trim()))}/>
            </div> 

            <button onClick={Register} className='border border-black text-black font-semibold h-10 px-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300'>Register</button>
        </div> 
    );
}



export default Login;
