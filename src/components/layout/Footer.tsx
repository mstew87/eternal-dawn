import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-orange-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                  ETD
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <span className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors duration-200">
                Eternal Dawn
              </span>
            </Link>
            <p className="text-gray-300 max-w-md leading-relaxed">
              A passionate gaming community focused on multiple games including Diablo IV, Path of Exile, and more. 
              Join us in our journey through the eternal dawn of gaming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us', key: 'about' },
                { href: '/apply', label: 'Join Now', key: 'join' },
                { href: '/coming-soon', label: 'Members', key: 'members' }
              ].map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-all duration-200 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Community</h3>
            <ul className="space-y-3">
              {[
                { href: 'https://discord.gg/eternaldawnetd', label: 'Discord', icon: '💬' },
                { href: 'https://www.youtube.com/@EternalDawnETD', label: 'YouTube', icon: '📺' }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-all duration-200 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="mr-2">{link.icon}</span>
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Eternal Dawn. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {[
              { href: '/coming-soon', label: 'Privacy Policy', key: 'privacy' },
              { href: '/coming-soon', label: 'Terms of Service', key: 'terms' }
            ].map((link) => (
                              <Link 
                  key={link.key}
                  href={link.href} 
                  className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-200 hover:scale-105"
                >
                  {link.label}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 