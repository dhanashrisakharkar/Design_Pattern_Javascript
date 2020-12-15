/*********************************************************************
* @problem : write a program to Observer Design Design Pattern is of Subject Observer
* @fileName : ObserverPatternMain.js
* @Auther : Dhanashri Sakharkar
/*********************************************************************/
/**
 * @param:- Functions Has been creat while taking data in Observer pattern Using array Adding Data 
 */

var Subject = function () {
    let observers = [];
  
    return {
      subscribeObserver: function (observer) {
        observers.push(observer);
      },
      unsubscribeObserver: function (observer) {
        var index = observers.indexOf(observer);
        if (index > -1) {
          observers.splice(index, 1);
        }
      },
      notifyObserver: function (observer) {
        var index = observers.indexOf(observer);
        if (index > -1) {
          observers[index].notify(index);
        }
      },
      notifyAllObservers: function () {
        for (var i = 0; i < observers.length; i++) {
          observers[i].notify(i);
        };
      }
    };
  };

  /**
   * @param:- Printing data in form of index no and what observer notified
   */
  
  var Observer = function () {
    return {
      notify: function (index) {
        console.log("Observer " + index + " is notified!");
      }
    }
  }
  
  var subject = new Subject();
  
  var observer1 = new Observer();
  var observer2 = new Observer();
  var observer3 = new Observer();
  var observer4 = new Observer();
  
  subject.subscribeObserver(observer1);
  subject.subscribeObserver(observer2);
  subject.subscribeObserver(observer3);
  subject.subscribeObserver(observer4);
  

  subject.notifyAllObservers();
     