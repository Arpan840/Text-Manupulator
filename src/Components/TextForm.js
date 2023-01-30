import React, {useState} from 'react'


export default function TextForm(props) {
   function upperclick(){
   
        console.log("function was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    function lowercase()
    {
        let newtext2=text.toLocaleLowerCase();
        setText(newtext2);
    }
    function clrtext()
    {
        let newtext=("");
        setText(newtext);
    }
    function reverse()
    {
        let newtext=text.split(" ").reverse().join(" ");
        setText(newtext);

    }
    const handelOnchange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
       

    }
    const reversealpha=()=>{
        let reversealpha =text.split('').reverse().join('');
        setText(reversealpha)
    }
    function RemoveSpace(){
        let RemoveSpace=text.split(' ').join('');
        setText(RemoveSpace)
    }

    const [text, setText] = useState('');
   
   return (
    <>
    
        
<div className="container " style={{backgroundColor:props.mode==='dark'?'yellow':'white', color:'black'}}>
   <h1>{props.heading} </h1>
  
  <textarea className='form-control'  value={text} placeholder='Enter the Text' onChange={handelOnchange} style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white', cursor:'pointer'}}   id="MyBox" rows="8" ></textarea>

<button className='btn btn-primary my-3 mx-3' onClick={upperclick} >Convert to uppercase</button>
<button className='btn btn-primary mx-3 my-3' onClick={lowercase}>Convert to lowercase</button>
<button className='btn btn-primary mx-3 my-3' onClick={clrtext}>Clear text</button>
<button className='btn btn-primary' onClick={reverse}>reverse</button>
<button className='btn btn-primary mx-3 my-3' onClick={reversealpha}>Reverse Each Alphabets</button>
<button className='btn btn-primary mx-3 my-3' onClick={RemoveSpace}>Remove Extra Space</button>
</div>
<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text Summary</h1>
    <p>{text.split(" ").length-1} words</p>
    <p>{text.split(" ").length*0.008} minutes to read</p>
    
    <p>
       {text.length} Alphabets
    </p>
    <h1>Preview Text</h1>
   <p> {text}</p>

</div>
</>
   
  )
}
