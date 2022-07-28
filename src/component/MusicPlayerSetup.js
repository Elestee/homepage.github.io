import { useState, useEffect } from "react"
import Player from "./music/Player";
import songDB from "../db/songlist.json"




export default function MusicPlayerSetup({songList})
{
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    // const songList = songDB.songs.filter(song => (song.genre === "EDM") )

    useEffect(() =>
    {
        setNextSongIndex(() =>
        {
            if(currentSongIndex + 1 > songList.length - 1) 
            {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex]);

    return (
        <div>
           <Player 
           currentSongIndex = {currentSongIndex}
           setCurrentSongIndex = {setCurrentSongIndex}
           nextSongIndex = {nextSongIndex}
           songs = {songList}/>
        </div>
    )
}