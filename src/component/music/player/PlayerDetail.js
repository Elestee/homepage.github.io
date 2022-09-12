import styles from "./css/Player.css"

export default function PlayerDetail(props)
{
    return (
        <div className="player-details">
            


            <div className="details-img">
                <img src={props.song.img_src} alt=""></img>
            </div>
            
            
            {/* <div className="player-title">{props.song.title}</div> */}

        </div>
    )
}