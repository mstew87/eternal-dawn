'use client';

import { useState } from 'react';
import RulesPopup from '@/components/RulesPopup';

export default function ApplyPage() {
  const [showRules, setShowRules] = useState(true);
  const [discordInviteCopied, setDiscordInviteCopied] = useState(false);

  // Discord invite link - replace with your actual Discord server invite
  const discordInviteLink = 'https://discord.gg/eternaldawnetd';

  const handleAcceptRules = () => {
    setShowRules(false);
  };

  const handleDeclineRules = () => {
    // Redirect back to home page
    window.location.href = '/';
  };

  const copyDiscordInvite = async () => {
    try {
      await navigator.clipboard.writeText(discordInviteLink);
      setDiscordInviteCopied(true);
      setTimeout(() => setDiscordInviteCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <RulesPopup 
        isOpen={showRules}
        onAccept={handleAcceptRules}
        onDecline={handleDeclineRules}
      />
      
      {!showRules && (
        <div className="min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
          {/* Hero Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
                Welcome to Eternal Dawn!
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                You've accepted our community rules. Join our Discord server to get started!
              </p>
            </div>
          </section>

          {/* Discord Invite Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="card text-center">
                <div className="text-6xl mb-6">🎮</div>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Join Our Discord Community
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Connect with hundreds of passionate gamers, participate in events, 
                  and become part of the Eternal Dawn family.
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={() => window.open(discordInviteLink, '_blank')}
                    className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3"
                  >
                    <span>💬</span>
                    Join Discord Server
                  </button>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-700 rounded-lg p-3 border border-orange-500/30">
                      <code className="text-orange-400 text-sm break-all">
                        {discordInviteLink}
                      </code>
                    </div>
                    <button
                      onClick={copyDiscordInvite}
                      className="btn-secondary px-4 py-3 whitespace-nowrap"
                    >
                      {discordInviteCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Next Steps Information */}
              <div className="mt-8 card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Join our Discord server using the link above</li>
                  <li>• Introduce yourself in the #introductions channel</li>
                  <li>• Check out our #rules and #announcements channels</li>
                  <li>• Find your game-specific channels and start playing!</li>
                  <li>• Participate in community events and tournaments</li>
                </ul>
              </div>

              {/* Community Features */}
              <div className="mt-8 card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  What You'll Find in Our Discord
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">🎯 Game Channels</h4>
                    <p className="text-sm">Dedicated channels for each of our supported games</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">🎁 Events and Giveaways</h4>
                    <p className="text-sm">Regular community events and exciting giveaways</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">🤝 Community Support</h4>
                    <p className="text-sm">Help with builds, strategies, and game mechanics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">🎮 Voice Channels</h4>
                    <p className="text-sm">Voice channels for group activities and raids</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
} 