import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaMapMarkerAlt, FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const DestinationCard = ({data}) => {
    const { _id, destinationName, country, price, duration, imageUrl } = data;

  return (
    <div className="group bg-white ">
       {/* Image Section */}
       <div className="relative h-64 w-full overflow-hidden rounded-sm">
         <Image
          src={imageUrl}
          alt={destinationName}
          width={1000}
          height={1000}
          quality={100}
          priority
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-1 shadow-sm">
          <span className="text-sm font-bold text-slate-800">4.5</span>
          <FaStar className="text-[12px] text-black" />
        </div>
      </div>

      {/* Details Section */}
      <div className="py-5">
        <div className="flex items-center gap-1.5 text-[13px] mb-1">
          <FaMapMarkerAlt />
          <span>{country}</span>
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">{destinationName}</h3>
          <div className="text-right">
            <p className="text-xl font-bold text-slate-900">${price}</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">/Person</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6 font-medium">
          <FaRegCalendarAlt className="text-slate-400" />
          <span>{duration} Days / {parseInt(duration) - 1} Nights</span>
        </div>

        <Link href={`/destination/${_id}`}>
        <button className="flex items-center gap-1 active:scale-95 transition-all duration-300 text-sky-500 font-bold text-[12px] tracking-[0.15em] hover:text-sky-600 uppercase border-b-2 border-transparent hover:border-sky-500 pb-1">
          Book Now <HiArrowUpRight className="text-lg" />
        </button>
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard
