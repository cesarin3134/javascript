  var paragrafo = "thisStringIsGood";

    // insert a space before all caps
  var spaceParagrafo = paragrafo.replace(/([A-Z])/g, ' $1');

    // uppercase the first character
    spaceParagrafo.replace(/^./, function(str){
        return str.toUpperCase();
    })
