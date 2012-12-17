	//Primer paso definir la funcion contructora 
	function Complex(real, imaginary) {
		this.x = real;
		this.y = imaginary;
	}
	//Segundo paso definir los metodos de instancia
	Complex.prototype.magnitude = function () {
		return Math.sqrt(this.x*this.x + this.y * this.y);
	}

	Complex.prototype.negative = function() {
		return new Complex(-this.x, - this.y);
	}

	Complex.prototype.add = function(that) {
		return new Complex(this.x + that.x, this.y + that.y);
	}

	Complex.prototype.multiply = function(that) {
		return new Complex(this.x * that.x - this.y * that.y, this.x * that.y + this.y * that.x);
	}

	Complex.prototype.toString = function() {
		return "{" + this.x + "," + this.y + "}";
	};

	Complex.prototype.equals = function(that) {
		return this.x == that.x && this.y == that.y;
	}
	//Tercer paso definir los metodos de la clase, las constantes y cualquier propiedad clase necesaria como las propiedades
	//de la propioa funcion constructora
	Complex.sum = function(a,b) {
		return new Complex(a.x + b.x , a.y + b.y);
	};

	Complex.product = function(a,b) {
		return new Complex(a.x * b.x - a.y * b.y,
						   a.x * b.y + a.y * b.y);
	}
	// esto sono algunos numero complejos predefinidos
	// se defininen como propiedades de clase y se escriben en mayusculas 
	// para indicar k se han disegnado para ser constantes
	
	Complex.ZERO = new Complex(0,0);
	Complex.ONE = new Complex(1,0);
	Complex.I = new Complex(0,1);

	
