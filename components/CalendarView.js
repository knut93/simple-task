import Month from './Month'
import { getMonth } from './getMonth'
import { useEffect, useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import CalendarHeader from './CalenderHeader'
import Sidebar from './Sidebar'
import EventModal from './EventModal'

const CalendarView = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal } = useContext(GlobalContext)
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])
    return (
        <>
            {showEventModal && <EventModal />}
            <CalendarHeader />
            <div className="flex flex-1">
                <Sidebar />
                <Month month={ currentMonth }/>
            </div>
        </>
    )
}

export default CalendarView