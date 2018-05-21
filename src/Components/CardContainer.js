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
                    cardvalue={this.props.card} id={this.props.card.getId()} onClick={this.cardClicked}>
                    {this.props.card.getValue()}
                </div>
            );
        } else {
            return null;
        }
    };

    cardClicked() {
        let cardClicked = this.props.card;
        if (cardClicked.getValue() === SpecialCard.CHANGE_COLOR && this.props.game.getGameState().gameState !== GameState.OPEN_TAKI) {
            // document.getElementById("colorPicker").style.display = "flex";
            // document.getElementById("colorPicker").setAttribute("selectedCardId", cardClicked.getId());
            // document.getElementById("deck").classList.add("disabled-button");
            // playerCardsContainer.removeChild(cardElement);
        }
        else {
            let res = this.props.game.makeMove(cardClicked);
            this.props.cardClicked();
            const p = new Promise((resolve, reject) => {
                if (res) {
                    resolve('ok');
                } else {
                    reject('the function rejected');
                }
            });
            p.then(this.props.cardClicked());
            // if (this.props.game.makeMove(cardClicked)) {
            //     this.props.cardClicked()
            // }
        }
    }
}

CardContainer.defaultProps = {
    card: null,
    isClickable: true
}