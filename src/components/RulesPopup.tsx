'use client';

import { useState } from 'react';

interface RulesPopupProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

export default function RulesPopup({ isOpen, onAccept, onDecline }: RulesPopupProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setHasScrolled(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-orange-500/20">
          <h2 className="text-2xl font-bold gradient-text text-center">
            Welcome to Eternal Dawn!
          </h2>
          <p className="text-gray-300 text-center mt-2">
            Please read and accept our community rules before applying
          </p>
        </div>

        {/* Rules Content */}
        <div 
          className="flex-1 overflow-y-auto p-6 space-y-6"
          onScroll={handleScroll}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Rules for General Members</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Minimum Entry Requirements:</h4>
                <p className="text-gray-300">Age must be 18+. Ability to take a joke (If not taken too far). Maturity is a must.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">2. Use of Slurs:</h4>
                <p className="text-gray-300">Whether it is slang or not, no use of extreme slurs is allowed. Any use of racist or derogatory terms will be treated as racism.</p>
                <p className="text-gray-300 mt-1">Note: Any form of discrimination will be reviewed (e.g., Race, Disability, Gender, Religion, etc.).</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">3. Harassment:</h4>
                <p className="text-gray-300">Do not harass anyone within the server, in-game, or in private messages. This includes any category of unwanted messages.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">4. Relationships:</h4>
                <p className="text-gray-300">Relationships are allowed as long as they are respectful and appropriate.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">5. Cheating:</h4>
                <p className="text-gray-300">No cheating is allowed as long as you are part of this community. This includes:</p>
                <ul className="text-gray-300 ml-4 mt-1 space-y-1">
                  <li>• Using a program that gives an unfair advantage over others in an online game.</li>
                  <li>• Using any physical attachment that gives an unfair advantage.</li>
                  <li>• Abide by your game's Terms of Service.</li>
                  <li>• Engaging in Real Money Trading (RMT) and any trade posts regarding RMT.</li>
                </ul>
                <p className="text-gray-300 mt-2">Note 1: Encouraging/using exploits, not limited to but including RMT with other members is strictly prohibited.</p>
                <p className="text-gray-300">Note 2: Cheating in single-player games is allowed as long as it does not affect any multiplayer aspect.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">6. Advertising and Self-Promotion:</h4>
                <p className="text-gray-300">No advertising is allowed unless given permission. This includes:</p>
                <ul className="text-gray-300 ml-4 mt-1 space-y-1">
                  <li>• Server Invites</li>
                  <li>• Social Media</li>
                  <li>• Businesses</li>
                  <li>• Brands</li>
                </ul>
                <p className="text-gray-300 mt-2">Note: Poaching of members is strictly forbidden and will result in termination from our community. This applies to Rule 11 as well.</p>
                <p className="text-gray-300 mt-1">If you create your own content such as TikToks, YouTube videos, etc., do not PROMOTE it unless you have permission. Example: "Here is my TikTok, please follow, like, etc."</p>
                <p className="text-gray-300 mt-1">Report any encounter of advertising or poaching you see from a member of Eternal Dawn to staff or leadership.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">7. NSFW Content:</h4>
                <p className="text-gray-300">NSFW content of any kind is NOT allowed.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">8. Policy on Retaliation:</h4>
                <p className="text-gray-300">Any form of retaliation against members as a result of disciplinary actions is strictly prohibited. Such behavior is grounds for an immediate ban from our community. We maintain a safe and respectful environment.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">9. Politics & Religion:</h4>
                <p className="text-gray-300">Discussions about Politics or Religion are prohibited.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">10. Guild/clan membership policy:</h4>
                <p className="text-gray-300">You are not required to join our in-game communities to be part of our Discord. However, membership in our Discord is mandatory if you want to be in any of our in-game communities.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">11. Casual Participation:</h4>
                <p className="text-gray-300">All members outside of staff may participate and play in/with other guilds, clans, or communities within our competitive spaces (D4, PoE, LE).</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">12. Streaming:</h4>
                <p className="text-gray-300">To receive the Streamer role, contact staff. This role is for active community members who positively represent Eternal Dawn.</p>
                <p className="text-gray-300 mt-1">Streamers must remain engaged and may not promote or collaborate with other guilds, clans, or gaming communities in the same competitive/social spaces as ETD. Participation in unrelated games or communities is fine.</p>
                <p className="text-gray-300 mt-1">Inactivity, disengagement, or supporting a competing community may result in role removal. If you're unsure whether something crosses the line, please ask staff—we're happy to clarify.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-orange-500/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onDecline}
              className="btn-secondary"
            >
              I Decline
            </button>
            <button
              onClick={onAccept}
              disabled={!hasScrolled}
              className={`btn-primary ${!hasScrolled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              I Accept the Rules
            </button>
          </div>
          {!hasScrolled && (
            <p className="text-center text-gray-400 text-sm mt-2">
              Please scroll to the bottom to accept the rules
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 