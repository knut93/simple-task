import React, { Component, useState, useRef} from "react";

const WeekRow = () => {
    return (
        <div className="flex flex-row min-w-[90%] mx-auto space-x-5 px-5 py-5">
            <DayItem day={'Sunday'}/>
            <DayItem day={'Monday'}/>
            <DayItem day={'Tuesday'}/>
            <DayItem day={'Wednesday'}/>
            <DayItem day={'Thursday'}/>
            <DayItem day={'Friday'}/>
            <DayItem day={'Saturday'}/>
        </div>
    )
}


const DayItem = (props) => {
    const day = props.day;

    return (
        <>
            <div className="font-bold w-full border-2 border-red-600 rounded">{day}
                <div className="font-light">
                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>
                    <p>Paragraph 2</p>
                    <p>Paragraph 2</p>
                </div>
            </div>
        </>
    )
}
const Calendar = () => {
    const current = new Date();
    const [] = useState();

    return ( 
        <div className="flex-1">
            <div className="flex flex-col h-full justify-center">
                <WeekRow />
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
