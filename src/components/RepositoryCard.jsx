// src/components/RepositoryCard.jsx
import React from 'react';

function RepositoryCard({ repo }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
      {/* Repository Title */}
      <h3 className="text-xl font-semibold text-gray-900">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          {repo.full_name}
        </a>
      </h3>

      {/* Description */}
      <p className="text-gray-700 mt-2">{repo.description || 'No description available'}</p>

      {/* Language and License */}
      <div className="mt-2 text-sm text-gray-600">
        {repo.language && (
          <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2">
            {repo.language}
          </span>
        )}
        {repo.license && repo.license.name && (
          <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1">
            License: {repo.license.name}
          </span>
        )}
      </div>

      {/* Stars and Forks */}
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-yellow-500" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.366.216-.799-.029-.728-.475l.686-3.816L1.177 8.304c-.3-.291-.143-.797.282-.866l3.892-.567L6.901.522c.142-.365.509-.365.652 0l2.383 5.349 3.892.567c.425.069.582.575.282.866l-2.393 2.848.686 3.816c.071.446-.362.692-.728.475L8 13.187l-3.612 2.256z"/>
          </svg>
          <span className="ml-1">{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fork text-gray-500" viewBox="0 0 16 16">
            <path d="M9 2a1 1 0 0 1 1 1v3.5h3.5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H10V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H7V3a1 1 0 0 1 1-1h1z"/>
          </svg>
          <span className="ml-1">{repo.forks_count}</span>
        </div>
      </div>

      {/* Owner Info */}
      <div className="flex items-center mt-4">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="w-12 h-12 rounded-full"
        />
        <span className="ml-3 text-gray-800 font-semibold">{repo.owner.login}</span>
      </div>

      {/* Repository Created Date */}
      <div className="mt-4 text-xs text-gray-400">
        <span>Created on: {new Date(repo.created_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default RepositoryCard;
