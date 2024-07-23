import './App.css'
import {useMemo} from 'react';
import {pickPictures} from './pickPictures.ts';
import {randomizePictures} from './randomizePictures.ts';
import {FlipCard} from './FlipCard.tsx';

function App() {

    const pickedCards = useMemo(() => {
        const picked = pickPictures(8);
        return randomizePictures(picked);
    }, []);

    return (
        <>
            <div className="grid-container">
                {
                    pickedCards.map((pc, index) => {
                        const key = `${pc}-${index}`;
                        return <FlipCard key={key} icon={pc}/>
                    })
                }
            </div>
        </>
    )
}

export default App
