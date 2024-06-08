import Floating from '@/components/core/Floating'
import Card from '../core/Card'

export default function Home() {
    return (
        <>
            <div className={'relative w-screen h-screen flex flex-1 justify-center content-center items-center bg-white'}>
                <Card item={'Campera Puffer mays beige'} id={1} price={200} />
            </div>
            {/* <div className={'relative w-screen h-screen flex flex-1 justify-center content-center items-center bg-white'}>

            </div>
            <div className={'relative w-screen h-screen flex flex-1 justify-center content-center items-center bg-white'}>

            </div> */}

            <Floating />
        </>
    )
}