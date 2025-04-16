// src/components/RepositoryCard.jsx
import React from 'react';

function RepositoryCard({ repo }) {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 border border-gray-700/50 hover:border-pink-500/50 transform hover:-translate-y-1">
      {/* Repository Title */}
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors duration-200"
        >
          {repo.full_name}
        </a>
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
        {repo.description || 'No description available'}
      </p>

      {/* Language and License */}
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm group-hover:bg-pink-500/30 transition-colors duration-300">
            {repo.language}
          </span>
        )}
        {repo.license && repo.license.name && (
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm group-hover:bg-purple-500/30 transition-colors duration-300">
            {repo.license.name}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center space-x-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          <span>{repo.forks_count}</span>
        </div>
      </div>

      {/* Owner Info */}
      <div className="flex items-center mt-4 pt-4 border-t border-gray-700/50 group-hover:border-pink-500/50 transition-colors duration-300">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="w-8 h-8 rounded-full mr-3 ring-2 ring-gray-700 group-hover:ring-pink-500 transition-all duration-300"
        />
        <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{repo.owner.login}</span>
      </div>

      {/* Repository Created Date */}
      <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
        Created on: {new Date(repo.created_at).toLocaleDateString()}
      </div>
    </div>
  );
}

export default RepositoryCard;
