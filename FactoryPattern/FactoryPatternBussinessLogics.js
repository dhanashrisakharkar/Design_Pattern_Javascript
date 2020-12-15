/*********************************************************************
* @problem : write a program to implement Factory Design Pattern is of software bussiness
* @fileName : FactoryPatternBusinessLogic.js
* @Auther : Dhanashri Sakharkar
/*********************************************************************/
/**
 * @class :- Class has been make for developer name , type an salary
 */
class developer {
    constructor(name) {
        this.name = name
        this.type = "Developer   "
        this.salary = "50000"
    }
}
class tester {
    constructor(name) {
        this.name = name;
        this.type = "tester      "
        this.salary = "35000"
    }
}
class dataAnalyst {
    constructor(name) {
        this.name = name;
        this.type = "Data Analyst"
        this.salary = "45000"
    }
}
/**
 * @param : employeeFactory class has made for taking data in form of Factory Pattern Using Switch Case.
 */
class employeeFactory {
    create(name, type) {
        switch (type) {
            case 1:
                return new developer(name);
                break;
            case 2:
                return new tester(name);
                break;
            case 3:
                return new dataAnalyst(name);
                break;
        }
    }

}

module.exports = new employeeFactory;