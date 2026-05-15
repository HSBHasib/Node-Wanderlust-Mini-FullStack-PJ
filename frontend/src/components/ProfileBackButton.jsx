'use client'

import { useRouter } from "next/navigation";
import React from "react";

const ProfileBackButton = () => {
    const router = useRouter()
  return (
    <button onClick={() => router.back()} className="px-6 py-1.5 bg-[#15A1BF] rounded-md font-semibold active:scale-95 transition-all duration-500 cursor-pointer">
      Back
    </button>
  );
};

export default ProfileBackButton;
