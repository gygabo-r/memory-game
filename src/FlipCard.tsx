import React from 'react';

type Props = {

};

export const FlipCard: React.FC<Props> = props => {



    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front card" role="button">
                </div>
                <div className="flip-card-back card" role="button">
                </div>
            </div>
        </div>
    );
}
