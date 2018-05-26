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

export class Card {

    constructor(value, color) {
        this._id = Card.nextFreeCardId++;
        this._value = value;
        this._color = color;
    }

    getId() {
        return this._id;
    }

    getValue() {
        return this._value;
    }

    getColor() {
        return this._color;
    }

    setColor(color) {
        if (this._value === SpecialCard.CHANGE_COLOR || this._value === SpecialCard.SUPER_TAKI) {
            this._color = color;
        } else {
            // throw new Error("color can only be changed for \"change color\" cards");
            console.log("card color was not changed - color can only be changed for \"change color\" and \"super taki\" cards");
        }
    }

    isSpecialCard() {
        let isSpecial = false;
        for (let specialCardKey in SpecialCard) {
            if (this._value === SpecialCard[specialCardKey]) {
                isSpecial = true;
            }
        }
        return isSpecial;
    }

    toString() {
        return "Color: " + this._color + ", Value: " + this._value;
    }

    printCardToConsole() {
        console.log(this.toString());
    }

}

Card.nextFreeCardId = 0;
