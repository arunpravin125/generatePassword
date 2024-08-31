// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [length,setLength] = useState()
//   const [lower,setlower]=useState(false)
//   const [upper,setUpper]=useState(false)
//   const [Symbols,setSymbol]=useState(false)
//   const [numeric,setnumeric]=useState(false)
//   const [generatedValue,setGeneratedValue]=useState()

// const generate = ()=>{
//   let generateValue = ""
//   if(upper) generateValue= generateValue+"QWERTYUIOPASDFGHJKLZXCVBNM"
//   if(lower) generateValue=generateValue+"qwertyuiopasdfghjklzxcvbnm"
//   if(Symbols) generateValue = generateValue+"!@#$%^&*()_+=-[]{}\|<>?;''"
//   if(numeric) generateValue = generateValue+"1234567890"

//  let generatepassword = ""

// for(let i=0;i<length;i++){
//      let random = Math.floor(Math.random()*generateValue.length)
//      generatepassword =generatepassword+ generateValue[random]
    
//  }
//  console.log(generatepassword)
//  setGeneratedValue(generatepassword)

// }
// const copyPassword = () =>{
//   alert(`Password on clipboard : ${generatedValue}`);
//   navigator.clipboard.writeText(generatedValue)
// }
//   return (
//     <>
//     <div>
//       <div>
//         <h2>Generate Password</h2>
//       </div>
//       <input value={length} type='number' onChange={(e)=>setLength(e.target.value)} ></input>
//       <div>
//         <span>Upper</span>
//         <input type="checkbox" checked={upper} onChange={(e)=>setUpper(e.target.checked)} ></input>
//       </div>
//       <div>
//         <span>Lower</span>
//         <input type="checkbox" checked={lower} onChange={(e)=>setlower(e.target.checked)} ></input>
//       </div>
//       <div>
//         <span>Symbols</span>
//         <input type="checkbox" checked={Symbols} onChange={(e)=>setSymbol(e.target.checked)} ></input>
//       </div>
//       <div>
//         <span>numeric</span>
//         <input type="checkbox" checked={numeric} onChange={(e)=>setnumeric(e.target.checked)} ></input>
//       </div>
//       <div>
//         <button onClick={generate} >generatepassword</button>
//       </div>
//       <div>
//         <input value={generatedValue} onChange={(e)=>setGeneratedValue} ></input>
//         <button onClick={copyPassword} >Copy</button>
//       </div>
//     </div>
   
  
//     </>
//   )
// }

// export default App
import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [generatedValue, setGeneratedValue] = useState('');

  const generate = () => {
    let generateValue = '';
    if (upper) generateValue += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    if (lower) generateValue += 'qwertyuiopasdfghjklzxcvbnm';
    if (symbols) generateValue += '!@#$%^&*()_+=-[]{}\\|<>?;\'\'';
    if (numeric) generateValue += '1234567890';

    let generatePassword = '';

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * generateValue.length);
      generatePassword += generateValue[random];
    }
    setGeneratedValue(generatePassword);
  };

  const copyPassword = () => {
    alert(`Password copied to clipboard: ${generatedValue}`);
    navigator.clipboard.writeText(generatedValue);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Password Generator</h2>
      </div>
      <div className="input-group">
        <label>Password Length</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="4"
          max="20"
        />
      </div>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)} />
          Uppercase
        </label>
        <label>
          <input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} />
          Lowercase
        </label>
        <label>
          <input type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
          Symbols
        </label>
        <label>
          <input type="checkbox" checked={numeric} onChange={(e) => setNumeric(e.target.checked)} />
          Numbers
        </label>
      </div>
      <div className="button-group">
        <button onClick={generate} className="generate-button">
          Generate Password
        </button>
      </div>
      <div className="result-group">
        <input
          type="text"
          value={generatedValue}
          readOnly
        />
        <button onClick={copyPassword} className="copy-button">
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;
