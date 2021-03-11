import React from 'react'
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import './App.css';

function App() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-1">
                <NavBar/>
            </div>
           <div className="col-span-2 mx-auto container px-10 ">
                <Main/>
           </div>
        </div>
    )
}

export default App

 

