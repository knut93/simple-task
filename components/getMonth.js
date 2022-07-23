import dayObj from 'dayjs'

export function getMonth(month = dayObj().month()){
    const year = dayObj().year()
    const firstDayOfTheMonth = dayObj(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayObj(new Date(year, month, currentMonthCount))
        })
    })
    return daysMatrix
}