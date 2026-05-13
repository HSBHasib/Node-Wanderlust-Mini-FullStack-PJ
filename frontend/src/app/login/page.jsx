"use client";

import { authClient } from "@/lib/auth-client";
import { Button, InputGroup } from "@heroui/react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast } from "react-toastify";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);


  // Google singnUp
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    const { email, password } = data;
    console.log(data);

    const { data: dets, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    // Success
    if (dets) {
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 600,
        transition: Bounce,
      });
      reset();
    }

    // Error
    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-[16px]">
          Resume your adventure with Wanderlust
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-xl p-8 border border-gray-100 shadow-xl shadow-slate-100/50">
        <form onSubmit={handleSubmit(formHandaler)} className="space-y-5">
          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <FaEnvelope className="text-sm" />
              </span>
              <input
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#15A1BF] focus:bg-white transition"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 px-2 text-xs pt-0.5">
                Enter a valid email address
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <FaLock className="text-sm" />
              </span>
              <input
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#15A1BF] focus:bg-white transition"
                type={isVisible ? "text" : "password"}
                placeholder="Create a password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                })}
              />
              <InputGroup.Suffix className="pr-0 absolute right-2 top-2">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <FaEyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </div>
            {errors.password && (
              <p className="text-red-500 px-2 text-xs pt-0.5">
                Enter a valid password
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="active:scale-95 transition-all duration-500 w-full bg-[#15A1BF] hover:bg-[#118098] text-white font-medium py-3 rounded-lg text-sm mt-2"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-4 items-center my-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-xs text-gray-400 font-normal">
            Or sign up with
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={() => googleSignUp()}
          className="active:scale-95 transition-all duration-500 w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-lg" />
          Sign Up With Google
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#15A1BF] font-medium hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
