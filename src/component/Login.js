import React, { useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleButtonClick = () => {
    checkValidation();
  }

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          alt="background-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg 1800w"
        />
      </div>
      <form className="absolute rounded-2xl w-96 h-96 p-8 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-2 m-2 rounded-lg  bg-zinc-600 w-full"
        />}
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 rounded-lg bg-zinc-600 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 rounded-lg  bg-zinc-600 w-full"
        />
        <button className="p-2 m-2 rounded-lg bg-red-700 w-full"> onClick={handleButtonClick}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button
          className="py-2"
          type="button"
          onClick={toggleSignForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
