export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          
          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <p className="text-gray-300 mb-4">
                When you register for an account or join our community, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Username and email address</li>
                <li>Profile information you choose to share</li>
                <li>Communication preferences</li>
                <li>Gaming preferences and activity</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Communicate with community members</li>
                <li>Improve our community experience</li>
                <li>Organize gaming events and activities</li>
                <li>Ensure community safety and security</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Information Sharing</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>With your explicit consent</li>
                <li>With trusted service providers who assist in operating our community</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Secure data transmission and storage</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Staff training on privacy and security</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of communications</li>
                <li>Data portability where applicable</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                Our community may use third-party services such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Discord for community chat</li>
                <li>Game platform integrations</li>
                <li>Analytics services to improve our community</li>
              </ul>
              <p className="text-gray-300 mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Policy Updates</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. When we do, we will notify community members through our usual communication channels and update the effective date below.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="text-gray-300">
                <p className="mb-2"><strong>Discord:</strong> <a href="https://discord.gg/eternaldawnetd" className="text-orange-400 hover:text-orange-300 transition-colors">https://discord.gg/eternaldawnetd</a></p>
                <p><strong>Community Leaders:</strong> Reach out through our Discord server</p>
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
              This policy was last updated on {new Date().toLocaleDateString('en-US', { 
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