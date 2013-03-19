      var str = 'GPF e GPM';
  		stringa = str.toLowerCase();
			var stringToArray = stringa.split(' ');
			var arrayOut = [];

			for (var i = 0; i < stringToArray.length; i++) {
				if (stringToArray[i].length > 1) {
					var firstChart = stringToArray[i][0].toUpperCase();
					var remainChart = stringToArray[i].slice(1);
					stringOut = firstChart + remainChart;
					arrayOut.push(stringOut);
				} else {
					arrayOut.push(stringToArray[i]);
				}
			}

			var phraseOut = arrayOut.join(' ');

			console.log(phraseOut); //Gpf e Gpm
