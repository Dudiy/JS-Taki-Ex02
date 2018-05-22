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
    }

    render() {
        return (
            <div
                className={"card " + (this.props.card.getColor() !== null ? this.props.card.getColor() : " noColor") + (this.props.isClickable ? " clickable-card " : "") + (this.props.card.getValue().length > 1 ? " textCard " : "")}
                cardvalue={this.props.card} id={this.props.card.getId()}
                onClick={(this.props.cardClicked !== undefined) ? this.props.cardClicked.bind(this, this.props.card) : null}>
                {this.props.card.getValue()}
            </div>
        );
    };
}

CardContainer.defaultProps = {
    card: null,
    isClickable: true
};