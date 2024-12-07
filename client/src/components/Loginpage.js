
import React, { useState } from "react";
import { Facebook, MailOpen, Phone } from "lucide-react";
import rbc from "../assets/Blood.png"


export function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt with:", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <div className="  font-serif font-bold bg-slate-200  " >
      <div className="flex-1 items-center justify-center p-16">
      <h1 className="font-bold text-6xl  bg-gradient-to-r from-red-500 via-purple-700 to-blue-900 text-transparent bg-clip-text">
          HealthNet
        </h1>
        <p className="text-3xl font-mono  text-blue-400"> "Saving Lives in One Click"</p>

      </div>
    
     
        <div className="  p-16 gap-10  rounded-full flex items-center justify-between " >
          <div>
            <img  className=" shadow-red-700 shadow-2xl min-h-screen border-slate-500 rounded-full  " src={rbc} alt="bgimg"/>
          </div>
          
        
                <div className="bg-white rounded-3xl shadow-lg p-8">
          
                  <form onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-bold font-serif text-center text-red-800 mb-10 border-b-2 border-black w-1/4 rounded-2xl items-center">Login</h1>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="  font-bold text-white  hover:text-red-600 bg-primary bg-red-500 w-1/4 py-2 rounded-3xl hover:bg-blue-300  mb-4"
                    >
                      Sign up
                    </button>

                    <div className="text-center ">
                      <p className="mb-4">or sign up with:</p>
                      <div className="flex p-8 justify-center space-x-4">
                        <div>
                          <MailOpen />
                        </div>
                        <div>
                          <Facebook />
                        </div>
                        <div>
                          <Phone />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              
         
        
        </div>
        <p className="text-center">&copy; 2024 HealthNet. Saving Lives Digitally.</p>

    </div>
  );
}

export default LoginForm;
