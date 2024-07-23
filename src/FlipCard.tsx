import React from 'react';
import {picture_codes, PictureKey} from './picture_codes.ts';

type Props = {
    icon: PictureKey;
    cardKey: string;
    onClick: (cardKey: string) => void;
    matchedCards: Set<string>;
    openCards: string[];
};

export const FlipCard: React.FC<Props> = props => {
    const { icon, onClick, cardKey, matchedCards, openCards } = props;
    const character = picture_codes[icon];

    const className = matchedCards.has(cardKey) || openCards.some(c => c === cardKey) ? " flip-card-flipped" : "";

    return (
        <div className="flip-card">
            <div className={`flip-card-inner${className}`}>
                <div className="flip-card-front card" role="button" onClick={() => onClick(cardKey)}>
                </div>
                <div className="flip-card-back card" role="button">
                    <span dangerouslySetInnerHTML={{__html: `${character}`}} />
                </div>
            </div>
        </div>
    );
}
