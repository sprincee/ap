// app/page.tsx
import GridOverlay from '@/app/components/GridOverlay';
import Navbar from '@/app/shared/components/Navbar';
import Hero from '@/app/components/Hero';
import ViewfinderOverlay from './components/ViewFinderOverlay';
import TimeClock from '@/app/components/TimeClock';
import LogoBrackets from './components/LogoBrackets';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      {/* Your existing gradient background */}
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
      
      {/* Add the grid overlay here */}
      <ViewfinderOverlay />
      <TimeClock />
      
      {/* Your content */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}