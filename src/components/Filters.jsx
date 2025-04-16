import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('');

  const handleApplyFilters = () => {
    const filterQuery = [];
    if (language) filterQuery.push(`language:${language}`);
    if (sort) filterQuery.push(`sort:${sort}`);
    onFilter(filterQuery.join(' '));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 group">
          <label htmlFor="language" className="block text-sm font-medium text-gray-300 group-hover:text-pink-400 transition-colors duration-300">
            Language
          </label>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <input
              type="text"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="e.g., JavaScript"
              className="relative w-full px-4 py-2 rounded-lg bg-gray-700/50 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 border border-gray-700/50 group-hover:border-pink-500/50"
            />
          </div>
        </div>

        <div className="space-y-2 group">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-300 group-hover:text-pink-400 transition-colors duration-300">
            Sort By
          </label>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="relative w-full px-4 py-2 rounded-lg bg-gray-700/50 backdrop-blur-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 border border-gray-700/50 group-hover:border-pink-500/50"
            >
              <option value="">Relevance</option>
              <option value="stars">Stars</option>
              <option value="forks">Forks</option>
              <option value="updated">Recently Updated</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
