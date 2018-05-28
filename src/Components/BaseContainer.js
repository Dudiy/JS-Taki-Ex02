/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Game, {GameState, GameType} from "../game";
import Player from "../player";
import PlayingTableContainer from "./PlayingTableContainer";
import PlayerContainer from "./PlayerContainer";
import StatisticsContainer from "./StatisticsContainer";
import CardContainer from "./CardContainer";
import ComputerPlayerContainer from "./ComputerPlayerContainer";
import takiLogo from "../takiImages/TAKI_logo.png";

const imgStyle = {
    width: 'fit-content',
    height: 'fit-content',
    alignSelf: 'center'
};

export default class BaseContainer extends React.Component {
    constructor(args) {
        super(...args);
        // this.game = new Game(GameType.ADVANCED, 2, "Taki Man", "ex1");

        // this.movesReplayed = [];
        this.initGame = this.initGame.bind(this);
        this.generateGameState = this.generateGameState.bind(this);
        this.updateUIGameState = this.updateUIGameState.bind(this);
        this.initGame();
        this.state = this.generateGameState();
        this.computerPlayPromise = function () {
            const p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (this.game.makeComputerMove.bind(this.game).apply()) {
                        resolve('the function resolved');
                    } else {
                        reject('the function rejected');
                    }
                }, 1500);
            });
            return p;
        };

        this.movePlayed = this.movePlayed.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.callSetState = this.callSetState.bind(this);

        document.onkeypress = (function (keyPressed) {
            if (keyPressed.code === "Space") {
                this. callSetState(this.uiGameStatesArray[0]);
                alert("up to date?!");
            }
        }).bind(this);

    }

    initGame() {
        this.game = new Game(GameType.ADVANCED, 2, "Taki Man", "ex1");
        this.game.setNotifyOnMakeMove(this.updateUIGameState);
        this.regularPlayer = new Player("Human player", false);
        this.computerPlayer = new Player("Computer player", true);
        this.game.addPlayerToGame(this.regularPlayer);
        this.game.addPlayerToGame(this.computerPlayer);
        this.uiGameStatesArray = [];
        this.movesReplayed = [];
        console.log("Game started - top card is: ");
        this.game.viewTopCardOnTable().printCardToConsole();
    }

    generateGameState() {
        return {
            playerWon: this.game.getGameState().gameState === GameState.GAME_ENDED,
            activePlayer: this.game.getActivePlayer(),
            regularPlayerCards: this.game.getFirstHumanPlayer().getCards().slice(),
            computerPlayerCards: this.game.getFirstComputerPlayer().getCards().slice(),
            topCardOnTable: this.game.viewTopCardOnTable(),
            currentGameState: this.game.getGameState(),
            statistics: {
                gameStatistics: this.game.getStatistics(),
                regularPlayerStats: this.game.getFirstHumanPlayer().getStatistics(),
                computerPlayerStats: this.game.getFirstComputerPlayer().getStatistics(),
            }
        };
    }

    updateUIGameState() {
        let gameStateUI = this.generateGameState();
        this.uiGameStatesArray.push(gameStateUI);
        this.callSetState(gameStateUI);
    }

    callSetState(gameStateUI) {
        this.setState({
            playerWon: gameStateUI.playerWon,
            activePlayer: gameStateUI.activePlayer,
            regularPlayerCards: gameStateUI.regularPlayerCards,
            computerPlayerCards: gameStateUI.computerPlayerCards,
            topCardOnTable: gameStateUI.topCardOnTable,
            currentGameState: gameStateUI.currentGameState,
            statistics: {
                gameStatistics: gameStateUI.statistics.gameStatistics,
                regularPlayerStats: gameStateUI.statistics.regularPlayerCards,
                computerPlayerStats: gameStateUI.statistics.computerPlayerStats,
            }
        });
    }

    restartGame() {
        this.initGame();
        this.uiGameStatesArray = [];
        this.updateUIGameState()
    }

    movePlayed() {
        //TODO is it ok to do this instead of set state
        // this.uiGameStatesArray.push(movePlayedRecord);
        // this.setState({
        //     movesPlayed: this.state.totalMovesPlayed++,
        //     activePlayer: this.game.getActivePlayer(),
        //     topCardOnTable: this.game.viewTopCardOnTable()
        // });

        if (this.game.getGameState().gameState === GameState.GAME_ENDED) {
            this.setState({playerWon: true});
        } else if (this.game.getActivePlayer().isComputerPlayer()) {
            this.computerPlayPromise().then(() => {
                this.movePlayed();
            })
        }
    }

    render() {
        return (
            <div id="main-container">
                <div id="play-area-div">
                    <div id="computer-player-and-table-container">
                        <ComputerPlayerContainer cards={this.state.computerPlayerCards}/>
                        <PlayingTableContainer topCardOnTable={this.state.topCardOnTable} game={this.game} regularPlayer={this.regularPlayer}
                                               pickedUpCardFromDeck={this.movePlayed}/>
                        <div id="playerWonScreen" style={this.state.playerWon ? displayOverlayStyle : null}>
                            <h1><span id="winningPlayerName"/> has won the game!</h1>
                            <button className="green" onClick={this.restartGame}>Play again</button>
                            <h3><u>Game statistics:</u></h3>
                            <p id="gameStatistics"/>
                            <p id="playerStatistics"/>
                        </div>
                    </div>
                    <PlayerContainer player={this.regularPlayer} game={this.game} movePlayed={this.movePlayed}/>
                </div>

                <div id="statistics-div">
                    <img src={takiLogo} alt="Taki Logo"
                         style={imgStyle}/>
                    <StatisticsContainer statistics={this.state.statistics} activePlayer={this.state.activePlayer}/>
                </div>
            </div>
        );
    }
}

const displayOverlayStyle = {
    display: "flex"
};
