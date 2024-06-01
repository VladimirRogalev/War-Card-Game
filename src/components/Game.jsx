import React, {useEffect, useRef, useState} from 'react';
import {createDeck, resultPage} from "../utils/constants.js";


const Game = ({changePage, name, updateGameResult}) => {
    const [compCard, setCompCard] = useState();
    const [playerCard, setPlayerCard] = useState();
    const compDeck = useRef([]);
    const playerDeck = useRef([]);
    const currentScore = useRef([0, 0]);

    useEffect(() => {
        const deck = createDeck();
        deck.sort(() => Math.random() - 0.5);
        compDeck.current = deck.slice(0, deck.length / 2);
        playerDeck.current = deck.slice(deck.length / 2);


    }, []);

    const handleClickNext = () => {
        if (compDeck.current.length) {
            // TODO
            const player = playerDeck.current.pop();
            const comp = compDeck.current.pop();

            if (player.rank > comp.rank) {
                currentScore.current[0]++;
            }
            if (player.rank < comp.rank) {
                currentScore.current[1]++;
            }
            setCompCard(comp);
            setPlayerCard(player);


        } else {
            const playerScore = currentScore.current[0],
                compScore = currentScore.current[1],
                winner = currentScore.current[0] > currentScore.current[1] ? name : 'Comp';

            updateGameResult(winner);
            changePage(resultPage);
        }

    };


    const renderCard = (card) => {
        if (!card) return <div className="card">Card</div>;

        const red = card.suit === 'heart' || card.suit === 'diamond';
        return (
            <div className={`card ${red ? 'red' : 'black'}`}>
                <div className="rank top">{card.value}</div>
                <div className="suit">{card.symbol}</div>
                <div className="rank bottom">{card.value}</div>
            </div>
        );
    };

    return (


        <div className="container  text-center my-5 fw-medium ">
            <div className="row">
                <div className="col-lg-6 col-md-4 mx-auto  border border-primary bg-light rounded-5">
                    <h2>Computer</h2>
                    <div className="card-container comp-deck">{renderCard(compCard)}</div>
                    <div className="card-container mt-4 player-deck">{renderCard(playerCard)}</div>
                    <h2>{name}</h2>
                    <button className="btn btn-primary my-2" onClick={handleClickNext}>
                        NEXT
                    </button>
                </div>
            </div>
        </div>

    );
};


export default Game;