import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire("Logged out!", "You have been logged out.", "success");
          navigate("/login");
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-base-200 p-4">
      <div className="bg-base-100 shadow-xl rounded-2xl w-full max-w-md">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-28 rounded-t-2xl"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-12">
          <img
            src={user?.photoURL || "https://i.ibb.co/2kRkz9m/user.png"}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4 px-6">
          <h2 className="text-2xl font-bold">{user?.displayName || "User"}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Info Section */}
        <div className="mt-6 px-6 space-y-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Name</span>
            <span>{user?.displayName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Email</span>
            <span>{user?.email}</span>
          </div>

          <div className="flex justify-between pb-2">
            <span className="font-semibold">Status</span>
            <span className="text-green-500 font-medium">Active</span>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-6">
          <button
            onClick={handleLogout}
            className="btn btn-error w-full rounded-xl"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;