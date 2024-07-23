import React from 'react';
import {picture_codes, PictureKey} from './picture_codes.ts';

type Props = {
    icon: PictureKey;
    key: string;
};

export const FlipCard: React.FC<Props> = props => {
    const { icon } = props;
    const character = picture_codes[icon];

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front card" role="button">
                </div>
                <div className="flip-card-back card" role="button">
                    <span dangerouslySetInnerHTML={{__html: `${character}`}} />
                </div>
            </div>
        </div>
    );
}
