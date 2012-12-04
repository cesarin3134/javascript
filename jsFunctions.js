/*controllar tipos de argumentos*/

function sum(a) {

		if ((a instanceof Array) || (a && typeof a == "object" && "length" in a)) { // si a es un array o a es un objeto o en a existe la propiedad length

			var total = 0;

			for(var i = 0; i < a.length; i++) { //ciclo el array
				var element = a[i];
				if(!element) continue; //ignorar elementos null o undefined
				if(typeof element == "number") total+=element; //si el elemento de array es un numero summa al total
				else throw new Error("sum() : todos los elementos de array deven ser numeros"); 
			}
			return total;
		}
		else throw new Error("sum() el argumento debe ser un array"); //lanzar una excepcion

	}

	console.log(sum(a)); //llamar la funcion sum()
