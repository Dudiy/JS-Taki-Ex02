/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Game, GameType} from "../game";
import {Player} from "../player";
import PlayingTableContainer from "./PlayingTableContainer";
import PlayerContainer from "./PlayerContainer";
import StatisticsContainer from "./StatisticsContainer";
import CardContainer from "./CardContainer";

export default class BaseContainer extends React.Component {
    constructor(args) {
        super(...args);
        this.game = new Game(GameType.ADVANCED, 2, "Taki Man", "ex1");
        this.regularPlayer = new Player("Human player", false);
        this.computerPlayer = new Player("Computer player", true);
        this.initGame = this.initGame.bind(this);
        this.initGame();
    }

    initGame() {
        let game = this.game;
        game.addPlayerToGame(this.regularPlayer);
        game.addPlayerToGame(this.computerPlayer);
        console.log("Game started - top card is: ");
        this.game.viewTopCardOnTable().printCardToConsole();
        document.addEventListener("DOMContentLoaded", function () {
            // let currPlayerIndex = 0;
            // let cardsRemainingTableElement = document.getElementById('cardsRemainingTable');
            // let currPlayer;
            // while (currPlayer = game.getPlayer(currPlayerIndex)) {
            //     let newRow = document.createElement("tr");
            //     newRow.innerHTML = "<td>" + currPlayer.getName() + "</td><td id='cardsRemaining_" + game.getPlayer(currPlayerIndex).getName() + "'>" + currPlayer.getCardsRemainingNum() + "</td>";
            //     cardsRemainingTableElement.appendChild(newRow);
            //     currPlayerIndex++;
            // }
            // updateStatistics();
            // refreshCards();
            // overlayToggle();
            // setKeyMappings();
        });
    }

    render() {
        return (
            <div className="main-container">
                <div style={mainContainerStyle}>
                    <PlayingTableContainer game={this.game}/>
                    <PlayerContainer player={this.regularPlayer} game={this.game}>
                        {/*{this.regularPlayer.getCards().map((card) => (<CardContainer card={card} key={card.getId()} game={this.game} parent={PlayerContainer}/>))}*/}
                    </PlayerContainer>
                </div>

                <div style={statisticsContainerStyle}>
                    <StatisticsContainer/>
                </div>
            </div>
        );
    }
}

const mainContainerStyle = {
    width: '70%'
};

const statisticsContainerStyle = {
    width: '30%',
    display: 'flex',
    alignContent: 'center'
};