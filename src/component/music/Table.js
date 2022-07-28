
import { ScrollMenu } from "react-horizontal-scrolling-menu";
export default function Table({cardsGen, isOpenTable})
{
    let tableClass = ["bottom-area"];
    
    if(isOpenTable)
    {

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
        <div 
        className="cards" 
        style={{}}>
        <ScrollMenu onWheel={onWheel}>
                {cardsGen}
            </ScrollMenu>
        </div>
    )
}