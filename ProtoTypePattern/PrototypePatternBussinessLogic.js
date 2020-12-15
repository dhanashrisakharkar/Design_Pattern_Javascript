/*********************************************************************
* @problem : write a program in Forn of Proto type pattern while using subject Ludo Game
* @fileName : PrototypePatternBussinessLogic.js
* @Auther : Dhanashri Sakharkar
/*********************************************************************/

/**
 * @param :- taking data fron user into the ludogame function 
 */
function LudoGame(namePlayer, takeColour, myCoin) {
    this.playersName = namePlayer
    this.colours = takeColour
    this.coins = myCoin
    this.type = "Ludo Game",
    this.players = "4"


    LudoGame.prototype.get = function () {

        return this.playersName

    }
    LudoGame.prototype.set = function (newName, newColour, newCoin) {
        this.name = newName;
        this.colour = newColour
        this.coin = newCoin;

    }
    /**
     * 
     * @param :- Printing the prototypr pattern data
     */

    function printData(type, players, name, colour, coin) {
        console.log("***************************************************")
        console.log("Game      " + "  players ")
        console.log("                                                  ")
        console.log(type + "     " + players)
        console.log("                                                  ")
        console.log("***************************************************")
        console.log("player Name   " + "     Colour " + "         coin      ");
        console.log("                                                    ")
        console.log(name + "             " + colour + "           " + coin)
        console.log("                                                  ")
        console.log("***************************************************")

    }

    printData(this.type, this.players, this.playersName, this.colours, this.coins);

}
module.exports = { LudoGame };


