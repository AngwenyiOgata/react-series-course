import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault()

    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
      <input
        type='text'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='bg-gray-600 shadow-md p-2 rounded border shadow-gray-600 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 transition-colors duration-200 ease-in-out'
      />
      <button type='submit' className=' text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
