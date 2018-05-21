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

export default class PlayerContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            x: 0
        }
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({
            x: this.state.x+1
        })
    }

    render() {
        return (
            <div id="player-container">
                {this.props.player.getCards().map((card) => (
                    <CardContainer card={card} key={card.getId()} game={this.props.game} renderParent={this.handler}/>))}
                {/*{this.props.children}*/}
                <div id="player-overlay" className="screen-overlay"><h1>Please wait for you turn</h1></div>
                <div id="colorPicker" className="screen-overlay">
                    <h2>Please choose a color: </h2>
                    <div className="card red clickable-card"/>
                    <div className="card green clickable-card"/>
                    <div className="card blue clickable-card"/>
                    <div className="card yellow clickable-card"
                         onClick="colorPickerClickedCard('yellow')"/>
                </div>
            </div>
        );
    };
}