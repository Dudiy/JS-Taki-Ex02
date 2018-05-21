/**
 * Dudi Yecheskel - 200441749
 * Or Mantzur - 204311997
 */

export const NUMBER_CARD = ["1", "3", "4", "5", "6", "7", "8", "9"];
export const SpecialCard = {
    TAKI: "taki",
    STOP: "stop",
    CHANGE_COLOR: "change color",
    PLUS: "plus",
    // TODO advance game
    PLUS_2: "+2",
    SUPER_TAKI: "super taki"
};
export const Color = {
    allColors: ["red", "green", "blue", "yellow"],

    getRandomColor: function () {
        let randomIndex = Math.floor((Math.random() * 10) % Object.keys(Color.allColors).length);
        return Color.allColors[randomIndex];
    }
};
Card.nextFreeCardId = 0;

export function Card(color, value) {
    let cardId = Card.nextFreeCardId++;
    let cardValue = value;
    let cardColor = color;

    return {
        getId: function () {
            return cardId;
        },

        getColor: function () {
            return cardColor;
        },

        getValue: function () {
            return cardValue;
        },

        setColor: function (color) {
            if (cardValue !== SpecialCard.CHANGE_COLOR) {
                // throw new Error("color can only be changed for \"change color\" cards");
                console.log("card color was not changed - color can only be changed for \"change color\" cards");
            } else {
                cardColor = color;
            }
        },

        printCardToConsole: function () {
            console.log("Color: " + cardColor + ", Value: " + cardValue);
        },

        isSpecialCard: function () {
            let isSpecial = false;
            for (let specialCardKey in SpecialCard) {
                if (value === SpecialCard[specialCardKey]) {
                    isSpecial = true;
                }
            }
            return isSpecial;
        }
    };
}