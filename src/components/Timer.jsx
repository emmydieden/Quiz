import useQuizStore from "../stores/useQuizStore"
import { useTimer } from "use-timer";

export const Timer = () => {
     //UseTimer props
     const { time, start, pause, reset, status } = useTimer( {
        timerType: "DECREMENTAL", 
        initialTime: 3, 
        endTime: 0,
        onTimeOver: () => {
            console.log("Time's out")
        }
    }); 
    
    const startTimer = () => {
        start()
    }
  return (
    <div>
        <button onClick={startTimer}>Start</button>
        Time left: {time}
    </div>
  )
}
