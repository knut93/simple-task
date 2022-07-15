import Link from 'next/link'

export default function Nav () {
    return (
        <nav>
            <div className="bg-blue-800 text-white text-lg space-x-3 p-4 shadow">
                <Link href='/'>Home</Link>
                <Link href='/calendar'>Calendar</Link>
                <Link href='/week'>Week Block</Link>
            </div>
        </nav>
    )
}