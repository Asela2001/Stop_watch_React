import React, {useState, useEffect, useRef} from "react";

function StopWatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdref =useRef(null);
    const starttimeref = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdref.current = setInterval(() => {
                setElapsedTime(Date.now() - starttimeref.current)
        },10);

        return () => {
            clearInterval(intervalIdref.current);
        }
        }
    }
    ,[isRunning]);

    function stratHandle(){
        setIsRunning(true);
        starttimeref.current = Date.now() - elapsedTime;

    }

    function stopHandle(){
        setIsRunning(false);
    }

    function resetHandle(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatWatch(){

        let hours = Math.floor(elapsedTime/(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60) % 60);
        let seconds = Math.floor(elapsedTime/(1000) % 60);
        let milisecond = Math.floor((elapsedTime % 1000) / 10);

        return `${zeroValue(hours)}:${zeroValue(minutes)}:${zeroValue(seconds)}:${zeroValue(milisecond)}` ;
    }

    function zeroValue(number){
        return (number < 10 ? "0" : "") + number
    }

    return (
      <div className="Stopwatch-container">
        <h1 className="title">Stop-Watch</h1>
        <p className="display">{formatWatch()}</p>
        <div className="button-container">
          <button className="start-btn" onClick={stratHandle}>
            START
          </button>
          <button className="stop-btn" onClick={stopHandle}>
            STOP
          </button>
          <button className="reset-btn" onClick={resetHandle}>
            RESET
          </button>
        </div>
      </div>
    );
}

export default StopWatch