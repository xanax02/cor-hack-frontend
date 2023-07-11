import React from 'react'
import MainNavigation from '../components/header/MainNavigation'
import AsideLeft from '../components/aside/AsideLeft'
import CardSmall from '../components/UI/CardSmall'

const DUMMY_DATA=[
    {title: 'card1'},
    {title: 'card2'},
    {title: 'card3'},
    {title: 'card4'},
    {title: 'card4'},
    {title: 'card4'},
]

const Create = () => {
  return (
    <>
        <MainNavigation />
        <main className='flex justify-between'>
            <AsideLeft />
            <div className='flex-grow h-full py-10 px-[110px] flex flex-wrap'>
                <CardSmall create={'+'} title={'Create Project'} />
                {
                    DUMMY_DATA.map(data => {
                        return <CardSmall title={data.title} />
                    })
                }
            </div>
        </main>
    </>
  )
}

export default Create
