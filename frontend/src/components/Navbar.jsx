import NavLinks from "@/reuseableCom/NavLinks";
import Link from "next/link";
import React from "react";
import { MdPerson4 } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="container mx-auto bg-white">

    <div className="flex items-center justify-between px-3 py-3">
      {/* Left Links */}
      <div className="flex items-center gap-5">
        <NavLinks href={`/`}>Home</NavLinks>
        <NavLinks href={`/destination`}>Destinations</NavLinks>
        <NavLinks href={`/my-booking`}>My Bookings</NavLinks>
        <NavLinks href={`/admin`}>Admin</NavLinks>
      </div>

      {/* Logo */}
      <div>
        <h1 className="text-[#15A1BF] font-bold text-[26px]">Wanderlust</h1>
      </div>

      {/* logins, profile, etc */}
      <div className="flex items-center gap-5 font-medium">
        <Link className="flex items-end gap-1" href={`/profile`}><MdPerson4 size={22}/> Profile</Link>
        <Link href={`/login`}>Login</Link>
        <Link href={`/signup`}>Sign Up</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
