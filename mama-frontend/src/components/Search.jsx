import React from 'react'
const axios = require('axios')

const Search = () => {
    const Search = (search) => {
        
    }
    return (
    <div className="w-72 relative bg-white overflow-hidden rounded-full text-green-900 tracking-wider  flex items-center justify-between sm:w-max shadow-lg">
        <input type="text" className="py-2 px-3 w-72 bg-green-50 outline-none focus:outline-none focus:bg-white font-semibold tracking-wider appearance-none" placeholder="Cari" />
        <div className="px-4 py-2 bg-green-400 h-full grid place-items-center  shadow-2xl text-green-50 font-bold hover:bg-green-500 hover:text-green-200 cursor-pointer ml-1">Cari</div>
    </div>
    )
}

export default Search
