// borrow meaning = tomar prestado
function borrowMethods (borrowFrom, addTo) {
    var from = borrowFrom.prototype; // objeto prototipo k presta
    var to = addTo.prototype;
    
    for (m in from){
        if(typeof from[m] != "function") continue; // ingnora lo k sea funcion
        to[m] = from[m];//tomar prestado el metodo
    }
} 
