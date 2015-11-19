// Reincorpora ejercicios traducidos
// Dominio público. 2015. vtamara@pasosdeJesus.org

if (process.argv.length != 4) {
  console.log("Primer parámetro debe ser ruta absoluta del archivo semilla, " +
      "segundo debe ser ruta absoluta del que tiene " +
      "las traducciones a español por incorporar/actualizar")
  process.exit(1)
}

var path = require('path')
var ruta = path.resolve(process.argv[2])
var j = require(process.argv[2])
if (typeof j.challenges == 'undefined') {
  console.log("Primer parámetro debe ser un archivo semilla json " +
      "(de seed/challenges)")
  process.exit(1)
}
var aes = require(process.argv[3]);
if (typeof aes.challenges == 'undefined') {
  console.log("El segundo parámetro debe ser un archivo json con " + 
      "traduciones a español por insertar/actualizar")
  process.exit(1)
}
var es = aes.challenges
var r = []
var i,k
for(i = 0; i < j.challenges.length; i++) {
  for(k = 0; k < es.length; k++) {
    if (j.challenges[i].id == es[k].id) {
      j.challenges[i].nameEs = es[k].nameEs
      j.challenges[i].descriptionEs = es[k].descriptionEs
    }
  }
}

console.log(JSON.stringify(j, null, 2))
