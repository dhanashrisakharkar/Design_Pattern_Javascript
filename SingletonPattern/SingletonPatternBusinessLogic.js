/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a Main Bank Account which is globly used by the many Users at one time.
*  @Auther   : Dhanashri Sakharkar
*  @File     : SingletonPatternBusinessLogic.js 
*  
************************************************************************************************/

let bankAccount = function () {
    let accountIntance;

    /**
     * @function pattern(): Initialized single instance object in many function by retun it .
     */
    function pattern() {
        let ismoney = false;

        function deposite() {
            ismoney = true;
            // console.log("1000rs Deposited")
        }

        function withdraw() {
            ismoney = false;
            //console.log("500rs is Withdrawal")
        }

        function transaction() {
            return ismoney ? "Money Added" : "Money Withdraw"
        }

        return {
            deposite: deposite,
            withdraw: withdraw,
            transaction: transaction

        };
    }
    /**
     * 
     */
    return {
        getInstance: function () {
            if (!accountIntance) accountIntance = pattern();
            return accountIntance;
        },
    };
};


//module.exports = {bankAccount};
module.exports = new bankAccount();