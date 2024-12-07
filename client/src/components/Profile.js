import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className=" flex-1 ">
      <div className="min-h-screen flex justify-center items-center bg-slate-200 ">
        <div className="  bg-gradient-to-tr from-slate-300 via-grey-200 to-amber-200 w-4/5 rounded-3xl shadow-lg p-4 flex">
          <div className="w-1/4 flex flex-col items-center border-r border-gray-300 pr-4">
            <img
              src=""

              alt="   Profile "
              className="w-32 h-32 rounded-full border-4 border-purple-600"
            />
            <h1 className="mt-4 text-2xl font-bold"> Profile</h1>
            <h2 className="mt-4 text-lg font-semibold">Ankit D</h2>
            <p className="text-gray-500">ankit.madaxe@gmail.com</p>
            <p className="text-gray-500">Illam-Harkate</p>
            <p className="text-gray-500">2002-02-02</p>

            <div className="flex-col mt-auto p-4 text text-center">
              <p className="">
                <Link to="/">
                <button
              type="submit"
              className="  bg-red-600 text-white  hover:bg-red-800 hover:text-white text-lg font-bold p-2 rounded-lg shadow-lg  "
            >
              Logout
            </button>
                </Link>
              </p>
            </div>
          </div>

          <div className="w-3/4 pl-6">
            <h3 className="text-4xl font-bold mb-6 text-red-600 font-serif">Profile Settings</h3>
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder="Enter address line 1"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder="Enter address line 2"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postcode
                </label>
                <input
                  type="text"
                  placeholder="Enter postcode"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter state"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter email ID"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Education
                </label>
                <input
                  type="text"
                  placeholder="Education"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State/Region
                </label>
                <input
                  type="text"
                  placeholder="State/Region"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </form>
            <button
              type="submit"
              className="mt-6px-6 py-2 rounded-md   bg-red-600 text-white  hover:bg-red-800 hover:text-white focus:outline-none"
            >
              Change Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
