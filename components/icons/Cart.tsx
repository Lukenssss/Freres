'use client'

import { useRouter } from 'next/navigation'

export default function Cart() {
    const router = useRouter()

    return (
        <svg focusable="false" onClick={() => router.push('/carrito')} width="20" className={'cursor-pointer'} height="18" viewBox="0 0 20 18">
            <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="1"></path>
            <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="1"></path>
        </svg>
    )
}