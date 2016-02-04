// Extrae ejercicios que no se han traducido a español para facilitar
// su traducción (por ejemplo con Google Translator Toolkit) y su posterior
// reincorporación.
// Dominio público de acuerdo a la legislación colombiana. 2015. vtamara@pasosdeJesus.org

if (process.argv.length != 3) {
  console.log("Primer parámetro debería ser ruta del archivo por traducir")
  process.exit(1)
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
    r.push({
      "id": ch[i].id,
      "nameEs": ch[i].title,
      "descriptionEs": ch[i].description
    })
  }
}
console.log(JSON.stringify({"challenges": r}, null, 2))
