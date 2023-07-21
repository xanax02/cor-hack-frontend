import React from "react";
import { Link } from "react-router-dom";

import MainNavigation from "../components/header/MainNavigation";
import CardSmall from "../components/UI/CardSmall";

const Console = () => {
  return (
    <>
      <MainNavigation />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 w-[70%] mx-auto mt-14">
        <Link to={"/new/project"}>
          <CardSmall create={"+"} title={"Create Project"} />
        </Link>
        {/* {DUMMY_DATA.map((data, index) => {
          return <CardSmall key={index + 1} title={data.title} />;
        })} */}
      </main>
    </>
  );
};

export default Console;
