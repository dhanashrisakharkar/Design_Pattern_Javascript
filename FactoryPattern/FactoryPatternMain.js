/*********************************************************************
* @problem : write a program to implement Busiiness file for Employee type and name
* @fileName : FactoryPatternMain.js
* @Auther : Dhanashri Sakharkar
/*********************************************************************/

let fileData = require('./FactoryPatternBussinessLogics')

const employees = []

employees.push(fileData.create("dhanashri", 1));
employees.push(fileData.create("rajeshwari", 2));

function say() {
    console.log("hello my name is " + this.name + " and i am an " + this.type);
}
employees.forEach(emp => {
    say.call(emp)
})