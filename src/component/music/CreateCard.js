import React from "react";

export default function CreateCard({click, tempId, title, img})
{
    return (
        <div className="card" onClick={click}>
            <div className="content" id={tempId}>
                <div className="img-table-card" id={tempId}>
                    <img src={`../${img}`} alt="" id={tempId}></img>
                </div>
                <div className="title-table-card" id={tempId}>{title}</div>
                <div className="highlight" id={tempId}></div>
                
            </div>
        </div>
    )


}