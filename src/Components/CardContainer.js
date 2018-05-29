/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";

export default class CardContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.generateClassName = this.generateClassName.bind(this);
    }

    generateClassName() {
        let className = "card ";
        if (this.props.isComputerPlayerCard)
            className = className.concat(" backOfCard ");
        else {
            className = className.concat((this.props.card.getColor() !== null) ? this.props.card.getColor() : " noColor");
            if (this.props.isClickable)
                className = className.concat(" clickable-card ");
            if (this.props.card.getValue().length > 1)
                className = className.concat(" textCard ");
        }
        return className;
    }

    render() {
        return (
            <div
                className={this.generateClassName()}
                cardvalue={this.props.card} id={this.props.card.getId()}
                onClick={(this.props.cardClicked !== undefined) ? this.props.cardClicked.bind(this, this.props.card) : null}>
                {this.props.card.getValue()}
            </div>
        );
    };
}


CardContainer.defaultProps = {
    card: null,
    isClickable: true,
    isComputerPlayerCard: false
};