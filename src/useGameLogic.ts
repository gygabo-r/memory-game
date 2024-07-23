import {useState} from 'react';

export const useGameLogic = (numberOfAllCards: number) => {
    const [openCards, setOpenCards] = useState<string[]>([]);
    const [matchedCards, setMatchedCards] = useState(new Set<string>());

    const handleClick = (cardKey: string) => {
        function isCardAlreadyOpen() {
            return openCards.length === 1 && openCards[0] === cardKey;
        }

        if (isCardAlreadyOpen()){
            return;
        }

        if (openCards.length === 2 || !openCards.length){
            setOpenCards([cardKey]);
            return;
        }

        const a = cardKey.split('-')[0];
        const b = openCards[0].split('-')[0];
        if (a === b){
            setOpenCards([]);
            matchedCards.add(openCards[0]);
            matchedCards.add(cardKey);
            setMatchedCards(new Set(matchedCards));
        } else {
            setOpenCards([...openCards, cardKey]);
        }
    }

    return {
        openCards,
        matchedCards,
        handleClick,
        isGameWon: matchedCards.size === numberOfAllCards,
        reset: () => {
            setOpenCards([]);
            setMatchedCards(new Set<string>());
        }
    }
}
