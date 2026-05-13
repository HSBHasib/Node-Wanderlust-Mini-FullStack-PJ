import { auth } from "@/lib/auth";
import NavLinks from "@/reuseableCom/NavLinks";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { MdPerson4 } from "react-icons/md";
import LogoutButton from "./LogoutButton";
import { Avatar } from "@heroui/react";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="container mx-auto absolute top-3 inset-x-0">
      <div className="flex items-center justify-between px-5 py-2 bg-white/90 mx-3 rounded-sm">
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
          {!user ? (
            <>
              <Link className="flex items-end gap-1 hover:underline" href={`/profile`}>
                <MdPerson4 size={22} /> Profile
              </Link>
              <Link className="hover:underline" href={`/login`}>Login</Link>
              <Link className="hover:underline" href={`/signup`}>Sign Up</Link>
            </>
          ) : (
            <>
              <>
                <Avatar className="hover:scale-105 transition-all duration-300">
                    <Avatar.Image className="object-cover" alt={`${user?.name}-ProfileImg`} src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name.charAt(0).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
                <LogoutButton />
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
