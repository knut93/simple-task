import React from "react";
import { GetMonth } from "../components/GetMonth"

export default function DateDisplay() {
  console.table(GetMonth(1))
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `Today is ${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })} ${today.getFullYear()}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}! `;
  
    const time = `It's currently ${today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' })}`;
  
    return (
      <>
      <div className="flex justify-center py-2 shadow-md">
        <div className="flex justify-around w-3/4 text-xl">
        <div>{wish}</div>
        <div>{date}</div>
        <div>{time}</div>
        </div>
      </div>
      </>
    )
  };
