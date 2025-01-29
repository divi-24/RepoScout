import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery); // Pass the search query to the parent
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-6 py-3 rounded-lg w-96 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out"
                placeholder="Search repositories"
            />
            <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-pink-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out relative overflow-hidden group"
            >
                <span className="relative z-10">Search</span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-green-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-gradientShift"></div>
            </button>


        </form>
    );
};

export default Search;
