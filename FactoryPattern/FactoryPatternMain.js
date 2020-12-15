/*********************************************************************
* @problem : write a program to implement Busiiness file for Employee type and name
* @fileName : FactoryPatternMain.js
* @Auther : Dhanashri Sakharkar
/*********************************************************************/

/*
 *@Function:-File Data will take and print output in form of employee
 */
let fileData = require('./FactoryPatternBussinessLogics')

const employees = []

employees.push(fileData.create("Dhanashri  ", 1));
employees.push(fileData.create("Abhishek   ", 2));
employees.push(fileData.create("Rajeshwari ",3));
console.log("*****************" + "***********" + "***************" )
console.log("Name of Employee" +  "  Job Type " + "         Salary" )
console.log("*****************" + "***********" + "***************" )
function say() {
    // console.log("hello my name is " + this.name + " and i am an " + this.type + " My salary is " + this.salary);
    
        console.log(this.name+"       "+this.type+"      "+this.salary)
        console.log("-----------------" + "-----------" + "---------------" )
        
}

employees.forEach(emp => {
    say.call(emp)
})
