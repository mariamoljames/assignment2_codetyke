import React from 'react';
import Button from '../button/Button';

import './Styles.scss';

const Intro = ({gameStatus, setGameStatus}) => {

    return (
        <div className="introContainer">
            {gameStatus.message==='Great Job! Play again.' && <progress value={1} max={1}/>}
                <div className="introContainer--logo">
                    <img alt="logo" src="assets/logo.png" />            
                </div>
                <div className="introContainer--message">
                    {gameStatus.message}
                </div>
                <Button label="start" handleSubmit={()=> setGameStatus({loadIntro: false})} />
        </div>
    )
}

export default Intro
