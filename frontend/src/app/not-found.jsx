import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Decorative Text (Very Subtle) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[25vw] font-black uppercase tracking-tighter">
          Lost
        </h1>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Large Visual 404 */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1 rounded-full bg-[#00a8cc]/10 text-[#00a8cc] font-bold text-sm uppercase tracking-widest mb-6">
            Error 404
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none mb-6">
            Page Not <span className="text-[#00a8cc]">Found.</span>
          </h2>
          <p className="text-[17px] text-slate-500 max-w-md mb-8">
            The coordinates you've entered lead to uncharted territory. Let's get you back on track to your next adventure.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/" 
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-[#00a8cc] transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link 
              href="/destination" 
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-slate-900 transition-all"
            >
              Browse Destinations
            </Link>
          </div>
        </div>

        {/* Right Side: Travel Stats / Quick Links (Structured Design) */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest border-b border-slate-200 pb-2">
              Popular Base Camps
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Featured Destinations', path: '/destinations' },
                { name: 'My Travel Bookings', path: '/my-bookings' },
                { name: 'Help & Support', path: '/support' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="flex items-center group text-slate-600 hover:text-[#00a8cc] font-medium transition-all"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all text-xl">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}