import { useState } from "react"
import axios from "axios";

export default function CRUD({song: s})
{
    const [song, setSong] = useState(s);
    

    function delSong()
    {
        if(window.confirm("Are you sure you want to delete this item?"))
        {
            // fetch(`http://localhost:3001/songs/${song.id}`, 
            // {
            //     method: 'DELETE'
            // }).then(res =>
            //     {
            //         if(res.ok)
            //         {
            //             setSong({id: 0});
            //         }
            //     })

            axios.delete(`http://localhost:3001/songs/${song.id}`)
            .then(res =>
                {
                    setSong({id: 0})
                })
            .catch(err =>
                {
                    alert(err)
                })
        }
    }

    function postSong()
    {
        axios.post()
    }

    return (
        <>
        <button className="btn-transaction edit">Edit</button>
        <button className="btn-transaction delete" onClick={delSong}>Delete</button>
        </>

    )
}