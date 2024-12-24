import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Login from './Components/login.jsx';
import { Allot } from './Components/allot.jsx';
import FindBooks from './Components/Books.jsx';
import back2 from './Components/f375c831ba45b61d19c510bf0c74e27f.png'
import Home from './Components/home.jsx'



const App = () => {
  
  
  return (
      
    <div className='bg-slate-500 w-svw h-svh overflow-hidden '>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
            <Route path='/' element={<Homepage/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='/stdregister' element={<Stdregister/>}/>
            <Route path='/allotment' element={<Allotment/>}/>
            <Route path='/Books' element={<FindOrCreateBook/>}/>
        </Route>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

function Layout(){

  return<>
    <div className='w-svw h-full '>
      {/* {header } */}
        <div className='w-full flex flex-row h-14 justify-evenly bg-slate-600 items-center shadow-custom '>
            <div><Link to="/homepage"> <strong> Homepage</strong>  </Link></div>
            <div><Link to="/stdregister"><strong>Register new student</strong></Link></div>
            <div><Link to="/allotment"><strong>AllotBooks</strong></Link></div>
            <div><Link to="/Books"><strong>Find books</strong></Link></div>   
        </div>
      {/* {Routes gonna be shown in outlet} */}
        <Outlet/>

      {/* {footer } */}
      
        
    </div>
  </>
}

function Stdregister(){
  return(
    <div className='flex flex-row '>
      <img src={back2} className='h-svh' />
    <Login/>
    
  </div>
  )
}

function Homepage(){
  return(
    <div className='flex flex-row '>
      <img src={back2} className='h-svh' />
      <Home/>
    </div>
  )
}
function Allotment(){
  return(
    <div className='flex flex-row '>
      <img src={back2} className='h-svh' />
      <Allot/>
    </div>
  )
}

function FindOrCreateBook(){
  return(
    <div className='flex flex-row '>
      <img src={back2} className='h-svh' />
      <div className='w-full'>
      <FindBooks/>
      </div>
    </div>
  )
}
export default App;
