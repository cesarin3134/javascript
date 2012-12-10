/**
 * crea una clase persona 
 * @param  {stringa} genero [sesso della persona]
 */
  function persona(genero) {
    this.genero = genero; // utilizo this para crear la propiedad genero de la clase
  };

  persona.prototype.genero = 'persona genero'; //estoy fuera del la clase, utilizo prototype en lugar de this para asignar una nueva propiedad  
  persona.prototype.decirHola = function () {
    alert('hola');
  }

  persona.prototype.decirGenero = function () {
    alert(this.genero); //hago referencia a la propiedad genero de la clase persona
  }

  var persona1 = new persona('masculino'); // crea una instancia del objeto persona 
  var generoDecir = persona1.decirGenero;
  persona1.decirGenero(); //invoco el metodo decirGenero heredado della clase persona

  generoDecir();

  alert(generoDecir === persona1.decirGenero);
  alert(generoDecir == persona.prototype.decirGenero);
  
  generoDecir.call(persona1);
    