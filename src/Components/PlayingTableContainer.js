/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";
import CardContainer from "./CardContainer";



const spaceAboveStyle = {
    height: '15%'
};

const deckStyle = {
    margin: '0 0 0 15vw'
};

const spaceBelowStyle = {
    height: '20%'
};

export default class PlayingTableContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.clickedDeck = this.clickedDeck.bind(this);
    }

    render() {
        return (
            <div id='playing_table_container'>

                <div style={spaceAboveStyle}/>
                <div align="center" style={deckStyle}>
                    <div id="deck" className="card backOfCard deckCard clickable-card" onClick={this.clickedDeck}/>
                </div>
                <div align="center">
                    <CardContainer id="topCard" card={this.props.game.viewTopCardOnTable()} isClickable={false}
                                   onClick={null}/>
                </div>
                <div style={spaceBelowStyle}/>
                {this.props.children}
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
            }
            this.props.pickedUpCardFromDeck(movePlayedRecord);
        }
    }
}