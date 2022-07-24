import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"


export default function EventModal() {
    const labelClass = ['bg-red-500','bg-blue-500','bg-teal-500','bg-pink-500','bg-gray-400','bg-orange-500','bg-purple-500'];
    const {setShowEventModal, daySelected} = useContext(GlobalContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
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
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="Add title" 
                        value={title} 
                        required 
                        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500" 
                        onChange={(e) => setTitle(e.target.value)}/>

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p>{daySelected.format("dddd, MMMM DD")}</p>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>

                        <input 
                        type="text" 
                        name="description" 
                        placeholder="Add a description" 
                        value={description} 
                        required 
                        className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500" 
                        onChange={(e) => setDescription(e.target.value)}/>

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <div className="flex gap-x-2">
                            {labelClass.map((lblClass, labelIndex) => (
                                <span key={labelIndex}
                                    className={`${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                >
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}