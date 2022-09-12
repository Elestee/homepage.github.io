import { faBackward, faForward, faPause, faPlay, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState, useRef} from "react"
// import styles from "./css/Player.css"

export default function PlayerControl(props)
{
    return (
        <>
            <div className="player--controls">
                <button className="skip-btn" onClick={() => props.skipSong(false)}>
                    <FontAwesomeIcon icon={faBackward} size="lg"/>
                </button>
                <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} size="lg" fixedWidth />
                </button>
                <button className="skip-btn" onClick={() => props.skipSong()}>
                    <FontAwesomeIcon icon={faForward} size="lg"/>
                </button>
            </div>
        </>
    )
}