/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

import React from "react";
import CardContainer from "./CardContainer";
import DeckContainer from "./DeckContainer";

export default class PlayingTableContainer extends React.Component {
    constructor(args) {
        super(...args);
    }

    render() {
        return (
            <div id='playing_table_container'>
                <DeckContainer game={this.props.game}
                               regularPlayer={this.props.regularPlayer}
                               pickedUpCardFromDeck={this.props.pickedUpCardFromDeck}
                               deckDisabled={this.props.deckDisabled}
                               highlightDeck={this.props.highlightDeck}/>
                <div align="center">
                    <CardContainer id="topCard"
                                   card={this.props.topCardOnTable}
                                   isClickable={false} onClick={null}/>
                </div>
                <div id="notificationDiv" className={this.props.userMessage !== null ? 'fadeIn' : 'fadeOut'}>
                    {this.props.userMessage}
                </div>
                {this.props.children}
            </div>
        );
    };
}