import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa';

const EmptyBooking = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 shadow-xs px-6 text-center bg-white rounded-lg border border-dashed border-slate-200 max-w-4xl mx-auto my-10">
      {/* Icon */}
      <div className="bg-sky-100 p-4 rounded-full mb-3 animate-bounce">
        <FaPlaneDeparture className="text-3xl text-[#15A1BF]" />
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">
        No Bookings Yet!
      </h2>
      <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
        Your travel list is currently empty. Adventure is calling—don't let it wait! 
        Find your next dream destination today.
      </p>

      {/* Call to Action Button */}
      <Link 
        href="/destination" 
        className="bg-[#15A1BF] text-white font-bold py-4 px-10 rounded-sm active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-sky-100"
      >
        Explore Destinations
      </Link>
    </div>
  );
};

export default EmptyBooking;
