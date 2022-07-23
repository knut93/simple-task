import React, { useState } from 'react'
import GlobalContext from './GlobalContext'
import dayObj from 'dayjs'

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayObj().month())
    return(
        <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
            {props.children}
        </GlobalContext.Provider>
      )
    
}