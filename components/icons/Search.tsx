'use client'

import { useRouter } from 'next/navigation'

export default function Search() {
    const router = useRouter()

    return (
        <svg onClick={() => console.log('Search')} focusable="false" className={'cursor-pointer'} width="18" height="18" viewBox="0 0 18 18">
            <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" stroke-width="1"></path>
        </svg>
    )
}