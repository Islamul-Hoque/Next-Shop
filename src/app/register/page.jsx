// "use client";
// import { useContext, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import { AuthContext } from "../../../Context/AuthProvider";

// const Signup = () => {
//     const { createUser, googleSignIn, updateUser, setUser } = useContext(AuthContext);
//     const [show, setShow] = useState(false);
//     const [error, setError] = useState("");
//     const router = useRouter();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");
//         const displayName = e.target.name.value;
//         const photoURL = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         if (!displayName.trim()) return setError("Please enter your name.");
//         if (!email) return setError("Please enter your email address.");
//         if (!password) return setError("Please enter your password.");
//         if (password.length < 6) return setError("Password must be at least 6 characters.");
//         if (!/[A-Z]/.test(password)) return setError("Password must include at least one uppercase letter.");
//         if (!/[a-z]/.test(password)) return setError("Password must include at least one lowercase letter.");

//         try {
//             const result = await createUser(email, password);
//             await updateUser({ displayName, photoURL });
//             setUser({ ...result.user, displayName, photoURL });
//             toast.success("Account created successfully!");
//             router.push("/");
//         } catch (err) {
//         if (err.code === "auth/email-already-in-use") setError("This email is already registered!");
//         else setError("Something went wrong. Please try again later.");
//         }
// };

//     const handleGoogleSignIn = async () => {
//     try {
//         const result = await googleSignIn();
//         setUser(result.user);
//         toast.success("Signed up with Google successfully!");
//         router.push("/");
//     } catch (err) {toast.error(err.message); }
// };


"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const Signup = () => {
  const { createUser, googleSignIn, updateUser, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!displayName.trim()) return setError("Please enter your name.");
    if (!email) return setError("Please enter your email address.");
    if (!password) return setError("Please enter your password.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (!/[A-Z]/.test(password)) return setError("Password must include at least one uppercase letter.");
    if (!/[a-z]/.test(password)) return setError("Password must include at least one lowercase letter.");

    try {
      const result = await createUser(email, password);
      await updateUser({ displayName, photoURL });
      setUser({ ...result.user, displayName, photoURL });

      // ⬇️ token set after new user created
      const token = await result.user.getIdToken();
      document.cookie = `token=${token}; path=/;`;

      toast.success("Account created successfully!");
      router.push("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        setError("This email is already registered!");
      else setError("Something went wrong. Please try again later.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      setUser(result.user);

      // ⬇️ token set for Google signup
      const token = await result.user.getIdToken();
      document.cookie = `token=${token}; path=/;`;

      toast.success("Signed up with Google successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

    return (
        <div className="flex justify-center items-center min-h-screen pt-12 pb-16 ">
            <div className="w-[88%] md:w-[40%] pb-3 rounded-[0.7rem]  overflow-hidden shadow bg-white  border border-gray-200 ">
                <h2 className="text-3xl font-bold text-center pt-6"> Sign Up for <span className="text-gradient">NextShop</span></h2>   
                <div className="card-body text-gray-800 ">
                    <form onSubmit={ handleRegister }>
                        <fieldset className="fieldset">
                            <label className="label">Your Name</label>
                            <input name='name' type="text" className="input bg-gray-50  w-full" placeholder="Enter your name" />

                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input bg-gray-50 0 w-full" placeholder="Enter your photo URL" />

                            <label className="label">Email address</label>
                            <input  name="email"  type="email" className="input bg-gray-50  w-full" placeholder="Enter your email address"  />

                            <div className="relative">
                                <label className="label mb-[0.38rem] mt-2">Password</label>
                                <input name="password" type={ show ? "text" : "password" } className="input bg-gray-50  w-full" placeholder="Enter your password" />
                                <span onClick={()=> setShow(!show) } className="absolute text-[1rem] right-4 top-[2.77rem] cursor-pointer z-50 " > { show ? <FaEye/> : <IoEyeOff/> }  </span>
                            </div>

                            { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }

                            <button type="submit" className="btn-primary-w-full mt-4">Sign Up</button>
                        </fieldset>
                    </form>

                    <p className="text-gray-500  text-center">Already have an account? <Link href="/login" className="text-gradient font-medium hover:link" >  Login </Link></p>

                    <div className="flex items-center gap-3 ">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-gray-500  text-sm">or</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black rounded-md border border-[#e5e5e5] flex items-center justify-center gap-2"> <FcGoogle size={18}/>Sign Up with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Signup;