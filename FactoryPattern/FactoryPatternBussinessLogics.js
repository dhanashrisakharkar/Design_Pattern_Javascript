/*********************************************************************
* @problem : write a program to implement Factory Design Pattern is of software bussiness
* @fileName : FactoryPatternBusinessLogic.js
* @Auther : Dhanashri Sakharkar
/*********************************************************************/

class developer {
    constructor(name) {
        this.name = name
        this.type = "Developer"
    }
}
class tester {
    constructor(name) {
        this.name = name;
        this.type = "tester"
    }
}
class employeeFactory {
    create(name, type) {
        switch (type) {
            case 1:
                return new developer(name);
                break;
            case 2:
                return new tester(name);
                break;
        }
    }

}

module.exports = new employeeFactory;