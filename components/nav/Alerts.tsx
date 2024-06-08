'use client'

import React, { useEffect, useState } from 'react'

export default function Alerts() {
    return (
        <div className={'w-screen text-xs gap-3 relative z-10 h-8 bg-black text-white border-b content-center items-center align-middle flex flex-row justify-center'}>
            <p>{'Envios gratis > $80000'}</p>
            <p>3 y 6 cuotas sin interes</p>
        </div>
    )
}