import React, { useState, useEffect } from 'react';
import { LC,UC,NC,SC } from './data/passchar';

import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [uppercase,setUppercase] = useState(false);
  let [Lowercase,setLowercase] = useState(false);
  let [number,setnumbercase] = useState(false);
  let [symbols,setsymbolscase] = useState(false);
  let [passwordlen,setpasswordlen] = useState(10);
  let [fpass,setPass] = useState('');

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)

  }
  let createPass = ()=>{
    let finalpass=''
    let charSet = ''
    if(uppercase || Lowercase || number || symbols){
      if(uppercase) charSet += UC;
      if(Lowercase) charSet += LC;
      if(number) charSet += NC;
      if(symbols) charSet += SC;

      for(let i=0;i<passwordlen;i++){
        finalpass += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setPass(finalpass);
      
      


    }
    else{
      toast("Please select at least any on of the checkboxes");
    }

  }

  return (
    <>
      <div className="PasswordBox">
        <h2>Password Generator</h2>
        <div className="passwordboxin">
          <input type="text" value={fpass} readOnly />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <label>Password length</label>
          <input type="number" max={20} min={10} value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)} />
        </div>
        <div className="passLength">
          <label>Include uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=>{
            setUppercase(!uppercase)
          }} />
        </div>
        <div className="passLength">
          <label>Include Lowercase letter</label>
          <input type="checkbox" checked={Lowercase} onChange={()=>{
            setLowercase(!Lowercase)
          }}/>
        </div>
        <div className="passLength">
          <label>Include numbers</label>
          <input type="checkbox" checked={number} onChange={()=>{
            setnumbercase(!number)
          }}/>
        </div>
        <div className="passLength">
          <label>Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={()=>{
            setsymbolscase(!symbols)
          }}/>
        </div>
        <button className="btn" onClick={createPass}>

          Generator Password
        </button>
        <ToastContainer 
        hideProgressBar= {false}
        position='top-center'
        />
      </div>
    </>
  );
}

export default App;
