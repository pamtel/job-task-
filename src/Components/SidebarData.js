import React from 'react'
import Testimonial from '../images/testimonial.png'

function SidebarData() {
    return (
        <>
            <div className="cursor-pointer">
                <div className="logo"></div>
                    <div className="flex justify-between items-center pt-3 mt-5 trial md:mt-10">
                        <h4 className="pl-5 hover:text-yellow-300 font-semibold md:px-14 text-xs">Trial & Pricing</h4>
                        <div className="hover:text-yellow-300 pr-5 text-gray-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" ></path></svg>
                        </div>
                    </div>
                    <div className="pl-5 py-5">
                        <h4 className="hover:text-yellow-300 pb-5 text-gray-300 md:px-10 text-xs">Payment Method</h4>
                        <p className="hover:text-yellow-300 pb-5 text-gray-300 font-semibold md:px-10">-----</p>
                        <p className="hover:text-yellow-300 pb-5 text-gray-300 md:px-10 text-xs">Get Started...</p>
                </div>
            </div> 

            <div className="flex justify-around px-6 py-6 mt-3 border border-gray-800 mx-16 rounded-md">
                    <img src={Testimonial} alt="pics"/>
                <div className="small-text text-gray-300 opacity-50">
                    <p>Success is not final; failure is not fatal; it is the courage to continue that counts.</p>
                    <p>-Winston Churchill</p>
                </div>
            </div>
        </>
    )
}

export default SidebarData