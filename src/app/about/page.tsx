export default function AboutPage() {
  const supportedGames = [
    { name: 'Diablo IV', description: 'Action RPG' },
    { name: 'Path of Exile', description: 'Action RPG' },
    { name: 'Path of Exile 2', description: 'Action RPG' },
    { name: 'Last Epoch', description: 'Action RPG' },
    { name: 'Division 2', description: 'Action RPG' },
    { name: 'Destiny 2', description: 'Action MMO' },
    { name: 'Dune: Awakening', description: 'Survival MMO' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Eternal Dawn
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate gaming community focused on multiple games including Diablo IV, Path of Exile, and more. 
              Join us in our journey through the eternal dawn of gaming.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Mission</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Eternal Dawn is dedicated to fostering a welcoming and inclusive gaming community where players can connect, 
              collaborate, and conquer challenges together. We believe in the power of teamwork, friendship, and shared 
              experiences in the world of gaming.
            </p>
          </div>
        </div>

        {/* Supported Games */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Games We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedGames.map((game, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{game.name}</h3>
                  <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm">
                    {game.description}
                  </span>
                </div>
                <p className="text-gray-400">
                  Join our community of {game.name} players and experience the game like never before.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Community Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Inclusivity</h3>
              <p className="text-gray-400">We welcome players of all skill levels and backgrounds.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Respect</h3>
              <p className="text-gray-400">Treating everyone with kindness and respect is our foundation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">Striving for excellence in both gameplay and community building.</p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Become part of our growing community and experience gaming like never before. 
            Connect with fellow players, share strategies, and create lasting friendships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium"
            >
              Apply Now
            </a>
            <a
              href="/login"
              className="px-8 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-orange-500/50 transition-all duration-200 font-medium"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 