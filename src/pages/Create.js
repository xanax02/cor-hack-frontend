import React from 'react'
import MainNavigation from '../components/header/MainNavigation'
import AsideLeft from '../components/aside/AsideLeft'
import Main from '../components/main/Main'
import { Outlet } from 'react-router-dom'

const Create = () => {
  return (
    <>
        <MainNavigation />
        <main className='flex justify-between'>
            <AsideLeft />
            <Main>
                <Outlet />
            </Main>
        </main>
    </>
  )
}

export default Create
