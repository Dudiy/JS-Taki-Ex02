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
            movesPlayed: 0,
            colorPickerVisible: false,
            changeColorCardSelected: null //TODO stopped here 28/5
        };
        this.cardClicked = this.cardClicked.bind(this);
        this.colorPickerClickedCard = this.colorPickerClickedCard.bind(this);
    }

    cardClicked(i_Card, additionalData) {
        let currGameState = this.props.game.getGameState().gameState;
        if (i_Card.getValue() === SpecialCard.CHANGE_COLOR && currGameState !== GameState.OPEN_TAKI) {
            if (this.state.colorPickerVisible === false) {
                this.setState({
                    colorPickerVisible: true,
                    changeColorCardSelected: i_Card
                });
            } else {
                this.props.game.makeMove(i_Card, additionalData)
            }
        }
        else {
            if (i_Card.getValue() === SpecialCard.SUPER_TAKI)
                additionalData = this.props.game.viewTopCardOnTable().getColor();
            this.props.game.makeMove(i_Card, additionalData)
        }

        this.setState({
            movesPlayed: this.state.movesPlayed + 1
        });
        let movePlayedRecord = {
            cardPlaced: i_Card,
            player: this.props.player,
            // turnTime: this.props.game.getActivePlayer().getStatistics() //TODO get avg turn time until this move
        };
        this.props.movePlayed(movePlayedRecord);
    }

    colorPickerClickedCard(color) {
        this.setState({colorPickerVisible: false, changeColorCardSelected: null});
        // document.getElementById("deck").classList.remove("disabled-button");
        this.cardClicked(this.state.changeColorCardSelected, color);
    }

    render() {
        return (
            <div id="player-container">
                {this.props.player.getCards().map((card) => (
                    <CardContainer card={card} key={card.getId()} game={this.props.game}
                                   cardClicked={this.cardClicked}/>))}
                <div id="player-overlay" className="screen-overlay" style={this.displayOverlay()}><h1>Please wait for
                    you
                    turn</h1></div>
                <div id="colorPicker" className="screen-overlay"
                     style={this.state.colorPickerVisible ? displayOverlayStyle : null}>
                    <h2>Please choose a color: </h2>
                    <div className="card red clickable-card" onClick={this.colorPickerClickedCard.bind(this, 'red')}/>
                    <div className="card green clickable-card"
                         onClick={this.colorPickerClickedCard.bind(this, 'green')}/>
                    <div className="card blue clickable-card" onClick={this.colorPickerClickedCard.bind(this, 'blue')}/>
                    <div className="card yellow clickable-card"
                         onClick={this.colorPickerClickedCard.bind(this, 'yellow')}/>
                </div>
            </div>
        );
    };

    displayOverlay() {
        if (this.props.game.getActivePlayer() !== this.props.player || this.props.game.getGameState().gameState === GameState.GAME_ENDED) {
            return displayOverlayStyle;
        }
        else
            return null;
    }
}

const displayOverlayStyle = {
    display: "flex"
};
