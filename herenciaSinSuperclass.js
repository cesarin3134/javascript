// Ahead-Of-Time JavaScript Class Definition and Inheritance
// Yikes, that's kind of ugly.
function BaseClass() {
  //BaseClass constructor code goes here 
}
 
BaseClass.prototype.getName = function() {
  return "BaseClass";
}
 
function SubClass() {
  //SubClass constructor code goes here 
}
 
//Inherit the methods of BaseClass
SubClass.prototype = new BaseClass();
 
//Override the parent's getName method
SubClass.prototype.getName = function() {
  return "SubClass";
}
 
//Alerts "SubClass"
alert(new SubClass().getName());
