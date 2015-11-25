# Lineamientos para traducir FreeCodeCamp a Español

Vladimir Támara Patiño (vtamara). [vtamara@pasosdeJesus.org](mailto:vtamara@pasosdeJesus.org) Dominio Público de acuerdo a legislación colombiana.

Juan Martínez (justinian336). [jnelsonm64@gmail.com](mailto:jnelsonm64@gmail.com)

Te agradecemos mucho el interés en la traducción de FreeCodeCamp. Este documento es lectura recomendada para todos aquellos que deseen colaborar en este esfuerzo colectivo para dar acceso a FreeCodeCamp a más hispanohablantes.


# 1. Canal de chat 

Únete a nuestro activo canal de chat para revisar el estado de las traducciones, así como para solicitar y dar ayuda. https://gitter.im/AlexTrapp/FreeCodeCampEspa%C3%B1ol


# 2. Procedimiento técnico para hacer una traducción

*  Una vez tengas git en tu computador, bifurca (*fork*) el repositorio de FreeCodeCamp y clónalo en tu computador ([ayuda completa](https://help.github.com/articles/fork-a-repo/)):
```sh
git clone --depth=1 https://github.com/freecodecamp/freecodecamp.git freecodecamp
```
*  Dirígete a la sección de problemas (*issues*) del repositorio oficial y busca spanish (i.e https://github.com/FreeCodeCamp/FreeCodeCamp/issues?utf8=%E2%9C%93&q=is%3Aopen+label%3Atranslation+spanish). Ubica un problema en el que nadie está trabajando -o que lleva más de 2 semanas sin reportar avance-.  Podrás tomarlo añadiendo un comentario como “*Trabajando en este - Working on it*”.
*  En tu bifurcación del repositorio, crea una rama con un nombre como “add/ES-translation-XXX” donde XXX es el nombre del archivo en el que vas a trabajar.  ([ayuda completa](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)):
```sh
git checkout -b add/ES-translation-basic-javascript
```
*  Ubica el archivo JSON en el directorio ```seeds/challenges``` de tu copia local. Ubica uno a uno los desafios no traducidos y modificalo agregando el nombre del desafio en ```"nameES"``` y su descripción en ```"descriptionES"```. Es importante que mantengas bien la sintaxis del JSON, puedes verificarlo instalando ```node.js``` y pasando el archivo JSON por el interprete, por ejemplo ```node seeds/challenges/basic-javascript.json```. También podrás verificar la sintaxis copiando y pegando el contenido del archivo en http://jsonlint.com.    Si piensas que no puedes continuar deja un comentario en el mismo problema indicándolo para que otra persona pueda continuar donde quedaste . 
* Cuando termines notifica los cambios (*commit*) con una descripción en inglés y empujalos (*push*) a tu bifurcación (ver [ayuda completa](https://help.github.com/articles/pushing-to-a-remote/)):
```sh
git commit -m "Challenges translated" seed/challenges/basic-javascript.json 
git push origin add/ES-translation-basic-javascript
```
*  Después desde la página web de tu bifurcación en github.com, haz una solicitud de cambio (*pull request*) a la rama ```staging``` del repositorio principal (ver [ayuda completa](https://help.github.com/articles/creating-a-pull-request/)). En la descripción de tu solicitud de cambio incluye la frase “*closes ###*”, donde ### es el número del problema en el que trabajaste. Esto permite cerrar ese problema automáticamente cuando tu cambio sea fusionado con el repositorio principal.

Otros traductores podrán ver tus cambios y hacer comentarios, los cuales puedes adoptar, o utilizar para hacer correcciones y volver a notificar y empujar. 

Ten en cuenta que los lineamientos para efectuar la traducción han sido creados mientras trabajamos en ella, así que necesariamente tendremos que hacer una revisión final una vez hayamos terminado con la traducción preliminar. Por lo tanto, si los comentarios que recibiste no reflejan un problema serio en tus cambios, puedes solicitar en el área de comentarios que se fusionen tus cambios, y efectuar las correcciones posteriormente.

Otra forma en la que puedes colaborar es revisando y haciendo comentarios en los cambios empujados por otros traductores.


# 3. Generalidades sobre la traducción

Preferimos traducir con “tu” en lugar de “usted” y empleando términos ya usados en el español, dejando posibilidad de introducir nuevos términos preferiblemente de acuerdo a los lineamientos del capítulo 2 de https://mail.gnome.org/archives/gnome-es-list/2011-October/pdfm6xxph1jsZ.pdf


# 4. Glosario

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


# 5. Ayudas para traducir empleando Google Translator Toolkit 

Si quieres automatizar un poco más el procedimiento de traducción utilizando Google Translator Toolkit puede servirte: https://github.com/vtamara/fcc_trad


# 6. Instancia de prueba para ver lo avanzado en la traducción a español

Ver el resultado de tus esfuerzos mientras progresas te permite mantener la motivación. Por esta razón, se ha creado una instancia de prueba de la versión en español de FreeCodeCamp para que veas cómo luce la traducción incluyendo los últimos cambios que se han fusionado. Si deseas el detalle de cada desafío traducido hasta el momento, suscríbete e ingresa a: https://defensor.info:3000/map

# 7. Referencias

* Documentación inicial de las fuentes de FreeCodeCamp. https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md
* Localización de GNOME a español. https://mail.gnome.org/archives/gnome-es-list/2011-October/pdfm6xxph1jsZ.pdf
* Pull Request Contribute https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute
* Ayudas para traducir archivos con desafios e instrucciones de FreeCodeCamp usando Google Translator Toolkit. https://github.com/vtamara/fcc_trad/blob/master/README.md
