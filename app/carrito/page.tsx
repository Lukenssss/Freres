import Alerts from '@/components/nav/Alerts'
import Header from '@/components/nav/Header'
import Pay from '@/components/pages/Pay'

export default async function Page() {
    return (
        <>
            <Alerts />
            <Header />

            <Pay />
        </>
    )
}