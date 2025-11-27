// "use client";

// import React, { useContext, useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { AuthContext } from "../../../Context/AuthProvider";
// import { toast } from "react-toastify";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";
// import { FcGoogle } from "react-icons/fc";
// import Link from "next/link";

// const Login = () => {
//   const { signInUser, googleSignIn, setUser } = useContext(AuthContext);
//   const router = useRouter();
//   const params = useSearchParams();

//   const [redirectPath, setRedirectPath] = useState("/");
//   const [show, setShow] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setRedirectPath(params.get("from") || "/");
//   }, [params]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError("");

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (!email) return setError("Please enter your email address.");
//     if (!password) return setError("Please enter your password.");

//     signInUser(email, password)
//       .then(() => {
//         toast.success("Logged in successfully!");
//         router.push(redirectPath);
//       })
//       .catch((error) => {
//         if (error.code === "auth/invalid-credential")
//           setError("Email or password did not match!");
//         else if (error.code === "auth/invalid-email")
//           setError("Please enter a valid email.");
//         else if (error.code === "auth/user-not-found")
//           setError("No account found with this email.");
//         else setError("Something went wrong. Try again later.");
//       });
//   };

//   const handleGoogleSignIn = () => {
//     googleSignIn()
//       .then((result) => {
//         setUser(result.user);
//         toast.success("Logged in with Google!");
//         router.push(redirectPath);
//       })
//       .catch((e) => toast.error(e.message));
//   };

"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Login = () => {
  const { signInUser, googleSignIn, setUser } = useContext(AuthContext);
  const router = useRouter();
  const params = useSearchParams();

  const [redirectPath, setRedirectPath] = useState("/");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setRedirectPath(params.get("from") || "/");
  }, [params]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) return setError("Please enter your email address.");
    if (!password) return setError("Please enter your password.");

    try {
      const result = await signInUser(email, password);

      // ⬇️ token add (correct spot)
      const token = await result.user.getIdToken();
      document.cookie = `token=${token}; path=/;`;

      toast.success("Logged in successfully!");
      router.push(redirectPath);
    } catch (error) {
      if (error.code === "auth/invalid-credential")
        setError("Email or password did not match!");
      else if (error.code === "auth/invalid-email")
        setError("Please enter a valid email.");
      else if (error.code === "auth/user-not-found")
        setError("No account found with this email.");
      else setError("Something went wrong. Try again later.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();

      // ⬇️ token for Google login
      const token = await result.user.getIdToken();
      document.cookie = `token=${token}; path=/;`;

      setUser(result.user);
      toast.success("Logged in with Google!");
      router.push(redirectPath);
    } catch (e) {
      toast.error(e.message);
    }
  };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-[88%] md:w-[40%] pb-3 rounded-[0.7rem] overflow-hidden shadow bg-white border border-gray-200 ">
                <h2 className="text-3xl font-bold text-center pt-6"> Login to <span className="text-gradient">NextShop</span></h2>
                <div className="card-body text-gray-800 ">
                    <form onSubmit={ handleLogin }>
                        <fieldset className="fieldset">
                            <label className="label text-gray-700  ">Email address</label>
                            <input name="email"  type="email" className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" placeholder="Enter your email address"  />

                            <div className="relative">
                                <label className="label mb-[0.38rem] mt-2 text-gray-700 ">Password</label>
                                <input name="password" type={ show ? "text" : "password" } className="input border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full" placeholder="Enter your password" />
                                <span onClick={()=> setShow(!show) } className="absolute text-[1rem] right-4 top-[2.77rem] cursor-pointer z-50 " > { show ? <FaEye/> : <IoEyeOff/> }  </span>
                            </div>

                            { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }

                            <div className="flex justify-end text-sm">  <div className="text-gradient hover:link" > Forgot Password?</div></div>

                            <button type="submit" className="btn-primary-w-full mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-gray-500  text-center"> Don’t have an account?{" "} <Link href="/register" className="text-gradient font-medium hover:link"> Sign Up </Link></p>

                    <div className="flex items-center gap-3 ">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-gray-500  text-sm">or</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black rounded-md border border-[#e5e5e5] flex items-center justify-center gap-2"> <FcGoogle size={18}/>Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
