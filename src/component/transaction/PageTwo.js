import { useRef, useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTwo()
{
    const wrapperRef = useRef(null);
    const wrapperRefTwo = useRef(null);

    const onDragEnter = () =>
    {
        wrapperRef.current.classList.add('dragover');
    }
    
    const onDragLaeve = () =>
    {
        wrapperRef.current.classList.remove('dragover');
    }

    const onDrop = () =>
    {
        wrapperRef.current.classList.remove('dragover');
    }

    const onDragEnterTwo = () =>
    {
        wrapperRefTwo.current.classList.add('dragover');
    }
    
    const onDragLaeveTwo = () =>
    {
        wrapperRefTwo.current.classList.remove('dragover');
    }

    const onDropTwo = () =>
    {
        wrapperRefTwo.current.classList.remove('dragover');
    }

    const [fileList, setFileList] = useState([]);

    const onFileDrop = (e) =>
    {
        const newFile = e.target.files[0];
        if(newFile)
        {
            const updatedList = [...FileList, newFile];
            setFileList(updatedList);
        }
    }

    const [coverFile, setCoverFile] = useState(null);
    const [coverUrl, setCoverUrl] = useState(null);
    const [songFile, setSongFile] = useState(null);
   
    const handleCoverUpload = (e) =>
    {
        setCoverFile(e.target.files[0]);
        encodeFile(e.target.files[0]);

    }

    const encodeFile = (fileblob) =>
    {
        const reader = new FileReader();
        reader.readAsDataURL(fileblob);
        return new Promise((resolve) =>
        {
            reader.onload = () =>
            {
                setCoverUrl(reader.result);
                resolve();
            }
        })
    } 

    const imagePreview = () =>
    {
            return (
            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{
                // type: "spring",
                // stiffness: "100",
                duration: 0.5
            }}
            className='preview'><img src={coverUrl}></img>
            </motion.div>
        )

        
    }

    return (
        <>
            <AnimatePresence>
            <div 
            className='input-area-file' 
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLaeve}
            onDrop={onDrop}
            >
                <motion.div>
                <img src="svg/upload-solid.svg"></img>
                <label className='post-modal-file-label'>Cover File</label>
                <input type='file' onChange={handleCoverUpload}></input>
                </motion.div>
                <motion.div 
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 0.5}}
                className='preview'><img src={coverUrl}></img>
                </motion.div>
            </div>
            </AnimatePresence>
            
            <div
            className='input-area-file' 
            ref={wrapperRefTwo}
            onDragEnter={onDragEnterTwo}
            onDragLeave={onDragLaeveTwo}
            onDrop={onDropTwo}>
                <img src="svg/upload-solid.svg"></img>
                <label className='post-modal-file-label'>Song File</label>
                <input type='file'></input>
            </div>
                
            <input type='submit' value='ADD' className="submit"></input>
        </>
    )
}
