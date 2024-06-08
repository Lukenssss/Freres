'use client'

import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import MP from '@/public/images/mp.png'

export default function Pay() {
    const router = useRouter()

    const Press = async () => {
        const response = await axios.post('/api/checkout', {
            precio: 100,
            cantidad: 1,
            nombre: 'Remera esencial noir'
        })

        router.push(response.data.url)
    }

    return (
        <>
            <div className={'w-screen h-screen flex flex-1 flex-col content-center items-center justify-center'}>
                <button onClick={Press} className={'cursor-pointer text-sm text-white w-40 content-center items-center flex justify-center h-10 bg-black'}>
                    Realizar pedido
                </button>
            </div>
        </>
    )
}