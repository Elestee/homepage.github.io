import styles from "./css/Genre.module.css"
import Particle from "./Particle";
import CreateCard from "./CreateCard";
import { useState, useEffect } from "react";
import React from "react";
import songDB from "../../db/songlist.json"
import Modal from "./Modal";
import Player from "./Player";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import "./css/style.css";
import Table from "./Table";



export default function Genre()
{

    const [isOpen, setIsOpen] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

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


  const songList = songDB.songs.filter(song => (song.genre === "EDM") )
  

  const cardsGen = songList.map(song => 
    {
      return (
        <CreateCard
        click = {() => setIsOpen(true)}
        number = {song.id}
        title={song.title}
        img={song.img_src}
        >
        </CreateCard>
      )
        
    });

    const [isOpenTable, setIsOpenTable] = useState(true);
    
    let tableClass = ["bottom-area"];

    if(!isOpenTable)
    {
        tableClass = ["bottom-area", "close"];
    }

    function onWheel(apiObj, e) 
    {
      if (e.deltaY < 0) {
        apiObj.scrollNext();
      } else if (e.deltaY > 0) {
        apiObj.scrollPrev();
      }
    }

  return (
      
      <div className="background">
        <Particle />
        <div className="canvas">
            {/* <CreateCard
            click = {() => setIsOpen(true)}
            >
            </CreateCard> */}
        </div>
        
        
        <Modal open={isOpen} close={() => setIsOpen(false)}>
           <Player 
           currentSongIndex = {currentSongIndex}
           setCurrentSongIndex = {setCurrentSongIndex}
           nextSongIndex = {nextSongIndex}
           songs = {songList}/>
        </Modal>
        <div className={tableClass.join(" ")}>
            <button 
            className="cards-open-close" 
            onClick={() => 
                {
                    if(isOpenTable === false)
                    {
                        setIsOpenTable(true);
                    } else {
                        setIsOpenTable(false);
                    }
                    console.log(isOpenTable);
                }}
            >CARDS</button>
            <div className="cards">
            <ScrollMenu onWheel={onWheel}>
                {cardsGen}
            </ScrollMenu>
            </div>
            {/* <Table 
            cardsGen={cardsGen}
            isOpenTable={isOpenTable}/> */}
        </div>
      </div>
  )

    // return (
    //     <>
    //         <section className={styles.canvas}>
    //             <Particle />
    //             <div className={styles.word}>Canvas Area</div>
    //         </section>
    //         <section className={styles.cardArea}>Card Area</section>
    //         <div className={styles.card}></div>
    //     </>
    // )
}