import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const Journey = () => {
  return (
    <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: "url('/assets/CTA.png')",
        }} 
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Ready To Start Your Journey?
        </h2>
        
        <p className="text-lg md:text-lg text-gray-200 mb-8 font-light">
          Join thousands of travelers who have discovered the world with us
        </p>
        
        <Link 
          href="/bookings" 
          className="inline-flex items-center gap-3 text-sm bg-white text-black font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition-all duration-300 group"
        >
          BOOK YOUR TRIP TODAY 
          <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
};

export default Journey;

