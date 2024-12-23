// app/page.tsx
import Footer from './shared/components/Footer';
import Navbar from '@/app/shared/components/Navbar';
import Hero from '@/app/components/Hero';
import ViewfinderOverlay from './components/ViewFinderOverlay';
import TimeClock from '@/app/components/TimeClock';
import Pricing from './components/Pricing';
import About2 from '@/app/components/About-Test';

// app/page.tsx
export default function Home() {
  return (
    <main className="relative bg-[#0a0a0f]">
      {/* Hero section with gradient and viewfinder */}
      <div className="relative h-screen">
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
        
        {/* Constrain ViewfinderOverlay to hero section */}
        <ViewfinderOverlay />
        <TimeClock />
        
        <div className="relative">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* About section */}
      <About2 />

      <Pricing />

      <Footer />
    </main>
  );
}