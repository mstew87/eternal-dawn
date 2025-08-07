export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="card p-12">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Coming Soon!
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're working hard to bring you something amazing. This feature is currently under development and will be available soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              Back to Home
            </a>
            <a href="https://discord.gg/eternaldawnetd" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 