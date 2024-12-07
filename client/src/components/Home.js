import React from "react";
import { useNavigate } from "react-router-dom";
import cam5 from "../assets/cam5.webp";
import cam6 from "../assets/cam6.webp";

import cam7 from "../assets/cam7.webp";



const Home = () => {
  const navigate =useNavigate();
  return (
    <div className="  bg-slate-200 text-black">
       <div className=" text-sm flex items-end justify-end gap-4  font-bold h-8">
            <div onClick={()=>navigate("/campaigns")} className="cursor-pointer"> Donation Campaigns</div>
            <div onClick={()=>navigate("/campaigns")} className="cursor-pointer">Ongoing Campaigns</div>
            <div onClick={()=>navigate("/campaigns")} className="cursor-pointer">
             Upcoming Campaigns
            </div>
            <div></div>
          </div>
      <div className="  flex-1  justify-items-center   ">
     
        <div className="flex items-center p-10">
        
          <section className=" flex-1 items-end space-x-2  ml-6 mr-6  ">
            <h1 className=" lg:text-6xl font-bold  text-[#D72638] ">
              {" "}
              Donate Blood
            </h1>
            <p className="text-xl font-bold">- Give the Gift of Life </p>
          </section>
          <img
            src="https://imgs.search.brave.com/dAQNwl0N7deGF_jcWEBZoSVCiBaK0MtMEAKwPtfKO8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIxLzQ3Lzk5/LzM2MF9GXzIyMTQ3/OTk0Nl8yeVVtV1Jt/VlBCa2E2ZDR6Y1hi/QmhKYlJyYThXY3BR/Vi5qcGc"
            alt="blooddonation"
            className="rounded-full w-full"
          />
        </div>
        <div className="flex justify justify-evenly items-center gap-6">
          <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-amber-200 mb-10">
            <div className="pb-6  p-6 text-3xl font-bold  text-[#ff2323] bg-gray-100 border-4  rounded-3xl ">
              Verified Donors
              <p className="flex text-justify justify-center">0</p>
            </div>
          </div>
          <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-amber-200 mb-10 ">
            <div className="  p-6 text-3xl font-bold  text-[#ff2323] bg-gray-100 border-4  rounded-3xl ">
              Active Donors
              <p className="flex text-justify justify-center">0</p>
            </div>
          </div>
          <div className="p-4 rounded-3xl  bg-gradient-to-tr from-stone-400 via-grey-200 to-amber-200 mb-10">
            <div className="pb-6  p-6 text-3xl font-bold  text-[#ff2323] bg-gray-100 border-4 rounded-3xl ">
              Total Donations
              <p className="flex text-justify justify-center">0</p>
            </div>
          </div>
          <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-amber-200 mb-10 ">
            <div className="  p-6 text-3xl font-bold  text-[#ff2323] bg-gray-100 border-4  rounded-3xl ">
              Lives Saved
              <p className="flex text-justify justify-center">0</p>
            </div>
          </div>
        </div>

      <h1 className="text-6xl text-red-700 font-extrabold  pb-16 font-serif">Our Mission</h1>
      <div className="flex flex-col items-start bg-gray-100 p-20  rounded-lg">
  <div className="bg-red-700 text-white text-xl font-semibold p-4 rounded-tl-lg rounded-br-lg mb-4  self-start">
    <span className="block text-sm font-bold">Ankit</span>
    <p> We aim to save lives by bridging the gap between donors and those in
    need.</p>
  </div>
  <div className="bg-white text-xl font-semibold p-4 rounded-tr-lg rounded-bl-lg mb-4 w-fit self-end">
    <span className="block text-sm font-bold">Sujan</span>
    <p> A platform that connects between blood donors and those in need of
    blood.</p>
  </div>
  <div className="bg-red-700 text-white text-xl font-semibold p-4 rounded-tl-lg rounded-br-lg mb-4 w-fit self-start">
    <span className="block text-sm font-bold">Ankit</span>
    <p> Be it a donor looking to save a life or a patient in need of blood,
    we connect both communities effortlessly.</p>
  </div>
  <div className="bg-white  text-xl font-semibold p-4 rounded-tr-lg rounded-bl-lg mb-4 w-fit self-end">
    <span className="block text-sm font-bold">Sujan</span>
    <p>It aims to make blood donation much easier, faster, and accessible
    on one platform.</p>
  </div>
  <div className="bg-red-700 text-white text-xl font-semibold p-4 rounded-tl-lg rounded-br-lg mb-4 w-fit self-start">
    <span className="block text-sm font-bold">Ankit</span>
    <p>It's about how technology is revolutionizing blood donation platforms!</p>
  </div>
</div>

<div className="  mt-10 border-red-800 border-b-4 p-4 rounded-full text-center  text-[#333333] mb-10 ">
        <p className="font-extrabold  text-4xl">
          Why Was HealthNet Developed?{" "}
        </p>
      </div>


      <div className="relative w-full text-red-600 h-screen   flex justify-center items-center rounded-sm">
        <div className="relative w-[400px]   h-[400px] text-2xl">
          <div className="absolute top-0  left-1/2 -translate-x-1/2 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[200px] border-b-white flex justify-center items-center">
            <div className="absolute -translate-y-10  font-bold">
              Encouraging Health & Fit Life
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[200px] border-t-transparent border-b-[200px] border-b-transparent border-r-[200px] border-r-white flex justify-center items-center">
            <div className="absolute -translate-x-10  font-bold rotate-90">
              Life-Saving Technology
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[200px] border-t-transparent border-b-[200px] border-b-transparent border-l-[200px] border-l-white flex justify-center items-center">
            <div className="absolute translate-x-10  font-bold -rotate-90">
              Humanity preserving approach
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-t-[200px] border-t-white flex justify-center items-center">
            <div className="absolute translate-y-10  font-bold">
              Making life-saving connections
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          What Can You Donate?
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Make a difference in people's lives through different ways of
          contributing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam5} alt="Donate Blood" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Donate Blood
            </h3>
            <p className="text-gray-600 text-center">
              A single pint of blood can save up to three lives. Your generosity
              can create countless smiles and hope.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam6} alt="Volunteering" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Volunteering
            </h3>
            <p className="text-gray-600 text-center">
              Be the driving force in positive change. Give your time and skills
              to make a lasting impact in others' lives.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam7} alt="Funding" />
            <h3 className="text-xl font-semibold  text-red-600 mb-2">
              Funding
            </h3>
            <p className="text-gray-600 text-center">
              Every contribution counts. Your support can empower essential
              programs and reach those in need.
            </p>
          </div>
        </div>
      </div>


      <div>
        <div className="bg-gray-50 py-12 px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
            {" "}
            What people say about us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-4">
                "Donating blood was the most rewarding experience of my life. I
                feel proud to have made a difference."
              </p>
              <h3 className="font-semibold text-gray-800">Ayush</h3>
              <p className="text-gray-500">A+ Blood Donor</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-4">
                "I volunteered at the blood donation camp and it was
                heartwarming to see so many people willing to help. It truly
                changes lives."
              </p>
              <h3 className="font-semibold text-gray-800">Sushant.</h3>
              <p className="text-gray-500">Volunteer</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-4">
                "Thank you for the opportunity to contribute. It’s a small step
                for me, but a big leap for those in need."
              </p>
              <h3 className="font-semibold text-gray-800">Somnath</h3>
              <p className="text-gray-500">Blood Receptor</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <p className="text-gray-600 italic mb-4">
                "Good Inutiative. hope to work with you guys."
              </p>
              <h3 className="font-semibold text-gray-800">Ssushil</h3>
              <p className="text-gray-500">Redcross MD</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center mt-10 p-4">
        <h2 className="lg:text-5xl px-2 text-slate-700 font-bold text-center">
          Join Us in Making a Difference
        </h2>
        <button
          onClick={"/bank"}
          className="bg-red-700 m-8  text-slate-200 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Find the nearest Blood Branch.
        </button>
        
      </div>
    </div>
    </div>
  );
};
export default Home;
