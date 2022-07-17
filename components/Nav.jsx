import Link from 'next/link'

export default function Nav () {
    return (
        <nav>
            <div className="Quicksand flex bg-blue-300 text-white text-lg space-x-3 p-4">
                <div className="mr-auto text-2xl">palendar</div>
                <div className="ml-auto space-x-3">
                    <Link href='/'>Home</Link>
                    <Link href='/calendar'>Calendar</Link>
                    <Link href='/week'>Week Block</Link>
                </div>
            </div>
        </nav>
    )
}