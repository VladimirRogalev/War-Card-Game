export const gamePage = 'GAME';
export const resultPage = 'RESULT';
export const startPage = 'START';


export const createDeck = () => {
    const deck = [];
    const suits = [{name: 'club', symbol: '♣'}, {name: 'spade', symbol: '♠'}, {
        name: 'diamond', symbol: '♦'
    }, {name: 'heart', symbol: '♥'}];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            deck.push({rank: j, value: values[j - 1], suit: suits[i].name, symbol: suits[i].symbol});
        }
    }
    return deck;
};


