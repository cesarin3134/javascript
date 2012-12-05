/**
 *controllar tipos de argumentos
 */
function sum(a) {
    if ((a instanceof Array) || (a && typeof a == "object" && "length" in a)) { // si a es un array o a es un objeto o en a existe la propiedad length
        var total = 0;
        for (var i = 0; i < a.length; i++) { //ciclo el array
            var element = a[i];
            if (!element) continue; //ignorar elementos null o undefined
            if (typeof element == "number") total += element; //si el elemento de array es un numero summa al total
            else throw new Error("sum() : todos los elementos de array deven ser numeros");
        }
        return total;
    } else throw new Error("sum() el argumento debe ser un array"); //lanzar una excepcion
}
console.log(sum(a)); //llamar la funcion sum()



/**
 * utilizar propiedades del objeto como argumentos
 */
function arrayCopy( /*array*/ from, /*index */ fromStart, to, toStart, length) {
    console.log('ok'); //incluye aki tu condigo
};

function easyCopy(args) {
    arrayCopy(
    args.from,
    args.fromStart || 0,
    args.to,
    args.toStart || 0,
    args.length);
};
var a = [1, 2, 3, , 7, 4];
var b = new Array(4);
easyCopy({
    from: a,
    to: b,
    length: 4
}); //llamar la funcion 



/**
 * convertir valore no numericos en numericos antes de lanzar un error
 */
function flexisum(b) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i]
        if (!element) continue; // ingnora los valores null e undefined de argumentos
        //intentar convertir el argumento en un numero n 
        //basandose en su tipo
        var n;
        switch (typeof element) {
            case "number":
                n = element; //no es necesaria ninguna conversion
                break;
            case "object":
                if (element instanceof Array) //recursivo para matrices
                n = flexisum.apply(this, element);
                else n = element.valueOf(); // metodo valueOf para otros objetos
                break;
            case "function":
                n = element(); //intentar llamar a funciones
                break;
            case "string":
                n = parseFloat(element); // intentar analisis sintactico de las cadenas
                break;
            case "boolean":
                n = NaN; // no se puede convertir valore booleanos
                break;
        }
        // si se obtiene un numero valido sumarlo al total
        if (typeof n == "number" && !isNaN(n)) total += n;
        //caso contrario informa de un error
        else throw new Error("flexisum() no puede convertir " + element + " a numero");
    };
    return total;
}
console.log(flexisum(10, 20));

/**
 *  una funcion se podria asignar a otra varianle y seguir funcionando 
 */

 function square(x) {return x*x;}

     var a = square(4);
     console.log(a);
     b = square;
     c = b(11);
     console.log(c);

/**
 * las funciones no requieren un nombre cuando se asignan a elementos de una matriz
 */
     var ar = new Array(3);
     ar[0] = function(x) {return x*x;}
     ar[1] = 20;
     ar[2] = ar[0](ar[1]);
