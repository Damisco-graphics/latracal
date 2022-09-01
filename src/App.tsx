import React from 'react';
// import logo from './logo.svg';
import {Routes, Route} from "react-router"
import Home from "./pages/Home.jsx"
import Footer from './components/footer'
import './css/App.css'
import NoPage from './pages/Nopage'

function App() {
  return (    
    <div>      
    


     <Routes>
       <Route path ="/" element= {<Home/>} />
       <Route path ="/latracal" element= {<Home/>} />
       <Route path ="*" element= {<NoPage/>} />
     </Routes>
     {Footer()}
    </div>
  );
}

export default App;
