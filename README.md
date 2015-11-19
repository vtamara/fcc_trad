# Ayudas para traducir archivos con desafios e instrucciones de FreeCodeCamp

## Estas ayudas como módulo

Primero puede instalar estas ayudas como módulo de su clon de 
las fuentes de FreeCodeCamp con:
```
  git submodule add https://github.com/vtamara/fcc_trad
```

## Google Toolkit Translator

Para traducir rápido recomendamos emplear Google Toolkit Translator, que 
requiere que tenga una cuenta en Google.

Google Toolkit Translator puede importar un archivo JSON para traducirlo
hará traducción automática del documento entero y le permitirá corregir
frase a frase.

## Preparar archivo JSON para usar en Google Toolkit Translator

Google Translator Kit introduce errores en el archivo JSON, por ejemplo al 
separar las entidades HTML y las etiquetas de cierre, y en algunos casos 
intercambiar ." por ".

Por eso conviene pasar lo mínimo que se va a traducir. 
Para generar lo mínimo por traducir de un archivo semilla (ubicados en el 
directorio seeds/challenges y que contienente desafios e instrucciones para 
FreeCodeCamp), puede usar el programa ```exportrad.js``` de estas
ayudas así:
```
node fcc_trad/exportrad.js seed/challenges/jquery.json > /tmp/portrad.json
```

Que generará el archivo ```/tmp/portrad.json``` el cual debe copiar y pegar en 
Google Translator Toolkit (no me ha funcionado bien la opción de subirlo,
pero si la de copiar y pegar).

Para corregir algunos de los errores introducidos por Google Translator Kit 
conviene hacer las siguientes sustituciones (Ctrl+F en la interfaz
de Google Translator Kit):
* ' </ code>' por '</code>'
* '<code> ' por '<code>'
* '"Namees"' por '"nameEs"'
* '"Descriptiones"' por '"descriptionEs"'
* '\ "' por '\"'

También es importante traducir con cuidado y corregir los errores introducidos
para que el JSON resultante sea válido.  Puede verificar si lo es y ubicar
la línea del error pegando la traducción resultante en http://jsonlint.com/

El JSON resultante debe almacenarlo en un archivo (digamos ```/tmp/trad.json```)
y se puede reintegrar al original con:
```
node fcc_trad/importrad.js seed/challenges/jquery.json /tmp/trad.json > /tmp/integrado.json
```
Después se puede revisar o validar nuevamente el archivo generado 
```/tmp/integrado.json``` para finalmente remplazar el archivo semilla inicial.

## Coordinando traducción usando el sistema de seguimiento de problemas (issues) en github 

Cuando comienzas a traducir una sección, por favor revisa si alguien ya está
traduciendo en el problema que le corresponde en 
  https://github.com/FreeCodeCamp/FreeCodeCamp/issues
Si nadie está traduciendo agrega un comentario como "Working on it".

Una vez completes la traducción envia la solicitud de cambio (Pull Request)
a FCC referenciando el número de problema que cierra, por ejemplo en el
título de la solicitud de cambjio incluye "closes #4549" siendo 4549 el 
número de problema que correspode a la sección que se traduce.

## Creación de descripciones para problemas de traducción

Para crear la descripción de un problema de traducción issue con el avance 
en la traducción se usó:
```
node avance.js ../FreeCodeCamp/seed/challenges/jquery.json
```

