import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LIGHT_LOGO = 'https://customer-assets.emergentagent.com/job_a1707d78-faa3-44d5-8163-23df0a418775/artifacts/ms3qlv59_Untitled%20design%20%283%29_X-Design%20%282%29.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Why Markivox', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" data-testid="header-logo" className="flex-shrink-0">
          <img
            src={LIGHT_LOGO}
            alt="Markivox — Where Brands Find Their Voice"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.path) ? 'text-[#6A3DF0]' : 'text-[#1F1F1F] hover:text-[#6A3DF0]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            data-testid="header-cta-btn"
            className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2 text-[#1F1F1F] rounded-lg hover:bg-gray-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-nav" className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`block text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                isActive(link.path)
                  ? 'text-[#6A3DF0] bg-[#F9F7FF]'
                  : 'text-[#1F1F1F] hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block w-full text-center bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-5 py-3 rounded-full text-sm font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
