/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

import React from "react";
import CardContainer from "./CardContainer";

// const spaceAboveStyle = {
//     height: '15%'
// };

const deckStyle = {
    margin: '0 0 0 15vw'
};

// const spaceBelowStyle = {
//     height: '20%'
// };

export default class DeckContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.clickedDeck = this.clickedDeck.bind(this);
        this.state = {
            hintMode: false
        };

        setInterval(function () {
            // show hint (enlarge deck) when the player has no possible moves
            let activePlayer = this.props.game.getActivePlayer();
            let newState = (activePlayer.getId() === this.props.regularPlayer.getId() &&
                this.props.game.getPossibleMoveForActivePlayer() === null);
            if (newState !== this.state.hintMode) {
                this.setState({
                    hintMode: newState
                });
            }
        }.bind(this), 1.5 * 1000);
    }

    render() {

        return (
            <div id='deck_container'>
                <div align="center" style={deckStyle}>
                    <div id="deck"
                         className={"card backOfCard deckCard clickable-card " + (this.state.hintMode ? 'highlightDeck' : '')}
                         onClick={this.clickedDeck}/>
                </div>
            </div>
        );
    };

    clickedDeck() {
        let cardsTakenFromDeck = this.props.game.takeCardsFromDeck();
        if (cardsTakenFromDeck.length === 0) {
            let cardThatCanBePlaced = this.props.game.getPossibleMoveForActivePlayer();
            const msg = "Cannot take card from the deck when there is a possible move to play\nYou can try placing '" + cardThatCanBePlaced.getValue() + " " + (cardThatCanBePlaced.getColor() !== null ? cardThatCanBePlaced.getColor() : "") + "'";
            alert(msg);
        } else {
            let movePlayedRecord = {
                move: 'tookFromDeck',
                cardsTakenFromDeck: cardsTakenFromDeck
            };
            this.props.pickedUpCardFromDeck(movePlayedRecord);
        }
    }

}