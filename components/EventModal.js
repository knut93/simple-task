import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"

export default function EventModal() {
    const {setShowEventModal} = useContext(GlobalContext)
    const [title, setTitle] = useState('')
    useEffect(() => {
        const close = (e) => {
            if(e.keyCode === 27) {
                setShowEventModal(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>
                    <button onClick={() => setShowEventModal(false)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input type="text" name="title" placeholder="Add title" value={title} required className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                </div>
            </form>
        </div>
    )
}