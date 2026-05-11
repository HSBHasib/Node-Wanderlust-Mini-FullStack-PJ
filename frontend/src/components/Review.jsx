import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const CustomerReview = () => {
  const reviews = [
    {
      text: '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
      name: "Emily Watson",
      location: "Singapore",
      image: "/assets/person1.png",
    },
    {
      text: '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/assets/person2.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header with Navigation */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            What Travelers Say
          </h2>
          <p className="text-slate-500">
            Real experiences from our happy travelers
          </p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition">
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex bg-white border border-gray-100 p-8 shadow-sm rounded-sm"
          >
            <div className="flex-1 pr-6">
              <p className="text-lg font-medium text-slate-800 leading-relaxed mb-6">
                {review.text}
              </p>
              <div>
                <h4 className="text-sky-500 font-semibold">— {review.name}</h4>
                <p className="text-slate-400 text-sm">{review.location}</p>
              </div>
            </div>
            <div className="w-auto h-full flex-shrink-0">
              <Image
                src={review.image}
                alt={review.name}
                width={600}
                height={600}
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
