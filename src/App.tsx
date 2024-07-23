import './App.css'
import {useState} from 'react';
import {pickPictures} from './pickPictures.ts';
import {randomizePictures} from './randomizePictures.ts';
import {FlipCard} from './FlipCard.tsx';
import {useGameLogic} from './useGameLogic.ts';

const pickCards = () => {
    const picked = pickPictures(8);
    return randomizePictures(picked);
}

function App() {
    const [pickedCards, setPickedCards] = useState(pickCards())


    const {openCards, matchedCards, handleClick, isGameWon, reset} = useGameLogic(pickedCards.length);
    const handleStartNew = () => {
        setPickedCards(pickCards());
        reset();
    }

    return (
        <>
            {!isGameWon &&
                (<div className="grid-container">
                    {
                        pickedCards.map((pc, index) => {
                            const key = `${pc}-${index}`;
                            return <FlipCard key={key} cardKey={key} icon={pc} onClick={handleClick}
                                             matchedCards={matchedCards} openCards={openCards}/>
                        })
                    }
                </div>)}
            {isGameWon && (
                <div className="you-won-container">
                    <div className="you-won-icon" dangerouslySetInnerHTML={{__html: "&#127882;"}}></div>
                    <button className="you-won-button" onClick={handleStartNew}>Start new game</button>
                </div>
            )}
        </>
    )
}

export default App
