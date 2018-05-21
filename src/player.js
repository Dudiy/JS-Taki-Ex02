/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

Player.nextFreePlayerId = 0;

/**
 * can be human/computer player
 *
 * @param i_PlayerName
 * @param i_IsComputer
 * @returns {*}
 * @constructor
 */
export function Player(i_PlayerName, i_IsComputer) {
    let playerId = Player.nextFreePlayerId++;
    let playerName = i_PlayerName;
    let isComputer = i_IsComputer;
    let cards = [];
    let isActive = false;
    let isWinner = false;
    let isLeave = false;
    let currTurnStartTime;
    let turnsPlayed = 0;
    let totalTimePlayed = 0;
    let timesReachedSingleCard = 0;

    return {
        setIsWinner: function (i_IsWinner) {
            isWinner = i_IsWinner;
        },

        setIsLeave: function (i_IsLeave) {
            isLeave = i_IsLeave;
        },

        increaseTimesReachedSingleCard: function () {
            timesReachedSingleCard++;
        },

        getId: function () {
            return playerId;
        },

        getName: function () {
            return playerName;
        },

        getTotalTurnsPlayed: function () {
            return turnsPlayed;
        },

        getAverageTurnTime: function () {
            let totalAvgTimeInSeconds = (totalTimePlayed / turnsPlayed) / 1000;
            let avgTimeSeconds = Math.floor(totalAvgTimeInSeconds % 60);
            let avgTimeMinutes = Math.floor(totalAvgTimeInSeconds / 60);
            if (totalAvgTimeInSeconds.toString() === "NaN" || avgTimeSeconds.toString() === "NaN" ||
                avgTimeMinutes.toString() === "NaN") {
                return 0;
            }
            return (avgTimeMinutes < 10 ? "0" + avgTimeMinutes : avgTimeMinutes) + ":" + (avgTimeSeconds < 10 ? "0" + avgTimeSeconds : avgTimeSeconds);
        },

        getTimesReachedSingleCard: function () {
            return timesReachedSingleCard;
        },

        isComputerPlayer: function () {
            return isComputer;
        },

        isLeave: function () {
            return isLeave;
        },

        // returns a ptr to a card in the player's hand that has the given color
        getCardOfColor: function (color) {
            return cards.find(function (card) {
                return card.getColor() === color;
            });
        },

        // returns a ptr to a card in the player's hand that has the given value
        getCardOfValue: function (value) {
            return cards.find(function (card) {
                return card.getValue() === value;
            });
        },

        getCardOfColorAndValue: function (color, value) {
            return cards.find(function (card) {
                return card.getValue() === value && card.getColor() === color;
            });
        },

        getCards: function () {
            return cards;
        },

        getCardById: function (cardId) {
            return cards.find(function (card) {
                return card.getId() === parseInt(cardId);
            });
        },

        // used for debugging
        getCardsStrArr: function () {
            let cardsToReturn = [];
            cards.forEach(function (card) {
                return cardsToReturn.push(card.getColor() + " " + card.getValue());
            });
            return cardsToReturn.join(", ");
        },

        getCardsRemainingNum: function () {
            return cards.length;
        },

        /**
         *
         * @param isValidFunc
         * @returns {Card}
         */
        getPossibleMove(isValidFunc) {
            let cardThatCanBePlaced = null;
            for (let i = 0; i < cards.length; i++) {
                if (isValidFunc(cards[i]) === true) {
                    cardThatCanBePlaced = cards[i];
                    break;
                }
            }
            return cardThatCanBePlaced;
        },

        startTurn: function () {
            isActive = true;
            currTurnStartTime = new Date();
        },

        endTurn: function () {
            if (currTurnStartTime !== null) {
                isActive = false;
                let endTurnTime = new Date();
                totalTimePlayed += endTurnTime - currTurnStartTime;
                endTurnTime = null;
                currTurnStartTime = null;
                turnsPlayed++;
            }
        },

        addCardsToHand: function (cardsToAdd) {
            if (cardsToAdd instanceof Array && cardsToAdd.length > 0) {
                cards = cards.concat(cardsToAdd);
            }
        },

        // finds the given card in the player's hand removes it from the hand and returns the card, null if the card is not found
        removeCardFromHand: function (cardToRemove) {
            let cardRemoved = null;
            let indexToRemove = cards.findIndex(function (card) {
                return card === cardToRemove;
            });
            if (indexToRemove >= 0 && indexToRemove < cards.length) {
                cardRemoved = cards.splice(indexToRemove, 1);
            }

            return cardRemoved;
        },

        removeAllCardsFromHand: function () {
            cards = [];
        },

        // for testing
        printCardsInHandToConsole: function () {
            console.log("printing all cards in hand");
            for (let i = 0; i < cards.length; i++) {
                console.log(cards[i].getValue() + ", " + cards[i].getColor() + "\n");
            }
        },
    }
}
