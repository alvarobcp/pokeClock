import React from "react";

function DateComponent() {

    const date = new Date();
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    return(<div className="dateContainer">
        <h1>pokeClock</h1>
        <h2>Today is <span style={{color:"#FF5252FF", fontWeight:500}}>{days[date.getDay()]}</span>, {months[date.getMonth()]} 
        <span style={{color:"#7C4DFFFF", fontWeight:500}}> {date.getDate()}</span>, {date.getFullYear()}</h2>
    </div>
    )
    

}

export default DateComponent;
