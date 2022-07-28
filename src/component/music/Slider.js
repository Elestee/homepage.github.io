import { useEffect, useState, useRef} from "react"

export default function Slider({onChange, percentage, songDuration, currentTime})
{
    const [position, setPosition] = useState(0); 
    const rangeRef = useRef();
    const thumbRef = useRef();
    useEffect(() =>
    {
        setPosition(percentage);
    }, [percentage])

    function secondsToHms(seconds) {
        if (!seconds) return '00:00'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
    
        let sec = parseInt(duration)
    
        if (sec < 10) {
          sec = `0${sec}`
        }
        if (min < 10) {
          min = `0${min}`
        }
    
        if (parseInt(hours, 10) > 0) {
          return `${parseInt(hours, 10)}:${min}:${sec}`
        } else if (min == 0) {
          return `00:${sec}`
        } else {
          return `${min}:${sec}`
        }
      }

    return (
        // <div className="slider-container">
        <>
        <div className="timer-container">
                    <div className="timer">{secondsToHms(currentTime)}</div>
                    <div className="timer">{secondsToHms(songDuration)}</div>
                </div>
            <div className="container-progress-bar">
            
            <div className="player--bar">
                
                <div 
                className = "bar-cover" 
                style =
                {{
                    width: `${position}%`
                }}></div>
                <div 
                className = "thumb" 
                ref = {thumbRef}
                style =
                {{
                    left: `${position * 0.935}%`
                }}></div>
                <input 
                type='range' 
                ref={rangeRef} 
                value={position} 
                step='0.01' 
                className="bar" 
                onChange={onChange}/>
                
            </div>
        </div>
            </>
    )
}