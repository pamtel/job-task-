import React from 'react'
import img1 from '../images/governance.png'
import img2 from '../images/corporate.png'
import img3 from '../images/contract.png'
import img4 from '../images/investor.png'
import img5 from '../images/dispute.png'
import img6 from '../images/minute.png'
import img7 from '../images/reporting.png'
import img8 from '../images/attendance.png'

function AllModules() {
    return (
        <>
        <div className="grid sm:grid-row-2 md:grid-rows-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-9 pt-2">
            <EachModule>
                <div className="flex justify-around items-center bg-yellow-50 rounded lg:ml-5">
                    <img src={img1} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Governance</span>
                        <span>Portal</span>
                    </div>
                    <div className="bg-yellow-400 rounded-full w-2 h-2 flex justify-center items-center text-white">
                        <span className="smaller-text">i</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img2} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Corporate</span>
                        <span>Universe</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img3} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Contract</span>
                        <span>Domain</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img4} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Investor</span>
                        <span>Relation</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img5} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Dispute</span>
                        <span>Portfolio</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img6} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Minute</span>
                        <span>Book</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img7} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Repoting</span>
                        <span>Tool</span>
                    </div>
                </div>
            </EachModule>

            <EachModule>
                <div className="flex justify-center items-center gap-3">
                    <img src={img8} alt="" className="w-8 h-8"/>
                    <div className="small-text text-gray-400">
                        <span className="block">Attendance</span>
                        <span>Register</span>
                    </div>
                </div>
            </EachModule>
        </div>

        <div className="border-t-2 border-gray-200 w-full mt-4 border-dashed"></div>

        <div className="flex justify-between small-text pt-3 cursor-pointer">
            <p className="text-red-300">Go Back</p>
            <p className="bg-yellow-400 rounded px-3 py-1 font-semibold">Continue</p>
        </div>
        </>
    )
}

// child component
const EachModule = ({children}) => {
    return (
       <div>
            {children}
       </div>
    )
}

export default AllModules
