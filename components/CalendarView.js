import Month from './Month'
import { getMonth } from './getMonth'
import { useEffect, useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import CalendarHeader from './CalenderHeader'

const CalendarView = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(GlobalContext)
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])
    return (
        <>
                <CalendarHeader />
                <Month month={ currentMonth }/>
        </>
    )
}

export default CalendarView