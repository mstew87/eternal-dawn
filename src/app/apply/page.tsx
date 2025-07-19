'use client';

import { useState } from 'react';
import RulesPopup from '@/components/RulesPopup';

export default function ApplyPage() {
  const [showRules, setShowRules] = useState(true);
  const [formData, setFormData] = useState({
    game: '',
    characterName: '',
    characterLevel: '',
    experience: '',
    availability: '',
    whyJoin: '',
    discordUsername: '',
    email: ''
  });

  const games = [
    'Diablo IV',
    'Path of Exile', 
    'Path of Exile 2',
    'Last Epoch'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAcceptRules = () => {
    setShowRules(false);
  };

  const handleDeclineRules = () => {
    // Redirect back to home page
    window.location.href = '/';
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
                Apply to Eternal Dawn
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Join our passionate gaming community and become part of something epic.
              </p>
            </div>
          </section>

          {/* Application Form */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Game Selection */}
                <div>
                  <label htmlFor="game" className="block text-text-primary font-semibold mb-2">
                    Game Applying For *
                  </label>
                  <select
                    id="game"
                    name="game"
                    value={formData.game}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  >
                    <option value="">Select a game</option>
                    {games.map((game) => (
                      <option key={game} value={game}>
                        {game}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Character Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="characterName" className="block text-text-primary font-semibold mb-2">
                      Character Name *
                    </label>
                    <input
                      type="text"
                      id="characterName"
                      name="characterName"
                      value={formData.characterName}
                      onChange={handleChange}
                      required
                      className="input w-full"
                      placeholder="Your character name"
                    />
                  </div>
                  <div>
                    <label htmlFor="characterLevel" className="block text-text-primary font-semibold mb-2">
                      Character Level *
                    </label>
                    <input
                      type="number"
                      id="characterLevel"
                      name="characterLevel"
                      value={formData.characterLevel}
                      onChange={handleChange}
                      required
                      min="1"
                      max="100"
                      className="input w-full"
                      placeholder="Character level"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-text-primary font-semibold mb-2">
                    Gaming Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input w-full"
                    placeholder="Tell us about your gaming experience, builds you've played, achievements, etc."
                  />
                </div>

                {/* Availability */}
                <div>
                  <label htmlFor="availability" className="block text-text-primary font-semibold mb-2">
                    Availability *
                  </label>
                  <textarea
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="input w-full"
                    placeholder="How often do you play? What times are you usually online?"
                  />
                </div>

                {/* Why Join */}
                <div>
                  <label htmlFor="whyJoin" className="block text-text-primary font-semibold mb-2">
                    Why Do You Want to Join Eternal Dawn? *
                  </label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input w-full"
                    placeholder="What interests you about our community? What do you hope to contribute?"
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="discordUsername" className="block text-text-primary font-semibold mb-2">
                      Discord Username *
                    </label>
                    <input
                      type="text"
                      id="discordUsername"
                      name="discordUsername"
                      value={formData.discordUsername}
                      onChange={handleChange}
                      required
                      className="input w-full"
                      placeholder="Your Discord username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Submit Application
                  </button>
                </div>
              </form>

              {/* Information Box */}
              <div className="mt-8 card">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Your application will be reviewed by our leadership team</li>
                  <li>• We'll contact you via Discord within 48-72 hours</li>
                  <li>• If approved, you'll receive an invitation to our Discord server</li>
                  <li>• You'll have a trial period to get to know the community</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
} 