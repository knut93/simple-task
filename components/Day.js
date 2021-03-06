import { useContext } from 'react'
import dayObj from "dayjs"
import GlobalContext from "../context/GlobalContext"

export default function Day({day, rowIndex}) {
    function getCurrentDayClass() {
        return day.format('DD-MM-YY') === dayObj().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : ''
    }
    const {setDaySelected, setShowEventModal} = useContext(GlobalContext)
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIndex === 0 && (<p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>)}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className="flex-1 cursor-pointer" 
            onClick={()=> {
                setDaySelected(day)
                setShowEventModal(true)
                }}>
                {""}
            </div>
        </div>
    )
}