/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from "react";


export default class StatisticsContainer extends React.Component {
    constructor(args) {
        super(...args);

    }

    render() {
        return (
            <div id="statistics-container">
                <h3>statistics container</h3>
                {/*<p>{this.props.statistics !== undefined ? this.props.statistics.gameStatistics.totalTurnsPlayed : 0}</p>*/}
                {/*<div>Game timer: <span id="timer">00:00</span></div>*/}
                <br/>
                {/*<button type="button" className="red" onClick="exitGame()" style="width: fit-content">End game*/}
                {/*</button>*/}

                <h5>Cards remaining:</h5>
                <table id="cardsRemainingTable">
                    <tbody>
                    <tr>
                        <th>owner</th>
                        <th>cards</th>
                    </tr>
                    <tr>
                        <td>deck</td>
                        <td id="cardsInDeckCount">{this.props.statistics.gameStatistics.cardsInDeck}</td>
                    </tr>
                    <tr>
                        <td>table</td>
                        <td id="cardsOnTableCount">{this.props.statistics.gameStatistics.cardsOnTable}</td>
                    </tr>
                    </tbody>
                </table>
                <h5>Total turns played: <span
                    id="totalTurnsPlayed">{this.props.statistics.gameStatistics.totalTurnsPlayed}</span></h5>
                <h5>Active player: <span
                    id="activePlayer">{this.props.activePlayer !== undefined ? this.props.activePlayer.getName() : ""}</span>
                </h5>
            </div>
        );
    };
}