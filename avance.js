// Extrae avance en traducción para incluir en issues de FreeCodeCamp
// Dominio público. 2015. vtamara@pasosdeJesus.org

if (process.argv.length != 3) {
  console.log("Primer parámetro debería ser ruta absoluta del archivo por revisar");
  process.exit(1);
}
var path = require('path')
var ruta = path.resolve(process.argv[2])
var j = require(ruta)
if (typeof j.challenges == 'undefined') {
  console.log("Debería ser un archivo json del directorio seed/challenges")
  process.exit(1)
}
var ch = j.challenges
var r = [];
var i;
for(i = 0; i < ch.length; i++) {
  if (typeof ch[i].nameEs == 'undefined' || ch[i].nameEs == '') {
    console.log('- [ ] ' + ch[i].title)
  } else {
    console.log('- [X] ' + ch[i].title)
  }
}
