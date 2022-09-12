import songDB from "../../db/songlist.json"

import React, { memo, useMemo } from "react";
import { useState, useEffect } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import Particle from "./Particle";
import CreateCard from "./CreateCard";
import Modal from "./Modal";
import Player from "./player/Player";
import CreateDeck from "./CreateDeck";

import "./css/style.css";

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

  
  const genreList = songDB.genre;

  const deckGen = genreList.map((genre) => 
  {
    return (
      <CreateDeck 
      title={genre}
      tempId={genre}
    />
    )
  })

  const [genre, setGenre] = useState("EDM");
  const songList = songDB.songs.filter(song => (song.genre === genre))

  const cardsGen = songList.map((song, index) => 
    {
      return (
        <CreateCard
        click = {() => setIsOpen(true)}
        tempId = {index}
        title={song.title}
        img={song.img_src}
        >
        </CreateCard>
      )
    });

    const [isOpenTable, setIsOpenTable] = useState(false);
    
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

    const preventRender = memo(() => 
    {
      return <Particle />;
    });

  return (
      
      <div className="background" 
      // onClick={() => console.log(test)}
      >
        <Particle />
        <div className="canvas" >
          <div className="decks" onClick={(e) =>
          {
            let id = e.target.id;
            setGenre(id);
            setIsOpenTable(true);
          }
          }>
            {deckGen}
        </div>
        </div>
        
        
        <Modal open={isOpen} close={() => setIsOpen(false)}>
           <Player 
           currentSongIndex = {currentSongIndex}
           setCurrentSongIndex = {setCurrentSongIndex}
           nextSongIndex = {nextSongIndex}
           songs = {songList}/>
        </Modal>
        <div className={tableClass.join(" ")} onClick={(e) => console.log(e.currentTarget)}>
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
                }}
            >CARDS</button>
            <div className="cards" 
            onClick={(e) => 
              {
                let id = e.target.id;
                setCurrentSongIndex(id);
              }
            }
            // onWheel={e.currentTarget.}
            >
            {/* <ScrollMenu onWheel={onWheel}>
                {cardsGen}
            </ScrollMenu> */}
            {cardsGen}
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