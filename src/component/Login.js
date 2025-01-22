import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: 
              "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "--" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "--" + errorMessage);
        });
    }
  };

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
      <form
        onClick={(e) => e.preventDefault()}
        className="absolute rounded-2xl w-96 h-96 p-8 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-3xl p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 rounded-lg  bg-zinc-600 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 rounded-lg bg-zinc-600 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 rounded-lg  bg-zinc-600 w-full"
        />
        <h1 className="text-red-400 font-bold text-lg p-2">{errorMessage}</h1>
        <button
          className="p-2 m-2 rounded-lg bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="py-2" type="button" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already have an account? Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useRef, useState } from "react";
// import Header from "./Header";
// import { checkValidation } from "../utils/Validation";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../utils/Firebase";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [err, setErr] = useState(null);

//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
//     // Validation for email and password fields
//     const message = checkValidation(
//       email.current.value,
//       password.current.value
//     );
//     setErrorMessage(message); // Set validation error message
//     if (message) return;

//     if (!isSignInForm) {
//       // Handle Sign Up
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log(user);
//           setErr(null); // Clear any previous error
//         })
//         .catch((error) => {
//           // Display Sign-Up error
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErr(`${errorCode} -- ${errorMessage}`);
//         });
//     } else {
//       // Handle Sign In
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           const user = userCredential.user;
//           console.log(user);
//           setErr(null); // Clear any previous error
//         })
//         .catch((error) => {
//           // Display Sign-In error
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErr(`${errorCode} -- ${errorMessage}`);
//         });
//     }
//   };

//   const toggleSignForm = () => {
//     setIsSignInForm(!isSignInForm);
//     setErrorMessage(null); // Clear validation message when switching forms
//     setErr(null); // Clear API error message when switching forms
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <img
//           className="absolute"
//           alt="background-img"
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
//           srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg 1800w"
//         />
//       </div>
//       <form
//         onClick={(e) => e.preventDefault()}
//         className="absolute rounded-2xl w-96 h-96 p-8 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
//       >
//         <h1 className="font-bold text-3xl p-2">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>
//         {!isSignInForm && (
//           <input
//             type="text"
//             placeholder="Name"
//             className="p-2 m-2 rounded-lg bg-zinc-600 w-full"
//           />
//         )}
//         <input
//           ref={email}
//           type="text"
//           placeholder="Email"
//           className="p-2 m-2 rounded-lg bg-zinc-600 w-full"
//         />
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className="p-2 m-2 rounded-lg bg-zinc-600 w-full"
//         />
//         {/* Display error messages */}
//         <h1 className="text-red-400 font-bold text-lg p-2">
//           {errorMessage || err}
//         </h1>
//         <button
//           className="p-2 m-2 rounded-lg bg-red-700 w-full"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <button className="py-2" type="button" onClick={toggleSignForm}>
//           {isSignInForm
//             ? "New to Netflix? Sign Up"
//             : "Already have an account? Sign In"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
