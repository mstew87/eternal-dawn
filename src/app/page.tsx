'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [centerGame, setCenterGame] = useState<string | null>(null)

  const games = [
    { 
      name: 'Diablo IV', 
      description: 'Conquer Sanctuary together',
      gif: '/D4_Panel.gif'
    },
    { 
      name: 'Path of Exile', 
      description: 'Master the skill tree',
      gif: null
    },
    { 
      name: 'Path of Exile 2', 
      description: 'Next generation ARPG',
      gif: '/PoE2_Panel.gif'
    },
    { 
      name: 'Last Epoch', 
      description: 'Time-bending adventures',
      gif: '/LastEpoch_Panel.gif'
    },
    { 
      name: 'Dune Awakening', 
      description: 'Survive the harsh desert world',
      gif: null
    },
    { 
      name: 'Division 2', 
      description: 'Rebuild Washington DC together',
      gif: null
    },
    { 
      name: 'Destiny 2', 
      description: 'Become legend in the solar system',
      gif: null
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const gameTiles = document.querySelectorAll('[data-game]')
      const viewportCenter = window.innerHeight / 2
      let closestGame = null
      let closestDistance = Infinity

      gameTiles.forEach((tile) => {
        const rect = tile.getBoundingClientRect()
        const tileCenter = rect.top + rect.height / 2
        const distance = Math.abs(tileCenter - viewportCenter)
        
        if (distance < closestDistance) {
          closestDistance = distance
          closestGame = tile.getAttribute('data-game')
        }
      })

      setCenterGame(closestGame)
    }

    // Initial check
    handleScroll()
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 max-w-4xl mx-auto">
            <Image
              src="/splashgraphic.gif"
              alt="Eternal Dawn Gaming Community"
              width={800}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <div 
                key={game.name} 
                data-game={game.name}
                className="card text-center group transition-all duration-300 animate-fade-in relative overflow-hidden sm:h-auto h-[200px] flex flex-col justify-center items-center p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* GIF overlay that appears when tile is closest to center */}
                {game.gif && (
                  <div className={`absolute inset-0 z-10 bg-black/80 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    centerGame === game.name ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Image
                      src={game.gif}
                      alt={`${game.name} Preview`}
                      width={300}
                      height={200}
                      className="w-full h-full object-contain sm:w-[300px] sm:h-[200px]"
                    />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-3 game-title group-hover:scale-105 transition-all duration-300">
                  {game.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {game.description}
                </p>
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
              <div className="text-4xl font-bold text-orange-500 mb-2">7</div>
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
                description: 'Play multiple games with the same community',
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
              Join Now
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
