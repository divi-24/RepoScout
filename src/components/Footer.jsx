import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="flex justify-center items-center">
        <p className="text-sm">
          Made<span className="text-red-500"></span> by{' '}
          <a
            href="https://www.linkedin.com/in/deepakgupta249/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300"
          >
            Deepak Gupta
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

