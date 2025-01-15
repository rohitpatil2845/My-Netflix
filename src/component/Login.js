import React from "react";
import Header from "./Header";

const Login = () => {
    const toggleSignForm = () => {
        
    }
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          alt="background-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg 1800w"
        />
      </div>
      <form className="absolute w-2/6 p-8 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
        <p className="font-bold text-3xl p-4">Sign In</p>
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
        <button className="p-2 m-2 rounded-lg bg-red-700 w-full">
          Sign In
        </button>
        <p className="py-4 " onClick={toggleSignForm()}>New to Netflix? Sign Up</p>
      </form>
    </div>
  );
};

export default Login;
