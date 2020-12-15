/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a Main Bank Account while taking Bussiness logic to this file to get output .
* 	
*  @Auther   : Dhanashri Sakharkar
*  @File     : SingletonPatternMain.js 
*  
************************************************************************************************/

/**
 * @param :- Get data from bussiness file and show the output og current status of bank
 */
const accountData = require("./SingletonPatternBusinessLogic");

let firstInstance = accountData.getInstance();
let secondInstance = accountData.getInstance();

firstInstance.deposite();


secondInstance.withdraw();
console.log("sorry your Money is " + secondInstance.transaction());
