import React from "react";
import { Button, Card } from "@heroui/react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ProfileBackButton from "@/components/ProfileBackButton";
import ProfileFormModal from "@/components/ProfileFormModal";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white shadow-xl rounded-xl border border-gray-100">
          <p className="text-slate-600 text-lg mb-4">
            You must be logged in to view this page.
          </p>
          <Button className="bg-[#15A1BF] text-white rounded-lg px-6 font-medium">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-16 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2 tracking-tight">
              My Account
            </h1>
            <p className="text-slate-500 text-base">
              Manage your personal profile information and travel settings.
            </p>
          </div>

          <div>
            <ProfileBackButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <Card className="p-8 bg-white shadow-xl shadow-slate-100/50 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center h-full">
              {/* Devider */}
              <div className="w-full border-t border-slate-200 mb-3"></div>

              <div className="relative group mb-4">
                <div className="w-32 h-32 relative">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="profile-img"
                      width={150}
                      height={150}
                      priority
                      className="w-full h-full text-large border-4 object-cover border-slate-200 shadow-inner rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 border-4 border-slate-200 rounded-full flex items-center justify-center">
                      <FaUser className="text-slate-300 w-12 h-12" />
                    </div>
                  )}
                </div>
                <span className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 tracking-wide mb-1">
                {user.name}
              </h3>
              <p className="text-sm font-medium text-[#15A1BF] bg-[#15A1BF]/10 px-3 py-1 rounded-full inline-block">
                Explorer Member
              </p>

              {/* Devider */}
              <div className="w-full border-t border-slate-200 mt-3"></div>
            </Card>
          </div>

          {/* Right Side User Details */}
          <div className="md:col-span-2">
            <Card className="p-8 md:p-10 bg-white shadow-xl shadow-slate-100/50 rounded-2xl border border-slate-100 space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-1">
                  Personal Details
                </h4>
                <p className="text-sm text-slate-800/70">
                  Your account identity information across Wanderlust.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800/70 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100/80 px-4 py-3 rounded-xl">
                    <FaUser className="text-slate-800/70 text-sm flex-shrink-0" />
                    <span className="text-slate-800 font-medium text-sm truncate">
                      {user.name}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800/70 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100/80 px-4 py-3 rounded-xl">
                    <FaEnvelope className="text-slate-800/70 text-sm flex-shrink-0" />
                    <span className="text-slate-800 font-medium text-sm truncate">
                      {user.email}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800/70 uppercase tracking-wider block">
                    Account Created
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100/80 px-4 py-3 rounded-xl">
                    <FaCalendarAlt className="text-slate-800/70 text-sm flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "May 2026"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800/70 uppercase tracking-wider block">
                    Security Status
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100/80 px-4 py-3 rounded-xl">
                    <FaShieldAlt className="text-green-500 text-sm flex-shrink-0" />
                    <span className="text-green-600 font-semibold text-sm">
                      Verified Account
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 flex justify-end gap-3">
                <Button
                  className="bg-[#15A1BF] hover:bg-[#15A1BF]/90  text-slate-600 font-medium py-2.5 rounded-xl text-sm transition-all"
                >
                  <ProfileFormModal userName={user?.name} userImage={user?.image} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
