/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a Main Bank Account while taking Bussiness logic to this file to get output .
* 	
*  @Auther   : Dhanashri Sakharkar
*  @File     : SingletonPatternMain.js 
*  
************************************************************************************************/

const accountData = require("./SingletonPatternBusinessLogic");

let firstInstance = accountData.getInstance();
let secondInstance = accountData.getInstance();

firstInstance.deposite();
console.log(firstInstance.transaction());

secondInstance.withdraw();
console.log(secondInstance.transaction());
