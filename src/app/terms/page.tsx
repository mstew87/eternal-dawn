export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before joining our community. By participating, you agree to follow these guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          
          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Acceptance of Terms</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                By accessing or using Eternal Dawn community services, including our Discord server, website, and gaming activities, you agree to be bound by these Terms of Service and our community guidelines.
              </p>
              <p className="text-gray-300">
                If you do not agree to these terms, please do not join or participate in our community.
              </p>
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Community Guidelines</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                Our community follows these core principles:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Respect:</strong> Treat all members with kindness and respect</li>
                <li><strong>Inclusivity:</strong> Welcome players of all backgrounds and skill levels</li>
                <li><strong>No Harassment:</strong> Zero tolerance for bullying, discrimination, or harassment</li>
                <li><strong>Appropriate Content:</strong> Keep discussions and content appropriate for all ages</li>
                <li><strong>Fair Play:</strong> Maintain integrity in all gaming activities</li>
                <li><strong>Help Others:</strong> Support fellow community members when possible</li>
              </ul>
            </div>
          </section>

          {/* Discord Community Guidelines */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Discord Community Guidelines</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                As our primary communication platform is Discord, all members must also follow the official Discord Community Guidelines and Terms of Service:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>No spam, excessive self-promotion, or disruptive behavior</li>
                <li>No sharing of inappropriate, illegal, or harmful content</li>
                <li>Respect Discord's age requirements and safety guidelines</li>
                <li>Use appropriate usernames and profile pictures</li>
                <li>Follow voice and text channel etiquette</li>
              </ul>
              <p className="text-gray-300 mt-4">
                For complete details, please review the official <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">Discord Community Guidelines</a>.
              </p>
            </div>
          </section>

          {/* Gaming Conduct */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Gaming Conduct</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                When participating in gaming activities with Eternal Dawn:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Play fairly and avoid exploiting game mechanics or bugs</li>
                <li>Be patient with newer or less experienced players</li>
                <li>Communicate constructively during group activities</li>
                <li>Respect loot distribution rules and group decisions</li>
                <li>Report any issues or concerns to community moderators</li>
                <li>Follow game-specific rules and terms of service</li>
              </ul>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Prohibited Activities</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cheating, hacking, or using unauthorized third-party software</li>
                <li>Real money trading (RMT) or selling game items for real currency</li>
                <li>Sharing personal information of other members</li>
                <li>Attempting to recruit members to other communities maliciously</li>
                <li>Creating multiple accounts to circumvent restrictions</li>
                <li>Engaging in any illegal activities</li>
              </ul>
            </div>
          </section>

          {/* Enforcement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Enforcement and Consequences</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                Violations of these terms may result in:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Verbal warnings from moderators</li>
                <li>Temporary restrictions from community activities</li>
                <li>Temporary or permanent Discord server bans</li>
                <li>Removal from gaming groups and events</li>
                <li>Permanent ban from all Eternal Dawn services</li>
              </ul>
              <p className="text-gray-300 mt-4">
                The severity of consequences depends on the nature and frequency of violations. Our moderation team reserves the right to take appropriate action at their discretion.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300">
                Eternal Dawn is a gaming community provided on a volunteer basis. We are not responsible for any losses, damages, or issues that may arise from participating in community activities. Members participate at their own risk and discretion.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Changes to Terms</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300">
                We may update these Terms of Service from time to time to reflect changes in our community or applicable laws. When we do, we will notify members through our Discord server and update the effective date below. Continued participation constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Contact and Appeals</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                If you have questions about these terms or wish to appeal a moderation decision:
              </p>
              <div className="text-gray-300">
                <p className="mb-2"><strong>Discord:</strong> <a href="https://discord.gg/eternaldawnetd" className="text-orange-400 hover:text-orange-300 transition-colors">https://discord.gg/eternaldawnetd</a></p>
                <p className="mb-2"><strong>Contact Moderators:</strong> Use Discord's direct message system</p>
                <p><strong>Appeals:</strong> Submit appeals through our Discord server's designated channels</p>
              </div>
            </div>
          </section>

          {/* Effective Date */}
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-400 mt-2">
              These terms were last updated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
} 