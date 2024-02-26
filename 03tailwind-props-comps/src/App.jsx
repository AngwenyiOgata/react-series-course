import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-md'>Vite with tailwind</h1>

      <Card username='Sarah' profilePhoto='https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <Card profilePhoto='https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <Card profilePhoto='https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />

      <Footer />
    </>
  )
}

export default App
