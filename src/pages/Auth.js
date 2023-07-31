import React, { useState, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { baseURL } from "../util/baseURL";
import SnackBar from "../components/UI/SnackBar";

const Auth = () => {
  //navigation hook
  const navigate = useNavigate();

  //snackbar opening state
  const [open, setOpen] = useState(false);

  //refs
  const emailRef = useRef();
  const passwordRef = useRef();

  //search parameter
  const [searchQuery] = useSearchParams();
  const isLogin =
    searchQuery.get("mode") === "signin" || searchQuery.size === 0;

  const submitHandler = async () => {
    //api call
    const url = `${baseURL}/auth`;

    if (isLogin) {
      try {
        const response = await fetch(`${url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const token = await response.text();
        // console.log(token);
        localStorage.setItem("token", token);
        navigate("/console");
      } catch (err) {
        alert("Wrong email or password");
      } finally {
        return;
      }
    }

    try {
      const response = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      if (response.ok) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
        navigate("/auth");
        setOpen(true);
      } else {
        alert("something went wrong please try again");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex overflow-hidden">
      <SnackBar
        open={open}
        severity={"success"}
        message={"successfully registered"}
        setOpen={setOpen}
      />
      <div className="w-[40%] h-[100vh] text-center mt-40">
        {!isLogin && <p className="text-lg text-gray-400">Signup</p>}
        <input
          className="w-[66%] h-14 bg-[#1E272D] rounded-lg px-2 placeholder:text-white placeholder:tracking-wider placeholder:text-lg focus:outline-none"
          type="text"
          placeholder="email"
          ref={emailRef}
        />
        <input
          className="w-[66%] h-14 bg-[#1E272D] rounded-lg px-2 mt-4 placeholder:text-white placeholder:tracking-wider placeholder:text-lg focus:outline-none"
          type="password"
          placeholder="password"
          ref={passwordRef}
        />
        <button
          className="w-[66%] h-14 bg-[#0D253F] hover:bg-[#0e2844] rounded-lg px-2 mt-5 tracking-wider duration-200"
          onClick={submitHandler}
        >
          Submit
        </button>
        <Link to={`?mode=${isLogin ? "signup" : "signin"}`}>
          <p className=" text-right w-[66%] mx-auto px-2 py-4 cursor-pointer">
            {isLogin ? "signup" : "signin"}
          </p>
        </Link>
      </div>
      <div className="h-full w-full pt-24">
        <img className="h-[80%] w-full" src="./assets/image2.svg" alt="img" />
      </div>
    </div>
  );
};

export default Auth;
