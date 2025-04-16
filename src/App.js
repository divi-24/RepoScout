import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Filters from './components/Filters';
import RepositoryCard from './components/RepositoryCard';
import Footer from './components/Footer';

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
      const encodedQuery = encodeURIComponent(searchQuery);
      const url = `${API_URL}?q=${encodedQuery}&page=${pageNum}&per_page=${itemsPerPage}`;
      
      console.log('API URL:', url); // Debug log
      console.log('Token present:', !!process.env.REACT_APP_GITHUB_TOKEN); // Debug log

      const response = await fetch(url, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`GitHub API Error: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      setRepositories(data.items || []);
      setTotalPages(Math.ceil(data.total_count / itemsPerPage));
      setError(null);
    } catch (error) {
      console.error('API Error:', error); // Debug log
      setError(`Error: ${error.message}`);
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
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 animate-gradient-x"></div>
      </div>

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-16 text-center">
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-4 h-4 bg-pink-500/50 rounded-full animate-float"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-purple-500/50 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-blue-500/50 rounded-full animate-float-slow"></div>
          </div>

          {/* Enhanced title with 3D effect */}
          <div className="perspective-1000">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 animate-gradient-x font-bold text-7xl mb-6 tracking-tight transform-gpu hover:scale-105 transition-all duration-500 ease-out">
              <span className="inline-block hover:scale-110 hover:-rotate-6 transition-transform duration-300">R</span>
              <span className="inline-block hover:scale-110 hover:-rotate-3 transition-transform duration-300 delay-75">e</span>
              <span className="inline-block hover:scale-110 hover:rotate-3 transition-transform duration-300 delay-100">p</span>
              <span className="inline-block hover:scale-110 hover:rotate-6 transition-transform duration-300 delay-150">o</span>
              <span className="inline-block transition-transform duration-300 delay-200"> </span>
              <span className="inline-block hover:scale-110 hover:-rotate-6 transition-transform duration-300 delay-300">S</span>
              <span className="inline-block hover:scale-110 hover:-rotate-3 transition-transform duration-300 delay-400">c</span>
              <span className="inline-block hover:scale-110 hover:rotate-3 transition-transform duration-300 delay-500">o</span>
              <span className="inline-block hover:scale-110 hover:rotate-6 transition-transform duration-300 delay-600">u</span>
              <span className="inline-block hover:scale-110 hover:rotate-9 transition-transform duration-300 delay-700">t</span>
            </h1>
          </div>
          
          {/* Enhanced subtitle with glow effect */}
          <p className="text-2xl text-gray-300 mb-12 opacity-0 animate-fade-in-up relative group" 
             style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <span className="relative inline-block group-hover:text-white transition-colors duration-300">
              Discover amazing GitHub repositories with our powerful search tool
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/20 to-blue-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </span>
          </p>

          {/* Enhanced search container with glass effect */}
          <div className="relative max-w-3xl mx-auto opacity-0 animate-fade-in-up transform hover:scale-102 transition-all duration-300" 
               style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur"></div>
            <Search onSearch={handleSearch} />
          </div>

          {/* Enhanced filters with floating effect */}
          <div className="mt-8 opacity-0 animate-fade-in-up transform hover:translate-y-[-2px] transition-all duration-300" 
               style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Filters onFilter={handleFilter} />
          </div>
        </header>

        {/* Enhanced error message */}
        {error && (
          <div className="container mx-auto px-4 mb-8">
            <div className="bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-400 px-6 py-4 rounded-xl animate-shake shadow-lg shadow-red-500/5">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          </div>
        )}

        {/* Loading indicator */}
        {loading && (
          <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-pink-500/20 border-b-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
          </div>
        )}

        {/* Enhanced repository grid with staggered animations */}
        {!loading && repositories.length > 0 && (
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {repositories.map((repo, index) => (
              <div key={repo.id} 
                   className="opacity-0 animate-fade-in-up transform hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300" 
                   style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}>
                <RepositoryCard repo={repo} />
              </div>
            ))}
          </div>
        )}

        {/* Enhanced pagination buttons */}
        {repositories.length > 0 && (
          <div className="container mx-auto px-4 py-8 flex justify-center space-x-6">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="glass-button px-8 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 transition-all duration-300"
            >
              ← Previous
            </button>
            <div className="flex items-center px-6 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
              <span className="text-gray-300">Page {page} of {totalPages}</span>
            </div>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages}
              className="glass-button px-8 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
