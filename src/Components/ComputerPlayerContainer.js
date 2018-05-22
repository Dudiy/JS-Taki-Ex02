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

export default class ComputerPlayerContainer extends React.Component {
    constructor(args) {
        super(...args);
    }

    render() {
        return (
            <div id="computer-player-container">
                {this.props.player.getCards().map((card) => (
                    <div className={"card backOfCard"} key={card.getId()}/>))}
            </div>
        );
    };
}
