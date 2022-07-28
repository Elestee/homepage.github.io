import { useState, useEffect } from "react";
import CreateCard from "./CreateCard";
import React from "react";
import Modal from "./Modal";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "./css/Test.css";
import usePreventBodyScroll from "./usePreventBodyScroll";
import songDB from "../db/songlist.json";
import Player from "./music/Player";


const BOTTOM_STYLES =
{

  position: 'sticky',
  top: '100%',
  left: 0,
  backgroundColor: 'rgb(11, 41, 68)'

}

const CARDS_STYLES =
{
  display: 'flex',
  overflowX: 'auto'
}

export default function Test() {

  const [isOpen, setIsOpen] = useState(false);
  // const cardNumber = [];
  // for(let i = 0; i < 20; i++)
  // {
  //   cardNumber.push(i);
  // }

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  // const songList = songDB.songs.filter(song => (song.genre === "EDM") )

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


  // const cards = cardNumber.map((number) => 
  //   {
  //     return (<CreateCard
  //       click = {() => setIsOpen(true)}
  //       >
  //         {number}
  //       </CreateCard>
  //       )
  //   });

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

    function onWheel(apiObj, e) {
      // const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    
      // if (isThouchpad) {
      //   ev.stopPropagation();
      //   return;
      // }
    
      if (e.deltaY < 0) {
        apiObj.scrollNext();
      } else if (e.deltaY > 0) {
        apiObj.scrollPrev();
      }
    }

  const { disableScroll, enableScroll } = usePreventBodyScroll();
  
  const cardContent = document.querySelector("card");
  return (
      
      <div className='canvas'>
        <Modal open={isOpen} close={() => setIsOpen(false)}>
           <Player 
           currentSongIndex = {currentSongIndex}
           setCurrentSongIndex = {setCurrentSongIndex}
           nextSongIndex = {nextSongIndex}
           songs = {songList}/>
        </Modal>
        <div style={BOTTOM_STYLES} className="cards">
          <ScrollMenu
          onWheel={onWheel}>
            {cardsGen}
          </ScrollMenu>
          </div>
      </div>
    
  );

  
};
