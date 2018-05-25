/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";
import CardContainer from "./CardContainer";
import DeckContainer from "./DeckContainer";

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
    }

    render() {
        return (
            <div id='playing_table_container'>

                <div style={spaceAboveStyle}/>

                <DeckContainer game={this.props.game}
                               regularPlayer={this.props.regularPlayer}
                               pickedUpCardFromDeck={this.props.pickedUpCardFromDeck}/>

                <div align="center">
                    <CardContainer id="topCard" card={this.props.game.viewTopCardOnTable()} isClickable={false}
                                   onClick={null}/>
                </div>
                <div style={spaceBelowStyle}/>
                {this.props.children}
            </div>
        );
    };
}