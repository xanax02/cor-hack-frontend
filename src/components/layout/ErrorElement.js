import React from "react";

const ErrorElement = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 text-center mt-20">
      <h1 className="font-extrabold text-8xl">
        <span className="text-red-500 italic">404</span> ERROR
      </h1>
      <p className="text-2xl font-semibold">Page not found</p>
    </div>
  );
};

export default ErrorElement;
