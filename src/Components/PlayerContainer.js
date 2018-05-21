/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";
import CardContainer from "./CardContainer";
import {SpecialCard} from "../card";
import {GameState} from "../game";

export default class PlayerContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            movesPlayed: 0
        }
        this.cardClicked = this.cardClicked.bind(this);
    }

    cardClicked(i_Card) {
        if (i_Card.getValue() === SpecialCard.CHANGE_COLOR && this.props.game.getGameState().gameState !== GameState.OPEN_TAKI) {
            // document.getElementById("colorPicker").style.display = "flex";
            // document.getElementById("colorPicker").setAttribute("selectedCardId", cardClicked.getId());
            // document.getElementById("deck").classList.add("disabled-button");
            // playerCardsContainer.removeChild(cardElement);
        }
        else {
            this.props.game.makeMove(i_Card)
        }

        this.setState({
            movesPlayed: this.state.movesPlayed + 1
        });
        let move = {
            card: i_Card
        };
        this.props.addMoveToList(move);
    }

    render() {
        return (
            <div id="player-container">
                {this.props.player.getCards().map((card) => (
                    <CardContainer card={card} key={card.getId()} game={this.props.game}
                                   cardClicked={this.cardClicked}/>))}
                <div id="player-overlay" className="screen-overlay"><h1>Please wait for you turn</h1></div>
                <div id="colorPicker" className="screen-overlay">
                    <h2>Please choose a color: </h2>
                    <div className="card red clickable-card"/>
                    <div className="card green clickable-card"/>
                    <div className="card blue clickable-card"/>
                    <div className="card yellow clickable-card"/>
                </div>
            </div>
        );
    };
}