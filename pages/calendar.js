import React, { Component, useState, useRef} from "react";

const WeekRow = () => {
    return (
        <div className="w-3/4 mx-auto bg-blue-600 flex justify-center space-x-3">
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
        </div>
    )
}


const DayItem = () => {
    return (
        <>
            <div className="w-full border-2 border-red-600 rounded">Day</div>
        </>
    )
}
const Calendar = () => {
    const current = new Date();
    const [] = useState();

    return (
            <div className="text-center bg-yellow-500">
                <div className="py-3">Today is {current.getMonth()+1} {current.getDate()}</div>
                <div className="">
                    <WeekRow />
                    <WeekRow />
                    <WeekRow />
                    <WeekRow />
                    <WeekRow />
                </div>
                
            </div>
    )
}



export default Calendar
