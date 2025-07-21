import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Eternal Dawn</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the ultimate gaming community where legends are forged
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary">
              Join Our Guild
            </Link>
            <Link href="/forum" className="btn-secondary">
              Visit Forum
            </Link>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Our Chapters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Diablo IV', icon: '⚔️', description: 'Conquer Sanctuary together' },
              { name: 'Path of Exile', icon: '🗡️', description: 'Master the skill tree' },
              { name: 'Path of Exile 2', icon: '⚡', description: 'Next generation ARPG' },
              { name: 'Last Epoch', icon: '⏰', description: 'Time-bending adventures' }
            ].map((game) => (
              <div key={game.name} className="card text-center">
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                <p className="text-gray-400">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Community Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-400">Discord Activity</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">4</div>
              <div className="text-gray-400">Supported Games</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Why Choose Eternal Dawn?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Active Community',
                description: 'Join hundreds of passionate gamers in our Discord server',
                icon: '👥'
              },
              {
                title: 'Organized Events',
                description: 'Regular tournaments, raids, and community events',
                icon: '🏆'
              },
              {
                title: 'Expert Guidance',
                description: 'Learn from experienced players and build strategies',
                icon: '🎯'
              },
              {
                title: 'Cross-Game Support',
                description: 'Play multiple ARPGs with the same community',
                icon: '🎮'
              },
              {
                title: 'Friendly Environment',
                description: 'Inclusive community where everyone is welcome',
                icon: '🤝'
              },
              {
                title: 'Regular Updates',
                description: 'Stay informed about game updates and meta changes',
                icon: '📢'
              }
            ].map((feature) => (
              <div key={feature.title} className="card">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Join Eternal Dawn?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of our gaming community today and start your journey with fellow players
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary">
              Apply Now
            </Link>
            <Link href="/forum" className="btn-secondary">
              Explore Forum
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
