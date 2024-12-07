
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Repo = () => {
    const navigate= useNavigate();
  const bloodGroups = [
    { group: 'A+', available: 20 },
    { group: 'A-', available: 10 },
    { group: 'B+', available: 15 },
    { group: 'B-', available: 8 },
    { group: 'AB+', available: 12 },
    { group: 'AB-', available: 5 },
    { group: 'O+', available: 25 },
    { group: 'O-', available: 7 },
  ];
const bloodRepository = [
    { name: 'Central NRCS Blood Bank', group: 'A+', quantity: 20, location: 'Kathmandu' },
    { name: 'Patan Hospital', group: 'A-', quantity: 10, location: 'Lalitpur' },
    { name: 'Pokhara Blood Bank', group: 'B+', quantity: 15, location: 'Kaski' },
    { name: 'Bharatpur NRCS', group: 'B-', quantity: 8, location: 'Chitwan' },
    { name: 'Mechi Zonal Hospital', group: 'AB+', quantity: 12, location: 'Jhapa' },
    { name: 'Biratnagar Blood Bank', group: 'AB-', quantity: 5, location: 'Morang' },
    { name: 'Nepalgunj Blood Bank', group: 'O+', quantity: 25, location: 'Banke' },
    { name: 'Dhulikhel Hospital', group: 'O-', quantity: 7, location: 'Dhulikhel' },
  ];

  return (
  
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-8">
          Blood Repositary
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodGroups.map((blood, index) => (
            <div
              key={index}
              className="bg-red-50 border-2 border-red-300 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl font-extrabold text-red-600 mb-4">
                {blood.group}
              </div>
              <div
                
              >
                {blood.available} Units
              </div>
              <div className="mt-2 text-sm text-gray-600">
               
              </div>
              <button
              onClick={()=>navigate("/form")}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
              >
                Request Blood
              </button>
            </div>
          ))}
        </div>
      </div>
    


      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-8">Blood Repository</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-red-50">
                <th className="py-2 px-4 border-b text-left text-red-600 font-medium">Name</th>
                <th className="py-2 px-4 border-b text-left text-red-600 font-medium">Blood Group</th>
                <th className="py-2 px-4 border-b text-left text-red-600 font-medium">Quantity</th>
                <th className="py-2 px-4 border-b text-left text-red-600 font-medium">Location</th>
              </tr>
            </thead>
            <tbody>
              {bloodRepository.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-gray-800">{item.name}</td>
                  <td className="py-2 px-4 border-b text-gray-800">{item.group}</td>
                  <td className="py-2 px-4 border-b text-gray-600" >{item.quantity} Units</td>
                  <td className="py-2 px-4 border-b text-gray-600">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
  );
};

export default Repo;
