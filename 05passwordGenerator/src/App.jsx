/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (isNumberAllowed) str += '0123456789';
    if(isCharAllowed) str += '!@#$%^&*()_-+?';

    for (let i = 1; i < length; i++) {
      const char =  Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, isNumberAllowed, isCharAllowed])

  useEffect(() => {
    generatePassword()

  }, [length, isNumberAllowed, isCharAllowed])

  const copyPassword = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className=' text-white text-center my-3'>
        Password Generator
      </h1>
      <div className='flex mb-4 rounded-lg shadow  overflow-hidden'>
        <input
          type="text"
          value={password}
          className=' outline-none w-full px-3 py-1'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
         className=' outline-none px-3 py-0.5 shrink-0 text-white bg-blue-700'>Copy</button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
          <input
           type="range"
           min={8}
           max={40}
           value={length}
           className=' cursor-pointer'
           onChange={(e) => setLength(e.target.value)}
           name=""
           id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className=' flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            onChange={() => {
              setIsNumberAllowed((prev) => !prev)
            }}
            className=' cursor-pointer'
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className=' flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={() => {
              setIsCharAllowed((prev) => !prev)
            }}
            className=' cursor-pointer'
            name=""
            id=""
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
