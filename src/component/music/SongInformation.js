export default function SongInformation(props)
{

    return (
        <div>
            <div className="title-song-information">Song Information</div>
            <div className="container-song-information">
                <div className="type-song-information">
                    Genre
                    <div className="content-song-information">{props.songs.genre}</div>
                </div>
                <div className="type-song-information">
                    Contributed Artists
                    <div className="content-song-information">{props.songs.artist}
                    </div>
                </div>
                <div className="type-song-information">
                    Role
                    <div className="content-song-information">{props.songs.role}
                    </div>
                </div>
                <div className="type-song-information">
                    Album
                    <div className="content-song-information">
                    {props.songs?.album || "Single"}
                    </div>
                </div>
                <div className="type-song-information">
                    Year
                    <div className="content-song-information">
                    {props.songs.year}
                    </div>
                </div>
                <div className="type-song-information">
                    Publisher
                    <div className="content-song-information">
                    {props.songs.publisher}{"\n"}{props.songs.country}
                    </div>
                </div>
                <div className="type-song-information">
                    Language
                    <div className="content-song-information">
                    {props.songs.language}
                    </div>
                </div>

            </div>
        </div>
    )
}