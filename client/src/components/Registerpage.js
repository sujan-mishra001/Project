import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const RegisterPage = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    if (fname && lname && email && phone && gender && age) {
      navigate("/home");
    }
    if (!fname || !lname || !email || !phone || gender || !age) {
      setError("Fill out all the data.");
      return;
    }
    if (age < 18) {
      setError("Age must be above 18 yrs.");
      return;
    }
    setError("");
    alert("registration successfull");
    console.log({
      fname,
      lname,
      email,
      phone,
      gender,
      age,
    });
    setFname("");
    setLname("");
    setAge("");
    setEmail("");
    setGender("");
    setPhone("");
  };

  return (
    <div className=" bg-gradient-to-tr from-stone-400 via-grey-200 to-amber-200">
      <div className="bg-blue-100">
        <div className=" mx-auto  sm:px-6 lg:px-8">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className=" justify-between"
          >
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "45px ", marginLeft: "10px" }}
              />
              <h1 style={{ marginLeft: "20px" }}>HealthNet</h1>
            </div>
            <div className="relative" style={{ marginRight: "147px" }}>
              <h2>Register</h2>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          onSubmit={handleRegister}
          style={{ display: "flex ", flexDirection: "column", gap: "15px" }}
        >
          <div>
            <label style={{ display: "block", margiin: "5px" }}>
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name "
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              style={{
                pading: "10px",
                width: "50%",
                borderradius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", margiin: "5px" }}>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name "
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              style={{
                pading: "10px",
                width: "50%",
                borderradius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", margiin: "5px" }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                pading: "10px",
                width: "50%",
                borderradius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", margiin: "5px" }}>
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter your phone number "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                pading: "10px",
                width: "50%",
                borderradius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", margiin: "5px" }}>Gender</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ pading: "10px" }}
            />
            M
            <input
              type="radio"
              name="gender"
              id="female"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ pading: "10px }" }}
            />
            F
          </div>
          <div>
            <label style={{ display: "block", margiin: "5px" }}>Password</label>
            <input
              type="password"
              placeholder="Enter your new Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                pading: "10px",
                width: "50%",
                borderradius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button type="submit">Register</button>
        </form>

        <div>
          <p>
            Already have an account?<Link to="/">Login Here</Link>
          </p>
        </div>
      </div>
      <nav className="fixed  bottom-0 left-0 w-full p-4  bg-orange-400 ">
        <div className="flex-grow">
          <footer>2024 copyright.Reserved.</footer>
        </div>
      </nav>
    </div>
  );
};
export default RegisterPage;
