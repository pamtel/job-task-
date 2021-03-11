import React from 'react'

function Basic() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="mt-5 shadow-xl px-2 py-3 rounded-sm">
                <sub className="smaller-text text-yellow-300">Starts From</sub>
                <p className="smaller-text uppercase font-semibold ">ngn</p>
                <p className="small-text font-extrabold">5,999,999.99</p>

                <div>
                <p className="font-bold pt-2 text-xs ">Premium</p>
                <sup className="small-text opacity-40">100 Users </sup>
                <sup className="small-text text-yellow-300">*</sup>
                <sup className="small-text opacity-40"> All Modules</sup>
                </div>
            </div>

            <div className="border border-blue-500 px-2 py-2 rounded-md bg-blue-50">
                <div className="text-white bg-green-500 w-4 h-4 rounded-full absolute ml-72 md:ml-24 lg:ml-48 transform  -translate-y-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xs font-bold text-blue-500">Basic</h4>
                <sup className="smaller-text">30 days tralls</sup>
                <sup className="smaller-text"> on our premium app</sup>
                <sup className="smaller-text"> features and features</sup>

                <div>
                    <p className="small-text uppercase">includes <span className="text-blue-500 font-bold">---------</span></p>
                    <p className="small-text"><sup>- 25 Users</sup></p>
                    <p className="small-text"><sup>- All modules & features</sup></p>
                    <p className="small-text"><sup>- Unlimited committees</sup></p>
                    <p className="small-text"><sup>- Unlimited roles creation</sup></p>
                </div>
            </div>
        </div>
    )
}

export default Basic
