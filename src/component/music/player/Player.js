import PlayerControl from "./PlayerControl";
import "../css/Player.css"
import { useEffect, useRef, useState } from "react";
import React from 'react';
import Slider from "./Slider";
import VolumeSlider from "./VolumeSlider.js"
import SongInformation from "./SongInformation.js"

export default function Player(props)
{
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() =>
    {
        if(isPlaying)
        {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }

    })

    const skipSong = (forwards = true) =>
    {
        if(forwards)
        {
            props.setCurrentSongIndex(() =>
            {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1)
                {
                    temp = 0;
                }

                return temp;
            });
         } else {
            props.setCurrentSongIndex(() =>
            {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0)
                {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    const getCurrentDuration = (e) =>
    {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        const time = e.currentTarget.currentTime;

        setPercentage(+percent);
        setCurrentTime(time.toFixed(2));
    }

    const [percentage, setPercentage] = useState();

    const onChange = (e) =>
    {
        const audio = audioEl.current;
        audio.currentTime = (audio.duration / 100) * e.target.value;
        setPercentage(e.target.value);
    }

    const [volume, setVolume] = useState();

    const onVolumeChange = (e) =>
    {
        const audio = audioEl.current;
        audio.volume = (1 / 100) * e.target.value;
        setVolume(e.target.value);
       
    }

    // const [infoPanel, setInfoPanel] = useState(false);

    return (
        <div className="player-modal">
        <div className="info-panel-trigger">
        <div className = "song-info-container">
            <div className="card-player">
                <div className="card-border-line">
                    <SongInformation 
                    songs={props.songs[props.currentSongIndex]}
                    />
                </div>
            </div>
        </div>
        <div className = "player-container">
            <div className="card-player">
                <div className="card-border-line">
                </div>
                <audio 
                src={`../${props.songs[props.currentSongIndex].music_src}`} 
                ref={audioEl}
                onLoadedData={(e) =>
                {
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}
                onTimeUpdate={getCurrentDuration}
                ></audio>
                <div className="details-img">
                    <img src={`../${props.songs[props.currentSongIndex].img_src}`} alt=""></img>
                </div>
                <h3 className="player-title">{props.songs[props.currentSongIndex].title}</h3>
    
                <Slider 
                onChange={onChange} 
                percentage={percentage}
                songDuration={duration}
                currentTime={currentTime}
                />
                <PlayerControl 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
                />
                <VolumeSlider 
                onVolumeChange = {onVolumeChange}
                volume = {volume}/>
                {/* <p>Next up: {props.nextSong.title}</p> */}
                
            </div>
        </div>
        
        
        </div>
        {/* <div className="more">More</div> */}
        </div>
    )
}