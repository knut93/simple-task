import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import dayObj from 'dayjs'

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    function handlePrevMonth() {
        setMonthIndex(monthIndex-1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex+1);
    }
    function handleReset() {
        setMonthIndex(dayObj().month())
    }
    return (
        <header className="px-4 py-2 flex items-center">
            <h1 className="mr-10 text-xl text-gray-500">Calendar</h1>
            <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>
            <button onClick={handlePrevMonth}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNextMonth}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <span className="ml-4 text-xl text-gray-500 font-bold">
                {dayObj(new Date(dayObj().year(), monthIndex)).format("MMMM YYYY")}
            </span>
        </header>
    )
}