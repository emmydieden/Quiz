import { useTimer } from "use-timer";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";


export const Timer = () => {
  // const history = useHistory();
     //UseTimer props
     const { time, start, pause, reset, status } = useTimer( {
        timerType: "DECREMENTAL", 
        initialTime: 5, 
        endTime: 0,
        onTimeOver: () => {
          {
            console.log("BOOM");
          }

          // Redirect the user to the summary page
          // history.push("/summary");
        }
    }); 
    
    useEffect(() => {
      start();
    }, []);

  return (
    <div>
        Time left: {time}
    </div>
  )}






