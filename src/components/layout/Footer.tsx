import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                ETD
              </div>
              <span className="text-white font-semibold">Eternal Dawn</span>
            </Link>
            <p className="text-gray-300 max-w-md">
              A passionate gaming community focused on ARPGs like Diablo IV, Path of Exile, and Last Epoch. 
              Join us in our journey through the eternal dawn of gaming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Apply to Guild
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.gg/eternaldawn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/eternaldawn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@eternaldawn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Eternal Dawn. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 