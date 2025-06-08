import React, { useState, useEffect, useRef } from "react";
import Dot from "./Dot";


function ClockComponent() {

  const secondsNow = new Date().getSeconds();
  const minutesNow = new Date().getMinutes();
  const hourNow = new Date().getHours();
  
  const mounted = useRef(false);



  const randomNumberLenght = 6;

  let startHoursArray = [];
  let startMinutesArray = [];
  let startSecondsArray = [];

  const [seconds, setSeconds] = useState(secondsNow);
  const [minutes, setMinutes] = useState(minutesNow);
  const [hours, setHours] = useState(hourNow);

  const[hoursArray, setHoursArray] = useState([]);
  const[minutesArray, setMinutesArray] = useState([]);
  const[secondsArray, setSecondsArray] = useState([]);
  
 
  
  
  function updateArrays(){

    for (let i = 0; i < 60; i++) {
      startHoursArray.push(Math.floor(Math.random() * randomNumberLenght));
    }

    for (let i = 0; i < 60; i++) {
      startMinutesArray.push(Math.floor(Math.random() * randomNumberLenght));
    }

    for (let i = 0; i < 60; i++) {
      startSecondsArray.push(Math.floor(Math.random() * randomNumberLenght));
      
    }

    setSecondsArray(startSecondsArray);
    setMinutesArray(startMinutesArray);
    setHoursArray(startHoursArray);

  }

  function updateHoursIcons(h){
    
    if(h === 0){
      for (let i = 0; i < 60; i++) {
        startHoursArray.push(Math.floor(Math.random() * randomNumberLenght));
      }
      setHoursArray(startHoursArray);
    }

  }

  function updateMinutesIcons(m){
    if(m === 0){
      for (let i = 0; i < 60; i++) {
        startMinutesArray.push(Math.floor(Math.random() * randomNumberLenght));
      }
      setMinutesArray(startMinutesArray);
    } 
    
  }

  function  updateSecondsIcons(s){
    
    if(s === 0){
      for (let i = 0; i < 60; i++) {
        startSecondsArray.push(Math.floor(Math.random() * randomNumberLenght));
      }
      setSecondsArray(startSecondsArray);
    }
 
  }


  function updateTime() {

    if (!mounted.current) {
      return;
    }

    setSeconds(prevSeconds => {
      const newSeconds = new Date().getSeconds();
      if (newSeconds !== prevSeconds) {
        updateSecondsIcons(newSeconds);
      }
      return newSeconds;
    });

    setMinutes(prevMinutes => {
      const newMinutes = new Date().getMinutes();
      if (newMinutes !== prevMinutes) {
        updateMinutesIcons(newMinutes); 
      }
      return newMinutes;
    });

    setHours(prevHours => {
      const newHours = new Date().getHours();
      if (newHours !== prevHours) {
        updateHoursIcons(newHours); 
      }
      return newHours;
    });
    
  }

 
  const updateRef = useRef(updateTime);

  useEffect(() => {
    updateRef.current = updateTime;
  }, [updateTime]);

  useEffect(() => {
  
    mounted.current = true;
    updateArrays();

    const interval = setInterval(() => {
      updateRef.current();
    }, 1000);
    
    return () => {
      mounted.current = false;
      clearInterval(interval);
    };
  }, []); 
  


  return (
   
      <div className="container">
          <div className="gridItem clockContainer hoursContainer">
          <Dot count={hours}  iconsArray={hoursArray} dotNumber={23} />
          </div>
          <div className="gridItem clockContainer minutesContainer">
            <Dot count={minutes}  iconsArray={minutesArray} dotNumber={59} />
          </div>
          <div className="gridItem clockContainer secondsContainer">
          <Dot count={seconds}  iconsArray={secondsArray} dotNumber={59} />
          </div>
          <div className="gridItem"><p className="pTime" >{hours<10 ? "0"+hours : hours}</p></div>
          <div className="gridItem"><p className="pTime" >{minutes<10 ? "0"+minutes : minutes}</p></div>
          <div className="gridItem"><p className="pTime" > {seconds<10 ? "0"+seconds : seconds}</p></div>
      </div>
    
  );
}

export default ClockComponent;