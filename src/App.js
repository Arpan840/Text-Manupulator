
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  
  Route,
  Routes,
 
} from "react-router-dom";





//let name=prompt("What is your name");

function App() {
  const [mode, setMode] = useState('light');
  

  
  function changeMode()
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
     // alert('dark mode on')
     document.title='Text Utils dark mode'
      

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
     // alert('light mode on ')
     document.title='Text Utils light mode'
    }
  }
  function dbMode(){
    if(mode==='light')
    {
      setMode('blue');
      document.body.style.backgroundColor='blue';

    }
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }}
  function greyMode(){
    if(mode==='light')
    {
      setMode('gray')
      document.body.style.backgroundColor='gray';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }}
    const gMode=()=>
    {
      if(mode==='light')
    {
      setMode('green')
      document.body.style.backgroundColor='green';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';

    }

  }
  const rMode=()=>
  {
    if(mode==='light')
    {
      setMode('red')
      document.body.style.backgroundColor='red'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  const yMode=()=>{
    if(mode==='light')
    {
      setMode('yellow')
      document.body.style.backgroundColor='yellow'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'

    }}
    function skMode()
    {
      if(mode==='light')
      {
        setMode('	#ADD8E6')
        document.body.style.backgroundColor='	#ADD8E6'
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
    }
  }
    
  
  
  return (
    <>
    <Router>
   
<Navbar title="TextUtil" about="About Us" mode={mode} changeMode={changeMode} dbMode={dbMode} greyMode={greyMode} gMode={gMode} rMode={rMode} yMode={yMode} skMode={skMode}/>

<div className='container my-3'>
  
  
          
         
        
       
        <Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
         
          <Route path="/" element={<TextForm heading="Enter the Components to analyze" mode={mode} />}>
          
          </Route>
        </Routes>
 
 


</div>
</Router>


   </>
  );
}

export default App;
