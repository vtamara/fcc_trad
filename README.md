# Ayudas para traducir archivos con desafios e instrucciones de FreeCodeCamp.com

Primero puede instalar estas ayudas como módulo de su clon de 
las fuentes de FreeCodeCamp con:
```
  git submodule add https://github.com/vtamara/fcc_trad
```

Para traducir rápido es conveniente emplear Google Toolkit Translator.

Google Toolkit Translator puede importar un archivo JSON para
traducirlo, por eso es conveniente extraer los nombres y descripciones
no traducidas de un archivo semilla.  Para esto se usa ```exportrad.js``` 
así:
```
node fcc_trad/exportrad.js ruta_absoluta_semilla.json > /tmp/portrad.json
```

Que generará el archivo ```/tmp/portrad.json``` que debe copiarse y pegar en 
Google Translator Toolkit.

Los errores más comunes que introduce Google Translator Kit son: 
* separar las entidades HTML y las etiquetas de cierre
* intercambiar ." por ".

Por eso vale la pena comenzar la traducción haciendo algunos remplazos:
* ' </ code>' por '</code>'
* '<code> ' por '<code>'
* '"Namees"' por '"nameEs"'
* '"Descriptiones"' por '"descriptionEs"'
* '\ "' por '\"'

Por eso es bueno traducir con cuidado estas partes y después validar el
JSON resultante por ejemplo con  http://jsonlint.com/

El JSON resultante (digamos ```/tmp/trad.json```) se puede reintegrar al 
original con:
```
node fcc_trad/importrad.js ruta_absoluta_semilla.json /tmp/trad.json > /tmp/integrado.json
```
Después se puede revisar o validar nuevamente el archivo generado 
```/tmp/integrado.json``` para finalmente remplazar el archivo semilla inicial
y enviar la solicitud de cambio a FCC.
