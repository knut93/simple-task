import React, { useEffect, useState, useContext } from 'react'
import { getMonth } from "./getMonth"
import dayObj from 'dayjs'
import GlobalContext from '../context/GlobalContext'

export default function MiniCalendar() {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayObj().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    useEffect( () => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    const {monthIndex, setSmallCalendarMonth, daySelected, setDaySelected} = useContext(GlobalContext)

   
    function handlePrevMonth() {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }
    function handleNextMonth() {
        setCurrentMonthIndex(currentMonthIndex + 1)
    }
    function getDayClass(day) {
        const format = "DD-MM-YY"
        const nowDay = dayObj().format(format)
        const currentDay = day.format(format)
        const selDay = daySelected && daySelected.format(format)
        if(nowDay === currentDay) {
            return 'bg-blue-500 rounded-full text-white'
        } else if(currentDay === selDay){
            return 'bg-blue-100 rounded-full text-blue-600 font-bold'
        } else  {
            return '';
        }
        
    }
    return (
        <div className="mt-9">
            <header className="flex justify-between">
                <p className="text-gray-500 font-bold">
                    {dayObj(new Date(dayObj().year(), currentMonthIndex)).format(
                        "MMMM YYYY"
                    )}
                </p>
                <div>
                    <button onClick={handlePrevMonth}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={handleNextMonth}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, index) => (
                    <span key={index} className="text-sm py-1 text-center">
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row,i) => (
                    <>
                        {row.map((day, index) => (
                            <button key={index} onClick={() => {
                                setSmallCalendarMonth(currentMonthIndex)
                                setDaySelected(day)
                            }} className={`py-1 w-full ${getDayClass(day)}`}>
                                <span className="text-sm">{day.format('D')}</span>
                            </button>
                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}