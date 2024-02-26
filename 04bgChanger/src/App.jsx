/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  /* function changeColor(color) {
    setColor(color)
  } */

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap  justify-center shadow-lg py-2 gap-3 rounded-3xl bg-white px-3 '>
          <button
            onClick={() => setColor('yellowgreen')}
           className=' outline-none px-4 py-1  shadow-lg rounded-full bg-[yellowgreen] text-black'>Yellowgreen</button>
          <button
            onClick={() => setColor('green')}
            className=' outline-none bg-green-600 px-4 py-1  shadow-lg rounded-full text-black'>Green</button>
            <button
            onClick={() => setColor('Aquamarine')}
            className=' outline-none px-4 py-1  shadow-lg rounded-full text-black bg-[Aquamarine]'>Aquamarine</button>
            <button
            onClick={() => setColor('chartreuse')}
           className=' outline-none px-4 py-1  shadow-lg rounded-full text-black' style={{backgroundColor: 'chartreuse'}}>chartreuse</button>
          <button
            onClick={() => setColor('chocolate')}
            className=' outline-none bg-[chocolate] px-4 py-1  shadow-lg rounded-full text-black'>Chocolate</button>
            <button
            onClick={() => setColor('goldenrod')}
            className=' outline-none px-4 py-1  shadow-lg rounded-full text-black bg-[goldenrod]'>Goldenrod</button>
        </div>
      </div>
    </div>
  );
}

export default App;
