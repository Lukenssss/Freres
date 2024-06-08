'use client'

import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/nav/Header'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Card from '@/components/core/Card'
import { Work_Sans } from 'next/font/google'
import { io } from 'socket.io-client'
import { config } from '@/extra/config'
import { useEventListener } from 'usehooks-ts'
import axios from 'axios'
import { BsDiscord, BsTwitch } from 'react-icons/bs'
import { signIn } from 'next-auth/react'
import { IoLogoDiscord } from 'react-icons/io5'

export default function Form() {
    return (
        <>
            <div className={'flex my-3 content-center gap-4 items-center justify-center flex-col'}>
                <button onClick={() => signIn('discord')} className={''}>
                    <IoLogoDiscord className={'text-[#7289da] text-xl w-32'} />
                </button>
            </div>
        </>
    )
}