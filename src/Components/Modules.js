import React from 'react'
import bar from '../images/bar.svg'

function Modules() {
    return (
        <div>
            <div className=" small-text opacity-60 pt-2 font-semibold">
                <h4>Add more users</h4>
                <sup>NGN99,999 per user</sup>
            </div>

            <div className="relative pt-1 small-text">
                <div className="flex items-center justify-between">
                    <div>
                    <span>0</span>
                    </div>
                    <div className="progress-bar">
                    <sub className="text-xs font-semibold inline-block text-blue-500">
                        100
                    </sub>
                    <img src={bar} alt="pics"/>
                    </div>
                    <div className="text-right">
                    <span className="text-xs font-semibold flex">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      <span>100</span>
                    </span>
                    </div>
                </div>
                <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{width:"13%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                </div>

                <div className="flex items-baseline gap-1">
                    <div className="height w-6 bg-gray-400"></div>
                    <h5 className="smaller-text uppercase  text-gray-400">all modules</h5>
                    <div className="height w-10/12 bg-gray-400"></div>
                </div>

        </div>
    )
}

export default Modules
