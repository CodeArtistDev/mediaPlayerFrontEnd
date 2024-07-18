import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watchhistory' element={<WatchHistory/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
