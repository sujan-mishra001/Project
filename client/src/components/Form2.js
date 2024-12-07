import React, { useState } from "react";

const RForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    Address: "",

    bloodType: "",
    weight: "",
    medicalHistory: "",
    onMedication: false,
    lastDonationDate: "",

    agreeTerms: false,
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Valid contact number is required";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "A valid email address is required";
    }

    if (!formData.bloodType) errors.bloodType = "Blood Type is required";

    if (!formData.agreeTerms) {
      errors.agreeTerms = "Agreement to the terms and conditions is required";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        dob: "",
        gender: "",
        contactNumber: "",
        email: "",
        Address: "",

        bloodType: "",
        weight: "",
        medicalHistory: "",
        onMedication: false,
        lastDonationDate: "",
        agreeTerms: false,
      });
    }
  };

  return (
    <div className="bg-slate-200">
      <div className="max-w-3xl mx-auto mt-10 p-5 border rounded shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-10 text-red-600 border-b-4 border-gray-300 text-center">
          Blood Donation Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Gender:</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                />{" "}
                Female
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-1">Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">Address:</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">Blood Type:</label>
            <select
              name="bloodType"
              value={formData.bloodType}
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
            <label className="block mb-1">Weight (kg):</label>
            <input
              type="number"
              name="weight"
              min="45"
              value={formData.weight}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">
              Are you currently on any medication?
            </label>
            <input
              type="checkbox"
              name="onMedication"
              checked={formData.onMedication}
            />
          </div>
          <div>
            <label className="block mb-1">Previous donated date::</label>
            <input
              type="date"
              name="lastDonationDate"
              value={formData.lastDonationDate}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
              />
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white hover:bg-red-800 hover:text-white p-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RForm;
