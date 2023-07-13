import React from 'react'
import MainNavigation from '../components/header/MainNavigation'
import AsideLeft from '../components/aside/AsideLeft'
import CardSmall from '../components/UI/CardSmall'

const DUMMY_DATA = [
    { title: 'card1' },
    { title: 'card2' },
    { title: 'card3' },
    { title: 'card4' },
    // { title: 'card4' },
    // { title: 'card4' },
    // { title: 'card4' },
    // { title: 'card4' },
    // { title: 'card4' },
]

const Console = () => {
    return (
        <>
            <MainNavigation />
            <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[70%] mx-auto mt-14'>
                <CardSmall create={'+'} title={'Create Project'} />
                {
                    DUMMY_DATA.map(data => {
                        return <CardSmall title={data.title} />
                    })
                }
            </main>
        </>
    )
}

export default Console;
