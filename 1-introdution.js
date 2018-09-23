//Exercise 1
/*
Create a function, makeCounter(someObj), which turns someObj (a plain old
Javascript Object) into an Iterator. This Iterator should count the positive
integers starting at 1, through to and including 10
 */
module.exports = function makeCounter(someObj, maxNum) {
  var num = 0,
      done = false,
      last = 0;

  someObj.next = function() {

    if (num < 10) {
      num++;
    } else {
      done = true;
    }

    return {
      value: num,
      done: done
    }

  }
maxNum.next = function(){
  if(last <= 10){
    last ++;
  } else {
    done: true;
  }
  return{
    value: last,
    done:done
  }
  
}

}