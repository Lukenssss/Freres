'use client'

import React, { useEffect, useState } from 'react'
import { Roboto, Work_Sans } from 'next/font/google'
import Search from '@/components/icons/Search'
import Cart from '@/components/icons/Cart'
import { useMediaQuery } from 'usehooks-ts'
import Menu from '../icons/Menu'
import { useRouter } from 'next/navigation'

const robotoBold = Roboto({
    weight: '700',
    subsets: ['latin'],
})

export default function Header() {
    const router = useRouter()
    const matches = useMediaQuery('(max-width: 768px)')

    if (matches) {
        return (
            <div className={'w-screen relative h-16 bg-white border-b content-center items-center align-middle flex flex-row justify-between'}>
                <div className={'ml-3 content-center items-center justify-center flex-row gap-7 flex'}>
                    <Menu />
                    <p onClick={() => {
                        router.push('/')
                    }} className={'cursor-pointer'} style={robotoBold.style}>FRÈRES</p>
                </div>

                <div className={'mr-7 flex-row gap-5 flex'}>
                    <Search />
                    <Cart />
                </div>
            </div> 
        )
    }

    return (
        <div className={'w-screen relative h-16 bg-white border-b content-center items-center align-middle flex flex-row justify-between'}>
            <p onClick={() => {
                router.push('/')
            }} className={'cursor-pointer ml-7'} style={robotoBold.style}>FRÈRES</p>

            <div className={'mr-7 flex-row gap-5 flex'}>
                <Search />
                <Cart />
            </div>
        </div>
    )
}