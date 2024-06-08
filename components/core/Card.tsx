'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCopyToClipboard } from 'usehooks-ts'

export default function Card({ item, price, id }: CardProps) {
    const router = useRouter()
    const [copiedText, copy] = useCopyToClipboard()

    return (
        <div onClick={() => router.push(`/${id}`)} className={'flex-col gap-3 justify-center items-center content-center flex cursor-pointer'}>
            <Image
                src={'https://vcp.com.ar/cdn/shop/files/BEIGE2_4ab80958-01b9-48c1-bd7c-47b48cbba017.jpg?v=1715566300&width=700'}
                alt={''}
                className={'rounded-md'}
                width={300}
                height={650}
            />
            <p className={'text-sm'}>{item}</p>
            <p  className={'text-sm'}>$ {price} ARS</p>
        </div>
    )
}