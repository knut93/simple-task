import React, { Component, useState, useRef} from "react";

function Calendar() {
    
    const calendarRef = useRef()

    function handleCalendar(e) {

    }

    return (
        <>
            <div>
            </div>
            <input ref={calendarRef} type='text'/>
        </>
        
    )
}

export default Calendar
