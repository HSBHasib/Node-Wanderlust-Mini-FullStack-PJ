"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Log Out Successful", {
      position: "top-center",
      autoClose: 600,
    });
  };
  return (
    <Link href={`/`}>
      <button
        className="cursor-pointer bg-[#15A1BF] px-4 py-1.5 rounded-sm hover:bg-[#15A1BF]/90 active:scale-95 transition-all duration-300"
        onClick={() => handleLogOut()}
      >
        LogOut
      </button>
    </Link>
  );
};

export default LogoutButton;
