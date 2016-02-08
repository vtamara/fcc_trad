# Recomendaciones para traducir FreeCodeCamp a Español

Vladimir Támara Patiño (vtamara). [vtamara@pasosdeJesus.org](mailto:vtamara@pasosdeJesus.org) Dominio Público de acuerdo a legislación colombiana.

Juan Martínez (justinian336). [jnelsonm64@gmail.com](mailto:jnelsonm64@gmail.com)

Te agradecemos mucho el interés en la traducción de FreeCodeCamp. Este documento es lectura recomendada para todos aquellos que deseen colaborar en este esfuerzo colectivo para dar acceso a FreeCodeCamp a más hispanohablantes.


# 1. Canal de chat 

Únete a nuestro activo canal de chat para revisar el estado de las traducciones, así como para solicitar y dar ayuda. https://gitter.im/AlexTrapp/FreeCodeCampEspa%C3%B1ol

# 2. Revisar el trabajo reciente de otro traductor

En el canal de chat los traductores suelen enviar enlaces a solicitudes de cambio (pull requests) que han hecho pidiendo revisión de otro par.  Si quieres ayudar en una revisión sigue el enlace que irá a la solicitud de cambio en github.com.  Allí en la pestaña "Files changed" podrás ver los cambios en traducción con 2 columnas, al lado izquierdo el archivo original y al lado derecho los cambios introducidos.  

Si deseas sugerir una mejora a la traducción en una línea, pulsa sobre el símbolo + que aparece a la dercha del número de línea cuando pasas con el cursor y escribe tu sugerencia en el espacio que se abre, puedes escribir tu sugerencia en español por cuanto será revisada por el autor de la solicitud de cambio que debe manejar el español.

# 3. Problemas (Issues) relacionados con la traducción a español

En las sección de problemas del repositorio de fuentes de FreeCodeCamp den github.com (https://github.com/FreeCodeCamp/FreeCodeCamp/issues) puede haber 2 tipos de solicitues relacionadas con traducciones de desafíos:
* Unos para iniciar la traducción de uno de los archivos del directorio ```seeds/challenges```. Por ejemplo: https://github.com/FreeCodeCamp/FreeCodeCamp/issues/4544 Había muchos de estos cuando iniciamos al traducción a español y pueden aparecer algunos esporádicos cuando cambia el currículo. 
* Otros que solicitan verificar y actualizar la traducción a español de alguno de los archivos del directorio seeds/challenges. Por ejemplo: https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6493  La idea es reabrir estos cuando se mejoran los archivos en inglés o si hay pendientes mejoras a la traducción a español.

Puedes encontrar ambos tipos  buscando  ```spanish``` (i.e https://github.com/FreeCodeCamp/FreeCodeCamp/issues?utf8=%E2%9C%93&q=is%3Aopen+label%3Atranslation+spanish ). 

Cuando quieras trabajar en alguno de estos te invitamos a poner un comentario del estilo "Working on it" tras lo cual tendrás máximo 15 días para enviar una solicitud de cambio (Pull Request) que bien traduzca el archivo en mención o actualice su traducción a español.

Te invitamos a familiarizarte con los directorios y archivos del directorio ```seeds/challenges``` en https://github.com/FreeCodeCamp/FreeCodeCamp/tree/staging/seed/challenges


# 4. Procedimiento técnico para hacer una traducción

* Instala git en tu computador y crea una cuenta en github.com 
* Desde tu cuenta en github.com bifurca (*fork*) el repositorio de FreeCodeCamp (https://github.com/FreeCodeCamp/FreeCodeCamp), de manera que verás en tu cuenta un directorio FreeCodeCamp
* Clona tu bifuración en tu computador (en el siguiente ejemplo remplaza micuenta por tu cuenta en github [ayuda completa](https://help.github.com/articles/fork-a-repo/)):
```sh
git clone --depth=1 https://github.com/micuenta/FreeCodeCamp.git
cd FreeCodeCamp
```
* Si previamente habías hecho los pasos anteriores, asegurate de tener tu bifurcación actualizada respecto a las fuentes estables de FreeCodeCamp, lo haces con:
```sh
git checkout staging
git remote add upstream https://github.com/freecodecamp/freecodecamp.git
git pull --rebase upstream staging
git push origin staging
```
*  En tu bifurcación del repositorio, crea una rama con un nombre como “add/ES-translation-XXX” donde XXX es el nombre del archivo en el que vas a trabajar.  ([ayuda completa](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)):
```sh
git checkout -b add/ES-translation-basic-javascript
```
*  Ubica el archivo JSON en el directorio ```seeds/challenges``` de tu copia local. Ubica uno a uno los desafios no traducidos y modificalo agregando el nombre del desafio en ```"nameES"``` y su descripción en ```"descriptionES"```. Es importante que mantengas bien la sintaxis del JSON, puedes verificarlo instalando ```node.js``` y pasando el archivo JSON por el interprete, por ejemplo ```node seeds/challenges/basic-javascript.json```. También podrás verificar la sintaxis copiando y pegando el contenido del archivo en http://jsonlint.com.    Si piensas que no puedes continuar deja un comentario en el mismo problema indicándolo para que otra persona pueda continuar donde quedaste . 
* Cuando termines consigna los cambios (*commit*) con una descripción en inglés, tras la descripción y como parte del mensaje de commit, añade "Closes #yyyy" donde yyyy es el número de problema asignado (Esto permite cerrar ese problema automáticamente cuando tu cambio sea fusionado con el repositorio principal.).   Después empuja los cambios (*push*) a tu bifurcación (ver [ayuda completa](https://help.github.com/articles/pushing-to-a-remote/)):
```sh
git commit seed/challenges/basic-javascript.json 
git push origin add/ES-translation-basic-javascript
```
*  Después desde la página web de tu bifurcación en github.com, haz una solicitud de cambio (*pull request*) a la rama ```staging``` del repositorio principal (ver [ayuda completa](https://help.github.com/articles/creating-a-pull-request/)). Elimina la palabra "Closes #yyyy" del título de la solicitud de cambio, y muevela a la descripción de la solicitud de cambio.  

Otros traductores podrán ver tus cambios y hacer comentarios, los cuales puedes adoptar, o utilizar para hacer correcciones y volver a notificar y empujar. 

Ten en cuenta que los lineamientos para efectuar la traducción han sido creados mientras trabajamos en ella, así que necesariamente tendremos que hacer una revisión final una vez hayamos terminado con la traducción preliminar. Por lo tanto, si los comentarios que recibiste no reflejan un problema serio en tus cambios, puedes solicitar en el área de comentarios que se fusionen tus cambios, y efectuar las correcciones posteriormente.

Otra forma en la que puedes colaborar es revisando y haciendo comentarios en los cambios empujados por otros traductores.


# 5. Generalidades sobre la traducción

Preferimos traducir con “tu” en lugar de “usted” y empleando términos ya usados en el español, dejando posibilidad de introducir nuevos términos preferiblemente de acuerdo a los lineamientos del capítulo 2 de https://mail.gnome.org/archives/gnome-es-list/2011-October/pdfm6xxph1jsZ.pdf


# 6. Glosario

*   array: vector o matriz
*   camper: campista
*   challenge: desafío
*   chat: &nbsp;chat 
*   click: pulsar
*   link: enlace
*   script: programa
*   waypoint: punto de referencia

Si deseas opinar o proponer traducciones para nuevos términos, emplea el canal de chat.  Propón el término y la traducción, si no hay consenso haremos votación. Los términos sometidos a votación hasta el momento pueden verse en: 
https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0


# 7. Ayudas para traducir empleando Google Translator Toolkit 

Si quieres automatizar un poco más el procedimiento de traducción utilizando Google Translator Toolkit puede servirte: https://github.com/vtamara/fcc_trad


# 8. Instancia de prueba para ver lo avanzado en la traducción a español

Ver el resultado de tus esfuerzos mientras progresas te permite mantener la motivación. Por esta razón, se ha creado una instancia de prueba de la versión en español de FreeCodeCamp para que veas cómo luce la traducción incluyendo los últimos cambios que se han fusionado. Si deseas el detalle de cada desafío traducido hasta el momento, suscríbete e ingresa a: https://defensor.info:3000/map

# 9. Referencias

* Documentación inicial de las fuentes de FreeCodeCamp. https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md
* Localización de GNOME a español. https://mail.gnome.org/archives/gnome-es-list/2011-October/pdfm6xxph1jsZ.pdf
* Pull Request Contribute https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute
* Ayudas para traducir archivos con desafios e instrucciones de FreeCodeCamp usando Google Translator Toolkit. https://github.com/vtamara/fcc_trad/blob/master/README.md
