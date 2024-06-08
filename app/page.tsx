import Alerts from '@/components/nav/Alerts'
import Header from '@/components/nav/Header'
import Home from '@/components/pages/Home'
import { auth } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Page() {
    return (
        <>
            <Alerts />
            <Header />

            <Home />
        </>
    )
}