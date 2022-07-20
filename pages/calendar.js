import React, { Component, useState, useRef} from "react";
import bg from '../img/nightsky.jpg'

const FirstWeekRow = () => {
    return (
        //<div className="flex flex-row min-w-[90%] mx-auto">
        <div className="">
            <DayItem day={'SUN'}/>
            <DayItem day={'MON'}/>
            <DayItem day={'TUE'}/>
            <DayItem day={'WED'}/>
            <DayItem day={'THU'}/>
            <DayItem day={'FRI'}/>
            <DayItem day={'SAT'}/>
        </div>
    )
}

const WeekRow = () => {
    return (
       
        //<div className="flex flex-row min-w-[90%] mx-auto">
        <div>
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
            <DayItem />
        </div>
    )
}


const DayItem = (props) => {
    const day = props.day;

    return (
        <>
            <div className="bg-white font-bold w-full border-1 border-gray-600 rounded">{day}
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
        <div className="flex-1 grid grid-cols-7 h-full bg-nsky bg-snowblue bg-no-repeat bg-bottom">
                <FirstWeekRow />
                <WeekRow />
                <WeekRow />
                <WeekRow />
                <WeekRow />
                <WeekRow />
        </div>
    )
}



export default Calendar
