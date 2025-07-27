import React from 'react';

const AppFooter = () => (
  <footer 
    className="mt-16 py-12 backdrop-blur-sm"
    style={{ 
      borderTop: `1px solid var(--border-color)`,
      backgroundColor: 'var(--bg-secondary)'
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            PropertyHub
          </h3>
          <p 
            className="mb-4 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Your trusted partner in finding the perfect property. We connect dreams with reality through premium real estate solutions.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 
            className="font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            {['Properties', 'About Us', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <a 
                  href="#" 
                  className="transition-colors duration-300 hover:text-blue-600"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 
            className="font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact
          </h4>
          <ul className="space-y-2">
            <li style={{ color: 'var(--text-secondary)' }}>
              📧 info@propertyhub.com
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              📞 +1 (555) 123-4567
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              📍 123 Real Estate Ave
            </li>
          </ul>
        </div>
      </div>
      {/* Author and Copyright */}
      <div className="text-center pt-8" style={{ borderTop: `1px solid var(--border-color)` }}>
        <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          Built by FAIZ SHAIKH (<a href="mailto:faizshaikh.temp@email.com" className="underline text-blue-600">faizshaikh.temp@email.com</a>)
        </p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          © 2025 PropertyHub. All rights reserved. Find your perfect home.
        </p>
      </div>
    </div>
  </footer>
);

export default AppFooter; 