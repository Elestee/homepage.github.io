import React from "react";
import { motion, MotionConfig } from "framer-motion";

// export default function CreateCard({click, children, number})
// {
//     return (
//         <div className="card"  onClick={click}>
//             <div className="content" id={number}>{children}</div>
//         </div>
//     )


// }

export default function CreateCard({click, number, title, img})
{

    return (
        <div className="card" onClick={click}>
            <div className="content" id={number}>
                <div className="img-btm-card">
                    <img src={`../${img}`} alt=""></img>
                </div>
                <div className="title-btm-card">{title}</div>
                <div className="highlight"></div>
                
            </div>
        </div>
    )


}