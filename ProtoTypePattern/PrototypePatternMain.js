/*********************************************************************
* @problem : write a program to Prototype Design Pattern in main while takung Data from bussiness 
* @fileName : PrototypeDesignPattern.js
* @Auther : Dhanashri Sakharkar

/*********************************************************************/

let ludoGame2 = require('./PrototypePatternBussinessLogic');
let readline = require('readline-sync')

/**
 * @param: Taking User Input and Passing it into the bussiness file function
 */
let name = readline.question("enter your name to play the game :-");
let colour = readline.question("enter your colour between red , blue ,yellow, green:-");
let coin = readline.question("enter your coins:-")

let r = new ludoGame2.LudoGame(name, colour, coin);














