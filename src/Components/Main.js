import React from 'react'
import Trial from "./Trial";
import Basic from "./Basic";
import Modules from './Modules';
import AllModules from './AllModules';

function Main() {
    return (
        <div className="container mx-auto px-2 md:pr-48">
            <Trial/>
            <Basic/>
            <Modules/>
            <AllModules/>
        </div>
    )
}

export default Main