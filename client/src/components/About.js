import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate=useNavigate();
  const stats = [
    { label: "Active Donors", value: "2" },
    { label: "Annual Donations", value: "0" },
    { label: "Donation Centers", value: "0" },
    { label: "Lives Saved", value: "0" },
  ];

  return (
    <div className="bg-slate-200">
      <div className=" text-black p-4 ">
        <div className=" max-w-7xl mx-auto  sm:px-6 lg:px-6"></div>
        <div>
          <section className="relative h-[600px] flex items-center">
            <div className="container mx-auto relative z-10  px-6">
              <div className="max-w-2xl">
                <h1 className="lg:text-6xl px-2 text-slate-700 font-bold ">
                  Every Drop Counts
                </h1>
                <p className="text-xl font-sans mb-8">
                  Your blood donation can save up to three lives. Join our
                  mission to make a difference in your community.
                </p>
                <div className="space-x-4">
                  <button
                    onClick={()=>navigate("/guide")}
                    className="bg-red-700 p-2 m-2 text-white hover:bg-white hover:text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg"
                  >
                    Guide for Donation
                  </button>
                  <button
                  onClick={()=>navigate("/ablood")}
                    size="lg"
                    variant="outline"
                    className=" p-2 shadow-slate-500 shadow-xl rounded-2xl "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center border-1 bg-red-900 rounded-full shadow-xl shadow-blue-900"
                  >
                    <div className="text-3xl font-bold text-white mb-2  border-black shadow-2xl p-2">
                      {stat.value}
                    </div>
                    <div className=" text-white font-semibold text-md">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex   items-center">
          <div className="  m-10  flex-1 items-center mb-10 lg:text-6xl px-2 text-[#fc2323]  mt-16 font-extrabold text-center">
            What is HealthNet?
            <p className=" lg:text-2xl  text-black font-bold m-10 text-center font-serif  ">
              HealthNet is an innovative platform devoted to combating blood
              deficiency and thereby enhancing healthcare access within Nepal.
              Our mission is simple yet deep: to create a connected community
              where blood donors, recipients, and volunteers come together to
              save lives and build a stronger, healthier society. In a country
              where the compatibility of blood donors often becomes a matter of
              life and death, HealthNet bridges the critical gap between donors
              and those in need. Our advanced technology and user-centric design
              make blood donation accessible and seamless, fostering a culture
              of support and giving.
            </p>
          </div>
          <img src={logo} alt="logo" className="h-1/2  rounded-full" />
        </div>

        <div className="text-center gap-y-6">
          <h2 className="lg:text-5xl px-2 mt-10 mb-10 text-slate-700 font-bold text-center">
            Meet Our Team
          </h2>
          <div className=" lg:text-2xl font-mono leading-relaxed pr-48 pl-48 mb-16">
            We are a passionate team of students pursuing our educations in the
            field of Information Technology, and our objective is to devise a
            solution for society that will make a difference in people's
            lives.Our team believes in the power of technology to bring a
            positive change to the world, and with HealthNet, we're committed to
            making blood donation smooth and efficient.
          </div>
        </div>

        <div className="flex  justify-around items-center  h-[160px] ">
          <div className="p-20">
            <div className="border-4 border-red-500 p-14 w-1/4 h-1/4 rounded-full"></div>

            <p className=" text-3xl font-bold "> Sujan Mishra</p>
            <div className="rounded-3xl font-bold text-lg p-4 bg-zinc-400">
              {" "}
              UI/UX & Frontend
            </div>
          </div>
          <div className=" p-20  ">
            <div className="border-4 border-red-500 p-14 w-1/4 h-1/4 rounded-full"></div>

            <p className=" text-3xl font-bold "> Ankit Dhakal</p>
            <div className="  text-center rounded-3xl font-bold text-lg p-4 bg-zinc-400">
              Backend
            </div>
          </div>
        </div>
        <div className="flex mt-8 ">
          <p className="font-serif m-12  text-md ">
            {" "}
            A very honorable student of shreeyantra college, alwys on forward on
            each and every thing. Work done by him, can be considered as the
            world finest crafts, and very best friend of mine.
          </p>
          <p className="font-serif  m-12 text-md  ">
            {" "}
            A very honorable student of shreeyantra college, alwys on forward on
            each and every thing. Work done by him, can be considered as the
            world finest crafts, and very best friend of mine.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
