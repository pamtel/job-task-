import React from 'react'

function Trial() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
                <sub className="uppercase small-text opacity-50 font-bold">hey, terry</sub>
                <p className="font-bold pb-2">Start your <span className="text-yellow-300 italic">30 days</span> Trial</p>
                <p className="smaller-text opacity-50 font-bold">Select your prefered package below</p>
            </div>
            <div className="text-xs mt-2">
                <sub className="uppercase font-semibold text-blue-500">ngn</sub>
                <p className="font-extrabold text-md text-blue-500">1,999,999</p>
                <p className="text-black font-bold opacity-50">Total <small className="smaller-text uppercase">[excludes vat]</small></p>
            </div>
        </div>
    )
}

export default Trial
