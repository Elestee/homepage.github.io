import { useEffect, useRef, useState } from "react"
import CRUD from "./CRUD";
// import songDB from "../../db/songlist.json"
import styles from "./css/Transaction.css"
import axios from 'axios';
import PostModal from "./PostModal";

export default function Transaction()
{
    const [songDB, setSongDB] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
   
    const closeModal = () =>
    {
        setIsOpenModal(false);
        setImageOpen(false);
    }

    // useEffect(() => 
    // {
    //     fetch("http://localhost:3001/songs")
    //     .then(res =>
    //         {
    //             return res.json();
    //         })
    //     .then(data => 
    //         {
    //             setSongDB(data);
    //         })
    // }, [])

    const fetchSongs = async() =>
    {
        const response = await axios.get("http://localhost:3001/songs");
        setSongDB(response.data);
    }
    
    useEffect(() =>
    {
        fetchSongs();
    }, [])

    return (
        <div className="background-transaction">
            <PostModal 
            open={isOpenModal} 
            close={closeModal}
            imageOpen = {imageOpen}
            setImageOpen = {setImageOpen}
            />
            <div className="background-transaction-header"></div>
            <button className="btn add" onClick={() => setIsOpenModal(true)}>ADD SONG</button>
            <h2 className="table-header">Songs</h2>
                <table className="table">
                    <tbody>
                    <tr>
                        <td><h3>Title</h3></td>
                        <td><h3>Genre</h3></td>
                        <td><h3>Artist</h3></td>
                        <td><h3>Role</h3></td>
                        <td><h3>Year</h3></td>
                        <td><h3>Publisher</h3></td>
                        <td><h3>Country</h3></td>
                        <td><h3>Language</h3></td>
                        <td><h3>Update</h3></td>
                    </tr>
                    {songDB.map(song => 
                        (
                            <tr key={song.id} className="transaction-content">
                                <td>{song.title}</td>
                                <td>{song.genre}</td>
                                <td>{song.artist}</td>
                                <td>{song.role}</td>
                                <td>{song.year}</td>
                                <td>{song.publisher}</td>
                                <td>{song.country}</td>
                                <td>{song.language}</td>
                                <td>
                                    <CRUD song={song}/>
                                </td>
                            </tr>
                        ))}
                </tbody>
                </table>
        </div>
    )
}