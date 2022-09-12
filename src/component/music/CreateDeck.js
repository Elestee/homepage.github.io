export default function CreateDeck({title, tempId})
{

    return (
        <div className="deck" id={tempId}>
            <div className="deck-img" id={tempId}>
                <img src="../img/elestee_hedgehog.png" id={tempId}></img>
            </div>
            <div className="deck-title" id={tempId}>{title}</div>
        </div>
    )
}