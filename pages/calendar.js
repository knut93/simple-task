import ContextWrapper from "../context/ContextWrapper"
import CalendarView from "../components/CalendarView"

const Calendar = () => {
    return (
        <ContextWrapper>
            <CalendarView />
        </ContextWrapper>
    )
}
export default Calendar