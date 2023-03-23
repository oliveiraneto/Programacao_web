function palavraMaisLonga(str) {
    var palavras = str.split(" ");
    var maisLonga = "";
    for (var i = 0; i < palavras.length; i++) {
      if (palavras[i].length > maisLonga.length) {
        maisLonga = palavras[i];
      }
    }
    return maisLonga;
  }
  