// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
//it is a hook to  manage the  state from the react

function App() {
  const[code,setCode] = useState('');
  const[output,setOutput] = useState('');
  // console.log(code);

  const handleSubmit = async()=>{
    const payload = {
      language:'cpp',
      code
    }


    try {
      const {data} = await axios.post('http://localhost:5000/run',payload);
      console.log(data);
      setOutput(data.output);

    }catch(error){
      console.log(error.message);
    }
  }
  return (
    <>
      <div className='container'>
        <h1>CODE-AVITA</h1>

        <select className = 'select-box'>
          <option value = 'cpp'>C++</option>
          <option value = 'c'>C</option>
          <option value = 'py'>Python</option>
          <option value = 'java'>Java</option>
          <option value = 'js'>Javascript</option>
        </select>


        {/* <input type="text" /> */}
        <textarea rows='20' cols='65' className='textarea'
        value = {code} 
        onChange = {(e)=>{setCode(e.target.value);}}
        //event listenerfor change

        ></textarea>

        <br/>
        <button onClick={handleSubmit}>Submit</button>
        {output && 
        <div className='Outputbox'>
          <p>{output}</p></div>
        }
        </div>
    </>
  );
}

export default App;
