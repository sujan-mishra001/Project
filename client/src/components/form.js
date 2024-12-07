import React from 'react';
import{useState} from 'react';


const Form=()=> {
  const [requesterData, setRequesterData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    bloodTypeRequired: '',
    
    urgency: '',
    hospitalName: '',
    hospitalAddress: '',
    guardian: '',
    agreeTerms: false,
  });

  

  const validateForm = () => {
   
    const errors = {};
    if (!requesterData.contactNumber || !/^\d{10}$/.test(requesterData.contactNumber)) {
      errors.contactNumber = 'Valid contact number is required';
    }
    if (!requesterData.email || !/\S+@\S+\.\S+/.test(requesterData.email)) {
      errors.email = 'A valid email address is required';
    }
   
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Request submitted successfully ,Check your Notification!');
      setRequesterData({
        fullName: '',
        contactNumber: '',
        email: '',
        bloodTypeRequired: '',
    
        urgency: '',
        hospitalName: '',
        hospitalAddress: '',
        guardian: '',
        agreeTerms: false,
      });
    }
  };

  return (
    <div className='bg-slate-200'>
    <div className=" mx-auto max-w-3xl text-black  p-5 border rounded-2xl shadow-2xl bg-white">
      <h2 className="text-3xl  text-red-600 border-b-4 border-gray-300 font-bold mb-10 text-center">Blood Request Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
    
        <div>
          <label className="block mb-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={requesterData.fullName}
            placeholder=" full name"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={requesterData.contactNumber}
            placeholder="phone / landline"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Email Address:</label>
          <input
            type="email"
            name="email"
            value={requesterData.email}
            placeholder='email address'
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Blood Type :</label>
          <select
            name="bloodTypeRequired"
            value={requesterData.bloodTypeRequired}
            className="w-full border rounded p-2"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      
        <div>
          <label className="block mb-1">Urgency:</label>
          <select
            name="urgency"
            value={requesterData.urgency}
            className="w-full border rounded p-2"
          >
            <option value="">Select Urgency</option>
            <option value="High">Needed right now</option>
            <option value="Medium">Needed in a day</option>
 <option value="Low">Needed but not now</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Hospital Name & Address:</label>
          <input
            type="text"
            name="hospitalName"
            value={requesterData.hospitalName}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Guardian's Details:</label>
          <input
            type="text"
            name="guardian"
            value={requesterData.guardian}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Request Form Document:</label>
          <textarea
            name="additionalNotes"
            placeholder='you can upload in any format like pdf,jpg,png, etc'
            value={requesterData.additionalNotes}
            className="w-full border rounded p-2"
          />
        </div>

       
        <div>
          <label className="block">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={requesterData.agreeTerms}
             required
             className='cursor-pointer'
            />
            I agree to the terms and conditions
          </label>
          </div>
      
        <button
          type="submit"
          className="w-full bg-red-600 text-white  hover:bg-red-800 hover:text-white p-2 rounded mt-4 "
        >
          Submit 
        </button>
      </form>
    </div>
    </div>
  );


  
  

}
export default Form;