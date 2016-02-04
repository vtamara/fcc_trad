// Extrae traducciones a español y verifica ortografía
// Dominio público de acuerdo a la legislación colombiana. 2016. vtamara@pasosdeJesus.org

if (process.argv.length != 3) {
  console.log("Primer parámetro debería ser ruta del archivo por revisar")
  process.exit(1)
}

var fs = require('fs');
/* exec: https://dzone.com/articles/execute-unix-command-nodejs */
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
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
  if (typeof ch[i].nameEs != 'undefined' && ch[i].nameEs != '') {
    r.push({
      "id": ch[i].id,
      "nameEs": ch[i].nameEs,
      "descriptionEs": ch[i].descriptionEs
    })
  }
}

fs.writeFileSync("/tmp/tres.txt", JSON.stringify({"challenges": r}, null, 2), 'utf8');
console.log("Sugerimos que ejeucte ahora\n" +
    "aspell -l es -c /tmp/tres.txt");

