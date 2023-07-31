import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../util/baseURL";
import { useState } from "react";

const AppControls = () => {
  const appId = useParams().id;
  const userToken = localStorage.getItem("token");
  const [appName, setAppName] = useState();

  useEffect(() => {
    try {
      fetch(`${baseURL}/app/${appId}`, {
        method: "GET",
        headers: {
          authorization: userToken,
        },
      })
        .then((response) => response.json())
        .then((result) => setAppName(result));
    } catch (err) {
      console.log(err);
    }
  }, [appId]);

  const navigate = useNavigate();

  const deleteHandler = () => {
    try {
      fetch(`${baseURL}/app/${appId}`, {
        method: "DELETE",
        headers: {
          authorization: userToken,
        },
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
    navigate("/", { replace: true });
  };

  return (
    <div className="border-2 border-red-500 rounded-lg p-4">
      <p className="text-red-500">Danger Zone</p>
      <div className="mt-2 flex justify-between">
        <p className="text-lg text-gray-400">{appName?.appName}</p>
        <button
          onClick={deleteHandler}
          className="px-4 py-1 rounded-lg text-red-500 outline outline-red-500"
        >
          Delete App
        </button>
      </div>
    </div>
  );
};

export default AppControls;
