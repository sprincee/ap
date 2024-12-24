// app/features/page.tsx
import Footer from '../shared/components/Footer';
import Navbar from '@/app/shared/components/Navbar';

export default function Features() {
  return (
    <main className="relative bg-[#0a0a0f]">
      {/* Hero section with gradient */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(
                  100% 65% at 60% 0%,
                  #2a1854 0%,
                  rgba(26, 20, 54, 0.5) 65%,
                  transparent 100%
                )
              `,
              backgroundSize: '100% 100vh',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        <div className="relative">
          <Navbar />
          {/* Features content will go here */}
          <div className="pt-20">
            {/* Temporary placeholder content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl font-bold text-white mb-4">Features</h1>
              <p className="text-gray-400 text-lg">
                Coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}