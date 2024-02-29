import { useState, useEffect } from 'react';
import ThemeButton from './Components/ThemeButton';
import Card from './Components/Card';
import {ThemeProvider} from './Context/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () =>{
    setThemeMode('dark');
  }

  const lightTheme = () =>{
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme}}>
      <div className=' flex flex-wrap min-h-screen items-center'>
        <div className=' w-full'>
          <div className=' w-full max-w-sm justify-end mb-4 mx-auto flex'>
            <ThemeButton />
          </div>
          <div className=' mx-auto w-full max-w-sm'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
