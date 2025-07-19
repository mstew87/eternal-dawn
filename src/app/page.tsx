import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-purple/10"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Eternal Dawn</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
            A passionate gaming community focused on ARPGs. Join us in our journey through 
            Diablo IV, Path of Exile, and Last Epoch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary">
              Apply to Guild
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Our Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Diablo IV',
                description: 'The latest installment in the legendary ARPG series',
                color: 'from-red-600 to-red-800'
              },
              {
                name: 'Path of Exile',
                description: 'The definitive action RPG experience',
                color: 'from-orange-600 to-orange-800'
              },
              {
                name: 'Path of Exile 2',
                description: 'The next evolution of the genre',
                color: 'from-yellow-600 to-yellow-800'
              },
              {
                name: 'Last Epoch',
                description: 'Innovative time-traveling ARPG',
                color: 'from-purple-600 to-purple-800'
              }
            ].map((game) => (
              <div key={game.name} className="card group hover:scale-105 transition-transform duration-200">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${game.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{game.name.split(' ')[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{game.name}</h3>
                <p className="text-text-secondary">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Community Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Active Members' },
              { number: '4', label: 'Supported Games' },
              { number: '24/7', label: 'Discord Activity' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Why Join Eternal Dawn?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Active Community',
                description: 'Join a vibrant community of passionate gamers who share your love for ARPGs.',
                icon: '👥'
              },
              {
                title: 'Organized Events',
                description: 'Participate in regular gaming sessions, tournaments, and community events.',
                icon: '🎮'
              },
              {
                title: 'Knowledge Sharing',
                description: 'Learn from experienced players and share your own strategies and builds.',
                icon: '📚'
              },
              {
                title: 'Discord Integration',
                description: 'Stay connected with real-time chat, voice channels, and game integration.',
                icon: '💬'
              },
              {
                title: 'Build Guides',
                description: 'Access comprehensive build guides and theorycrafting discussions.',
                icon: '⚔️'
              },
              {
                title: 'Friendly Environment',
                description: 'A welcoming community where everyone can learn and grow together.',
                icon: '🤝'
              }
            ].map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-primary/10 to-brand-purple/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">
            Ready to Join the Adventure?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Become part of our growing community and experience the best of ARPG gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary">
              Apply Now
            </Link>
            <Link href="/forum" className="btn-secondary">
              Visit Forum
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
