import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';
import Filters from './components/Filters';
import RepositoryCard from './components/RepositoryCard';

const API_URL = 'https://api.github.com/search/repositories';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState('');
  const [page, setPage] = useState(1);  // Track the current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  const itemsPerPage = 12; // Number of items per page

  // Function to fetch repositories based on the search query, filters, and page
  const fetchRepositories = async (searchQuery, pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}?q=${searchQuery}&page=${pageNum}&per_page=${itemsPerPage}`, {
        headers: {
          Authorization: Bearer "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",
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRepositories(data.items || []);
      setTotalPages(Math.ceil(data.total_count / itemsPerPage)); // Set total pages
      setError(null);
    } catch (error) {
      setError('There has been a problem with your fetch operation: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to update repositories whenever query, filters, or page changes
  useEffect(() => {
    if (query || filters) {
      const combinedQuery = `${query} ${filters}`.trim(); // Combine search query and filters
      fetchRepositories(combinedQuery, page);
    } else {
      setRepositories([]);
    }
  }, [query, filters, page]); // Trigger whenever query, filters, or page change

  // Handle search input changes
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery); // Update query state
    setPage(1); // Reset to the first page when search query changes
  };

  // Handle filter changes
  const handleFilter = (filterQuery) => {
    setFilters(filterQuery); // Update filters state
    setPage(1); // Reset to the first page when filters change
  };

  // Handle pagination changes
  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="App bg-primary flex flex-col min-h-screen">
      <Navbar />
      <header className="App-header flex items-center justify-center bg-primary">
        <h1
          className="text-9xl font-bold text-primary-content mt-10 mb-10 animate-title text-pink-500"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {Array.from("Repo  Scout").map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 via-pink-500 to-green-500"
            >
              {char}
            </span>
          ))}
        </h1>

      </header>
      <div className="flex justify-center p-4">
        <Search onSearch={handleSearch} /> 
      </div>
      <Filters onFilter={handleFilter} /> 
      <div className="p-6 flex-grow">
        {loading && <p className="text-center text-white">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.length > 0 ? (
            repositories.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))
          ) : (
            !loading && !error && <p className="text-center text-black ">No repositories found.</p>
          )}
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center space-x-4 py-4">
        <button
          onClick={handlePreviousPage}
          className="bg-pink-600 text-white px-4 py-2 rounded-md"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-black">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="bg-pink-600 text-white px-4 py-2 rounded-md"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
