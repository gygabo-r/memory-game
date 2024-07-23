import './App.css'
import {useMemo} from 'react';
import {pickPictures} from './pickPictures.ts';
import {randomizePictures} from './randomizePictures.ts';
import {FlipCard} from './FlipCard.tsx';
import {useGameLogic} from './useGameLogic.ts';

function App() {
    const pickedCards = useMemo(() => {
        const picked = pickPictures(8);
        return randomizePictures(picked);
    }, []);

    const { openCards, matchedCards, handleClick} = useGameLogic()

    return (
        <>
            <div className="grid-container">
                {
                    pickedCards.map((pc, index) => {
                        const key = `${pc}-${index}`;
                        return <FlipCard key={key} cardKey={key} icon={pc} onClick={handleClick} matchedCards={matchedCards} openCards={openCards} />
                    })
                }
            </div>
        </>
    )
}

export default App
