import { Outlet } from "react-router-dom"
import MainNavigation from "../components/header/MainNavigation"
import AsideLeft from "../components/aside/AsideLeft"
import AsideRight from "../components/aside/AsideRight"
import Main from "../components/main/Main"

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className="flex justify-between">
        <AsideLeft  />
        <Main>
          <Outlet />
        </Main>
        <AsideRight />
      </main>
    </>
  )
}

export default Root
