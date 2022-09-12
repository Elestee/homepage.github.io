import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PostModal({open, close, imageOpen, setImageOpen})
{
    const titleRef = useRef(null);
    const genreRef = useRef(null);
    const artistOneRef = useRef(null);
    const artistTwoRef = useRef(null);
    const artistThreeRef = useRef(null);
    const roleOneRef = useRef(null);
    const roleTwoRef = useRef(null);
    const yearRef = useRef(null);
    const publisherRef = useRef(null);
    const countryRef = useRef(null);
    const languageRef = useRef(null);

    // const [coverFile, setCoverFile] = useState(null);
    // const [coverUrl, setCoverUrl] = useState(null);
    // const [songFile, setSongFile] = useState(null);
   


    // const encodeFile = (fileblob) =>
    // {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(fileblob);
    //     return new Promise((resolve) =>
    //     {
    //         reader.onload = () =>
    //         {
    //             setCoverUrl(reader.result);
    //             resolve();
    //         }
    //     })
    // } 

    // const handleCoverUpload = (e) =>
    // {
    //     setCoverFile(e.target.files[0]);
    //     setImageOpen(true);
    //     // console.log(imageOpen);
    //     encodeFile(e.target.files[0]);

    // }

    // const imagePreview = (openPreview) =>
    // {
    //     if(openPreview)
    //     {
    //         return (
    //         <motion.div 
    //         initial={{scale: 0}}
    //         animate={{scale: 1}}
    //         transition={{
    //             // type: "spring",
    //             // stiffness: "100",
    //             duration: 0.5
    //         }}
    //         className='preview'><img src={coverUrl}></img>
    //         </motion.div>
    //     )}

        
    // }

    // const handleSongUpload = (e) =>
    // {
    //     setSongFile(e.target.files[0]);
    // }

    const createOnSubmit = (e) =>
    {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('image', coverFile);
        // console.log(coverFile);

        axios.post(
            'http://localhost:3001/songs/',
            {
                title: titleRef.current.value,
                genre: genreRef.current.value,
                artist: artistConca(artistOneRef.current.value, artistTwoRef.current.value, artistThreeRef.current.value),
                role: roleConca(roleOneRef.current.value, roleTwoRef.current.value),
                year: yearRef.current.value,
                publisher: publisherRef.current.value,
                country: countryRef.current.value,
                language: languageRef.current.value,
                // headers: 
                // {
                //     'Content-Type': 'multopart/form-data'
                // }
            }
        )

    }

    const artistConca = (one, two, three) =>
    {
        if(two === "" && three === "")
        {
            return one;
        }
        else if(two != "" && three === "")
        {
            return (one + ", " + two);
        }
        else if(two != "" && three != "")
        {
            return (one + ", " + two + ", " + three);
        }
    }

    const roleConca = (one, two) =>
    {
        if(two === "")
        {
            return one;
        }
        else if(two != "")
        {
            return (one + ", " + two);
        }
    }

    const [arrowActive, setArrowActive] = useState(true);

    const arrowActivation = (e) =>
    {
        setArrowActive(!arrowActive);
    }

    const [formCompleted, setFormCompleted] = useState(false);

    const addBtnActivation = () =>
    {
        
        setFormCompleted(!formCompleted);
    }


    return (
        <AnimatePresence>
            {open && (
                <>
                <motion.div 
                initial =
                {{
                    opacity: 0
                }}
                animate =
                {{
                    opacity: 1,
                    transition: 
                    {
                        duration: 0.3
                    }
                }}
                exit =
                {{
                    opacity: 0,
                    transition:
                    {
                        duration: 0.3
                    }
                }}
                onClick={close}
                className="post-modal-overlay"></motion.div>
                
                <motion.div
                initial =
                {{
                    scale: 0
                }}
                animate =
                {{
                    scale: 1,
                    transition: 
                    {
                        delay: 0.3,
                        duration: 0.3
                    }
                }}
                exit =
                {{
                    scale: 0,
                    transition:
                    {
                        duration: 0.3
                    }
                }}
                className="post-modal"
                >
                    <motion.div
                    initial =
                    {{
                        x: 100
                    }}
                    animate =
                    {{
                        x: 0
                    }}
                    >
                    <div className='post-modal-container'
                    // onClick={(e) => e.currentTarget.classList.add('animation')}
                    >
                    
                        <form onSubmit={createOnSubmit}>
                        <div className='modal-contents'>
                            <div className={`modal-one ${arrowActive ? "" : "next"}`}>
                            <h3 className='songinfo'>Song Information</h3>
                            <PageOne 
                            titleRef={titleRef}
                            genreRef={genreRef}
                            artistOneRef={artistOneRef}
                            artistTwoRef={artistTwoRef}
                            artistThreeRef={artistThreeRef}
                            roleOneRef={roleOneRef}
                            roleTwoRef={roleTwoRef}
                            yearRef={yearRef}
                            publisherRef={publisherRef}
                            countryRef={countryRef}
                            languageRef={languageRef}
                            />
                            </div>
                            <div className={`modal-two ${arrowActive ? "" : "next"}`}>
                            <h3 className='songfile'>Song Files</h3>
                            
                            <PageTwo
                            />
                            <div className={`modal-desc ${formCompleted ? "" : "inactive"}`}>Drop your files into the boxes</div>
                            </div>
                            
                        </div>
                        <div 
                        className={`arrow next ${arrowActive ? "" : "inactive"}`} 
                        onClick={arrowActivation}
                        ><FontAwesomeIcon icon={faArrowRight} /></div>
                        <div
                        className={`arrow prev ${arrowActive ? "inactive" : ""}`} 
                        onClick={arrowActivation}
                        ><FontAwesomeIcon icon={faArrowLeft} /></div>
                        </form>

                    </div>
                        
                        
                    </motion.div>
                </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}