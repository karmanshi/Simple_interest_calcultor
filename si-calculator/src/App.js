import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [output,setOutput] = useState('')

  const handleReset = () => {
    setOutput('')
    setPrincipal('')
    setRate('')
    setTime('')
  }

  const handleCalculate =()=>{
    if(principal == ''){
      alert ("Please Enter the Principal")
    }
    else if(rate == ''){
      alert('Please Enter the Rate')
    }
    else if(time == ''){
      alert('Please Enter the Time')
    }
    else{
      let total = (parseFloat(principal)* parseFloat(rate) * parseFloat(time))/100

    setOutput(total.toFixed(2))
    }
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 text-xl	font-bold'>Simple Interest</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            value={output}
            onChange={(e) => { setOutput(e.target.value) }}
            className="outline-none w-full h-32 py-2 px-3 text-center text-xl	 font-bold"
            placeholder='₹ Total Simple Interest'
            readOnly
            disabled
          />
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            value={principal}
            onChange={(e) => { setPrincipal(e.target.value) }}
            className="outline-none w-full py-2 px-3"
            placeholder='₹ Prinicpal Amount'
          />
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            value={rate}
            onChange={(e) => { setRate(e.target.value) }}
            className="outline-none w-full py-2 px-3"
            placeholder='Rate of Interest (p.a.)%'
          />
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
            className="outline-none w-full py-2 px-3"
            placeholder='Time Period (Yr)'
          />
        </div>
        <div className=" shadow rounded-lg overflow-hidden mb-4">

          <button type='button'
            className='mx-2  outline-none px-4 py-2 rounded-full text-white bg-blue-700 shadow-lg' onClick={handleCalculate}>Calculate</button>
          <button type="button" className=" text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleReset}>Reset</button>
        </div>




      </div>
    </>
  );
}

export default App;
