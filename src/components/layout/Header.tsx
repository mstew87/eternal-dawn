'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const navItems = [
    { label: 'Home', href: '/', key: 'home' },
    { label: 'About', href: '/about', key: 'about' },
    { label: 'Join Now', href: '/apply', key: 'join' },
    { label: 'Members', href: '/dashboard', key: 'members' },
  ];

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-orange-500/30 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
                              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                ETD
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            <span className="text-white font-semibold group-hover:text-orange-400 transition-colors duration-200">
              Eternal Dawn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="text-gray-400">Loading...</div>
            ) : session ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg mt-2 border border-orange-500/20 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 rounded-md transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="pt-2 border-t border-gray-700">
                {status === 'loading' ? (
                  <div className="px-3 py-2 text-gray-400">Loading...</div>
                ) : session ? (
                  <div className="space-y-1">
                    <Link
                      href="/dashboard"
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 rounded-md transition-all duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-md transition-all duration-200 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 