import { faBackward, faForward, faPause, faPlay, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState, useRef} from "react"

export default function VolumeSlider({onVolumeChange, volume})
{
    const [position, setPosition] = useState(60); 
    const rangeRef = useRef();
    const thumbRef = useRef();

    useEffect(() =>
    {
        setPosition(volume);
    }, [volume])

    return (
        <div className="volume-container">
            <div className="icon-volume-mute">
                <FontAwesomeIcon icon={faVolumeXmark} size="xs"/>   
            </div>
            <div className="slider-volume">
                <div 
                className = "bar-cover-volume" 
                style =
                {{
                    width: `${position}%`
                }}></div>
                <div 
                className = "thumb-volume" 
                ref={thumbRef}
                style =
                {{
                    left: `${position * 0.9}%`
                }}></div>
                <input 
                type='range' 
                ref={rangeRef} 
                value={position} 
                step='0.01' 
                className="bar-volume" 
                onChange={onVolumeChange}
                />
            </div>
            <div className="icon-volume">
                <FontAwesomeIcon icon={faVolumeHigh} size="xs"/>
            </div>
        </div>
    )
}