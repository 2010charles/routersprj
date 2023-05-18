import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
   
     <BrowserRouter>
     <Header/> 
        <Routes>
        <Route path="/" element= {<Home />} />
         <Route path = "/about" element = {<About/>}/>
         <Route path = "/blog" element = {<Blog/>}/>
         <Route path = "/notfound" element = {<NotFound/>}/>
        </Routes>
           <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
