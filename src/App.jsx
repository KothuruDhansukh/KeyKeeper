import { useState } from 'react'
import Navbar from './components/navbar'
import Manager from './components/manager'
import './App.css'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <div className='min-h-[87vh]'>

    </div> */}
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

    <Manager/>
    </div>
    < Footer/>
    </>
  )
}

export default App
