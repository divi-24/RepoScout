import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('');

  const handleApplyFilters = () => {
    const filterQuery = [];
    if (language) filterQuery.push(`language:${language}`);
    if (sort) filterQuery.push(`sort:${sort}`);
    onFilter(filterQuery.join(' ')); // Combine filters and pass to parent
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mx-4 mt-6">
      <h2 className="text-white text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="filter-group">
          <label htmlFor="language" className="block text-sm font-medium text-gray-400 mb-2">
            Language
          </label>
          <input
            type="text"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g., JavaScript"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring focus:ring-pink-500"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-400 mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-gray-400 rounded-lg border border-gray-600 focus:outline-none focus:ring focus:ring-pink-500"
          >
            <option value="">Relevance</option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="updated">Recently Updated</option>
          </select>
        </div>

        <div className="filter-group flex items-end">
          <button
            onClick={handleApplyFilters}
            className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-lg relative overflow-hidden group focus:outline-none focus:ring focus:ring-pink-500 transition-all duration-300 ease-in-out"
          >
            <span className="relative z-10">Apply Filters</span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-gradientShift"></div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Filters;
