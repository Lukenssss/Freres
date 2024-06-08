'use client'

import { useRouter } from 'next/navigation'
import { FaSquareWhatsapp } from 'react-icons/fa6'

export default function Floating() {
    const router = useRouter()

    return (
        <div className={'z-10 fixed right-8 bottom-6'}>
            <FaSquareWhatsapp onClick={() => window.open('https://wa.me/11283903206')} className={'text-green-500 text-4xl cursor-pointer'} />
        </div>
    )
}