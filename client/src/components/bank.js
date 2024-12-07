import React from "react";

const Bank = () => {
  const bloodBanks = [
    {
      name: "Mechi Zonal Hospital Blood Bank",
      location: "Bhadrapur, Jhapa",
      phone: "+977-23-520153",
    },
    {
      name: "Birtamod Blood Bank",
      location: "Birtamod, Jhapa",
      phone: "+977-23-540200",
    },
    {
      name: "Central NRCS Blood Bank",
      location: "Soaltee-Mode, Kathmandu",
      phone: "01-4288485",
    },
    {
      name: "Patan Hospital Blood Bank",
      location: "Patan, Lalitpur",
      phone: "01-5522295",
    },
    {
      name: "Pokhara Blood Bank",
      location: "Pokhara, Kaski",
      phone: "061-521091",
    },
    {
      name: "Bharatpur NRCS Regional BTSC",
      location: "Bharatpur, Chitwan",
      phone: "056-520880",
    },
    {
      name: "Biratnagar Blood Bank",
      location: "Rangeli Road, Biratnagar",
      phone: "021-523326",
    },
    {
      name: "Nepalgunj Blood Bank",
      location: "Banke, Nepalgunj",
      phone: "081-520174",
    },
    {
      name: "Dhulikhel Hospital Blood Bank",
      location: "Dhulikhel",
      phone: "011-490497",
    },
    {
      name: "Universal College of Medical Sciences Blood Bank",
      location: "Bhairahawa",
      phone: "071-522896",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 text-black p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl border-b-4 border-black rounded-full  font-bold text-red-600 mb-16 text-center">
          {" "}
          Blood Banks
        </h1>
        <ul className="space-y-4">
          {bloodBanks.map((bank, index) => (
            <li
              key={index}
              className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold ">{bank.name}</h2>
              <p className="text-md ">Location: {bank.location}</p>
              <p className="text-md text-gray-600">Phone: {bank.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bank;
