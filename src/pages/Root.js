import { Outlet } from "react-router-dom"
import MainNavigation from "../components/header/MainNavigation"
import AsideLeft from "../components/aside/AsideLeft"
import AsideRight from "../components/aside/AsideRight"

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className="flex justify-between">
        <AsideLeft  />
        <div>
          <Outlet />
        </div>
        <AsideRight />
      </main>
    </>
  )
}

export default Root
