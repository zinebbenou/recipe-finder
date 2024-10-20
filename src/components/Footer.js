import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-8 w-full" style={{ backgroundColor: '#4B8B3B' }}>
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline text-white"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline text-white"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline text-white"
          >
            Instagram
          </a>
        </div>

        <p className="text-sm text-white">
          © 2024 Recipe Finder. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
