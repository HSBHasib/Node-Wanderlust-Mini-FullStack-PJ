"use client";

import React from "react";
import { Button, Modal, Surface, TextField } from "@heroui/react";
import { BiEditAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProfileFormModal = ({ userName, userImage }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userName || "",
      image: userImage || "",
    }
  });

  const formHandaler = async (data) => {
    try {
      const { name, image } = data;
      await authClient.updateUser({
        name,
        image,
      });

      // Success
      toast.success("Profile updated!", {
        position: "top-center",
        autoClose: 600,
      });
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <Modal>
      <Button className="hover:rounded-sm rounded-sm bg-transparent text-white">
        <BiEditAlt /> Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-sm">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-[#15A1BF]/30">
                <BiEditAlt size={20} />
              </Modal.Icon>
              <Modal.Heading>Update Your Info</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                <form
                  onSubmit={handleSubmit(formHandaler)}
                  className="space-y-5"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <FaUser className="text-sm" />
                      </span>
                      <input
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#15A1BF] focus:bg-white transition"
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {
                          required: true,
                          pattern: /^[a-zA-Z\s]{3,25}$/,
                        })}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 px-2 text-xs pt-0.5">
                        Only letters allowed (min. 3 chars)
                      </p>
                    )}
                  </div>

                  {/* Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Image URL
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <FaUser className="text-sm" />
                      </span>
                      <input
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#15A1BF] focus:bg-white transition"
                        type="url"
                        placeholder="Enter your image url"
                        {...register("image")}
                      />
                    </div>
                    {errors.image && (
                      <p className="text-red-500 px-2 text-xs pt-0.5">
                        Enter a valid image url
                      </p>
                    )}
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-start items-center gap-3">
                    <Button
                      slot="close"
                      type="button"
                      className="active:scale-95 transition-all duration-500 bg-[#15A1BF] hover:bg-[#118098] text-white font-medium px-6 py-2 rounded-lg text-sm mt-2"
                    >
                      Cencel
                    </Button>
                    <Button
                      slot="close"
                      type="submit"
                      className="active:scale-95 transition-all duration-500 bg-[#15A1BF] hover:bg-[#118098] text-white font-medium px-6 py-2 rounded-lg text-sm mt-2"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ProfileFormModal;
