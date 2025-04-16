import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full px-6 py-4 rounded-xl bg-gray-800/50 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 border border-gray-700/50 group-hover:border-pink-500/50"
                        placeholder="Search repositories..."
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-4 text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Search;
