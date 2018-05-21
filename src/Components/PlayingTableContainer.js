
/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";
import takiLogo from "../takiImages/TAKI_logo.png";
import CardContainer from "./CardContainer";

const imgStyle = {
    width: 'fit-content',
    height: 'fit-content',
    alignSelf: 'center'
};

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
                <img src={takiLogo} alt="Taki Logo"
                     style={imgStyle}/>
                <div style={spaceAboveStyle}/>
                <div align="center" style={deckStyle}>
                    <div id="deck" className="card backOfCard clickable-card"/>
                </div>
                <div align="center">
                    <CardContainer id="topCard" card={this.props.game.viewTopCardOnTable()}/>
                </div>
                <div style={spaceBelowStyle}/>
            </div>
        );
    };
}