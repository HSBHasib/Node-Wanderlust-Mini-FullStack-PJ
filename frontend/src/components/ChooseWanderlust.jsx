import React from 'react'
import { ShieldCheck, Map, Headset } from 'lucide-react'; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে


const ChooseWanderlust = () => {
    const features = [
    {
      title: "Safe & Secure",
      description: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
      icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Expert Guides",
      description: "Local experts who bring destinations to life with authentic cultural insights.",
      icon: <Map className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you wherever your journey takes you.",
      icon: <Headset className="w-8 h-8 text-sky-500" />,
    },
  ];
  return (
    <div>
      <section className="bg-[#EDFCFF] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-2">
          Why Choose Wanderlust
        </h2>
        <p className="text-slate-500 mb-12">
          Your trusted partner for exceptional travel experiences.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-start text-left transition-transform hover:scale-105 duration-500"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ChooseWanderlust



