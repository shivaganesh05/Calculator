

// import { BsBackspace } from 'react-icons/fa';
import './calculator.css';

import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const clickHandler = (value) => {
    setResult(result.concat(value));
  };
const clearDisplay=()=>{
setResult("");

}

const calculate=()=>{
  setResult(eval(result).toString());
}

const deleteLast =() => {
    if (result =="")
    {
        return;
    }
    const value = result.slice(0,-1);
    setResult(value);
}

  return (
    <div className="calc">
    <div>
      <input id="answer" type="text" value={result} readOnly />
      <div>
        <button className='button' onClick={() => clickHandler('9') }>9 </button>
        <button   className='button' onClick={() => clickHandler('8')}>8</button>
        <button   className='button' onClick={() => clickHandler('7')}>7</button>
        <button  className='button' onClick={() => deleteLast('del')}>Del
        </button>
        {/* <BsBackspace size={30} color="red" /></button> */}
       
        <button  className='button' onClick={() => clickHandler('6')}>6</button>
        <button   className='button' onClick={() => clickHandler('5')}>5</button>
        <button  className='button' onClick={() => clickHandler('4')}>4</button>
        
        <button  className='button' onClick={() => clickHandler('*')}>*</button>
        <button  className='button' onClick={() => clickHandler('3')}>3</button>
        <button  className='button' onClick={() => clickHandler('2')}>2</button>
   
       
        <button  className='button' onClick={() => clickHandler('1')}>1</button>
        <button  className='button' onClick={() => clickHandler('/')}>/</button>
        <button  className='button' onClick={() => clickHandler('0')}>0</button>


       
    
        <button className='button' onClick={() => clickHandler('.')}>.</button>
        <button  className='button' onClick={() => clickHandler('-')}>-</button>
        <button  className='button' onClick={() => clickHandler('+')}>+
        </button>
    
      
        <button  className='button1' onClick={() => clearDisplay('*')}>Clear</button>
        <button className='button1' onClick={() => calculate('%')}>=</button>



       
      </div>
    </div>
    </div>
  );
}

export default Calculator;








