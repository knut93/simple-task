import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className="border p-2 rounded-full flex items-center shadow-md      hover:shadow-2xl">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="px-2">Create</span>
        </button>
    )
}