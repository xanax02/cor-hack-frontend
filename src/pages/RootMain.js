import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import MainNavigation from "../components/header/MainNavigation";
import AsideLeft from "../components/aside/AsideLeft";
import Main from "../components/main/Main";
import Overlay from "../components/UI/Overlay";

const RootMain = () => {
  const overlay = useSelector((state) => state.createOverlay.showOverlay);

  return (
    <>
      {overlay && <Overlay />}
      <MainNavigation sidebarFull={"true"} />
      <main className="flex justify-between">
        <AsideLeft />
        <Main>
          <Outlet />
        </Main>
      </main>
    </>
  );
};

export default RootMain;
