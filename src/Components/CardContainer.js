/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";
import {SpecialCard} from "../card";
import {GameState} from "../game";

export default class CardContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.cardClicked = this.cardClicked.bind(this);
        this.state = {
            isVisible: true
        }
    }

    render() {
        if (this.state.isVisible) {
            return (
                <div
                    className={"card " + (this.props.card.getColor() !== null ? this.props.card.getColor() : " noColor") + (this.props.isClickable ? " clickable-card " : "") + (this.props.card.getValue().length > 1 ? "textCard " : "")}
                    cardValue={this.props.card} id={this.props.card.getId()} onClick={this.cardClicked}>
                    {this.props.card.getValue()}
                </div>
            );
        } else {
            return null;
        }
    };

    cardClicked() {
        let cardClicked = this.props.card;
        if (cardClicked.getValue() === SpecialCard.CHANGE_COLOR && game.getGameState().gameState !== GameState.OPEN_TAKI) {
            // document.getElementById("colorPicker").style.display = "flex";
            // document.getElementById("colorPicker").setAttribute("selectedCardId", cardClicked.getId());
            // document.getElementById("deck").classList.add("disabled-button");
            // playerCardsContainer.removeChild(cardElement);
        }
        else {
            if (this.props.game.makeMove(cardClicked)) {
                {
                    this.props.renderParent()
                }
            }
        }
    }
}

CardContainer.defaultProps = {
    card: null,
    isClickable: true
}