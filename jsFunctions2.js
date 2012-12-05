/**
 * definimos algunas funciones simples
 */

function add(x,y) {return x + y;}
function subtract(x,y) {return x - y;}
function multiply(x,y) {return x * y;}
function divide(x,y) {return x / y;}

//paso una de las funciones como paramentros a una nueva funciones

function operator(operator, operand1, operand2){
    return operator(operand1,operand2);
}

// calculamos el valor de (2+3) + (4*5)

var i = operator(add,add(2,3),multiply(4,5));

console.log(i);


/**
 * ahora lo haremos usando literales de funciones dentro de un literal de objeto
 */

var operators = {
    add: function(x,y){return x + y; },
    subtract : function(x,y){return x - y;},
    multiply : function(x,y) {return x * y;},
    divide : function(x,y) {return x / y;},
    pow : Math.pow // funciona tambien para funziones predefinidas
};

function operate2(opName, operand1, operand2) {

  if (typeof operators[opName] == "function")
      return operators[opName](operand1,operand2);
    else throw "operador desconocido";    
};

//llamamos la funcion para calcular el valor ("hello" + "" + "world")
  var j = operate2("add","hello", operate2("add"," ","world"));
  console.log(j); 
  //usamos la funcion pow predefinida
   var k = operate2("pow",10,2);
   console.log(k);
 

