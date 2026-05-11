import { getDestinationById } from "@/app/lib/FrontendData";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import { FaCheck, FaMapMarkerAlt, FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import Book from "@/components/Book";


const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const destinationData = await getDestinationById(id);
  
  const {
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    description,
    departureDate,
  } = destinationData;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-10 bg-white">
        <div className="-mt-5 mb-4 flex items-center justify-between">
          <Link href="/destination">
            <div className="text-[#6C696D] flex items-center gap-2 hover:underline">
              <GoArrowLeft size={18} /> Back to Destinations 
            </div>
          </Link>

          <div className="flex items-center gap-3">
             <div className="active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-medium border border-[#6C696D]  rounded-sm text-[15px]">
              <FormModal destinationData={destinationData} />
            </div>
            <DeleteAlertDialog destinationData ={destinationData}/>
          </div>
        </div>

        {/* 1. Hero Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-10">
          <Image
            src={imageUrl}
            alt={destinationName}
            width={900}
            height={800}
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 2. Left Content Section (Col-span-2) */}
          <div className="lg:col-span-2">
            {/* Location & Title */}
            <div className="flex items-center gap-1.5 text-[12px] mb-2">
              <FaMapMarkerAlt className="text-sm" />
              <span className="uppercase tracking-widest font-medium">
                {country}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-3">
              {destinationName}
            </h1>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <FaStar className="text-green-600" />
                <span className="font-bold">4.9</span>
                <span className="text-[#6C696D]">(234 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineCalendarMonth size={17} className="text-[#6C696D]" />
                <span className="font-medium text-sm">
                  {duration} Days / {parseInt(duration) - 1} Nights
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="my-6">
              <h3 className="text-2xl font-semibold ">Overview</h3>
              <p className="text-[#6C696D] leading-relaxed text-[16px]">
                {description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Luxury beachfront accommodation",
                  "Visit Uluwatu Temple at sunset",
                  "Traditional Balinese spa treatment",
                  "Private beach dinner experience",
                  "Sunrise trek to Mount Batur",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className=" bg-green-50 p-1 rounded-full">
                      <FaCheck className="text-[10px] text-green-500" />
                    </div>
                    <span className="text-[#6C696D] text-[15px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Right Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 border border-gray-100 rounded-xl p-8 shadow-xl shadow-slate-100/50">
              <div className="mb-8">
                <p className="text-[#6C696D] text-sm mb-1 font-medium tracking-wide">
                  Starting from
                </p>
                <p className="text-4xl font-semibold text-[#15A1BF]">
                  ${price}
                </p>
                <span className="text-[#6C696D] text-sm">per person</span>
              </div>

              {/* Date Input Box */}
              <div className="relative mb-5 border-b border-gray-200 pb-5">
                <input
                  type="text"
                  defaultValue={departureDate}
                  className="w-full border border-gray-200 py-4 px-5 rounded-lg focus:outline-none focus:border-[#15A1BF] transition font-medium bg-gray-50"
                />
                <FaRegCalendarAlt className="absolute right-5 top-5 text-gray-400" />
              </div>

                {/* Book Button */}
             <Book destinationData={destinationData} />

              {/* Support/Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-end gap-2 text-sm text-[#6C696D]">
                  <FaCheck className="text-green-500" /> Free cancellation up to
                  7 days
                </div>
                <div className="flex items-end gap-2 text-sm text-[#6C696D]">
                  <FaCheck className="text-green-500" /> Travel insurance
                  included
                </div>
                <div className="flex items-end gap-2 text-sm text-[#6C696D]">
                  <FaCheck className="text-green-500" /> 24/7 customer support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
