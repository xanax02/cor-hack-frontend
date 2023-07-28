import React, { useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { baseURL } from "../util/baseURL";

const Auth = () => {
  //navigation hook
  const navigate = useNavigate();

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
      const result = await response.text();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex overflow-hidden">
      <div className="w-[40%] h-[100vh] text-center mt-40">
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
