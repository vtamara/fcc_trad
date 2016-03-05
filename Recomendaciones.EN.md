# These are some recommendations for translating FreeCodeCamp to any language

Vladimir Támara Patiño (vtamara). [vtamara@pasosdeJesus.org](mailto:vtamara@pasosdeJesus.org) Public Domain according to the Colombian law.

Juan Martínez (justinian336). [jnelsonm64@gmail.com](mailto:jnelsonm64@gmail.com)

Thank you so much for your interest in translating FreeCodeCamp. Reading this document is recommended for anyone who wishes to participate in this collective effort to bring FreeCodeCamp to more and more people all around the world.


# 1. Chat room

We recommend you to create a chat room in gitter.im exclusive for the language that you're working on, and to communicate there in that language. There everyone can ask questions regarding the status of the translation and coordinate. Help regarding the technical process should also be provided in the chat room. Many people want to collaborate, but get intimidated by the learning curve of Git. While it's not difficult to get started, it's always nice to have someone to help you if you get stuck.
Many users go to the official translators chat room of FreeCodeCamp at https://gitter.im/FreeCodeCamp/Translators . You can go there to recruit new translators for your language every once in a while.

If you find it useful translate this instructions to your language and adapt them for your translation team (see for example original in spanish at: https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md)

# 2. Check the work of another translator

When a translator completes or advances in a translation he/she should send a pull request, that must be reviewed by another peer.  Translators use to send a link to the pull request to the chat room of the translation asking for reviews.  If you see a message requesting reviewal of a translation, go the pull request and there in the tab "Files changed" you will be able to see the changes in the translation in two columns, to the left you will see the original file and to the right the changes proposed.
 
If you want to suggest an improvement to the translation in one line, click on the + (plus sign) that appears next to the line number when you move the cursor over, in the dialog that pops up you can write your suggestion in the language of the translation.

# 3. Issues related with the translation 

In the section for issues of FreeCodeCamp in  github.com (https://github.com/FreeCodeCamp/FreeCodeCamp/issues) there can be 2 kind of requests related with the translation of the challenges:
* Some to start the translation of one of the files in the directory ```seeds/challenges```. See for example: https://github.com/FreeCodeCamp/FreeCodeCamp/issues/4544   
* Other issues requesting to verify or to update an existing translation of one the files in directory ```seeds/challenges```. For example: https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6517 These could be reopened for example when there is a change in a challenge in english.

When you want to work on any of these, we invite you to write a comment like
"Working on it," then you will have up to 15 days to send a pull request 
with a translation or updating an existing one.

We invite you to check the directories and files in  ```seeds/challenges``` for example at https://github.com/FreeCodeCamp/FreeCodeCamp/tree/staging/seed/challenges


# 4. Technical procedure to create a translated file

* Install git in your computer and create an account in github.com.
* From your github.com account *fork* the FreeCodeCamp repository (https://github.com/FreeCodeCamp/FreeCodeCamp). A directory for the forked repository should appear in your account.
* Clone your fork into your computer as in the following example (replace the word myaccount with your github account's name  [find some help here](https://help.github.com/articles/fork-a-repo/)):
```sh
git clone --depth=1 https://github.com/myaccount/FreeCodeCamp.git
cd FreeCodeCamp
```
*  Now, on GitHub, go to the *issues* section of the official repository and search for the language you wanna work on (i.e https://github.com/FreeCodeCamp/FreeCodeCamp/issues?utf8=%E2%9C%93&q=is%3Aopen+label%3Atranslation). Find an issue that nobody is working on -or that has been left unattended during 2 weeks or more (ask first in the chat room)-.  You can take it by simply adding a comment, such as “*Working on it*”.
*  In your forked repository, create a *branch* with a name such as “add/LG-translation-XXX” donde LG is the abbreviated name of the language you're working on, and XXX is the name of the file you're going to modify.  ([more help here](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)):
```sh
git checkout -b add/ES-translation-basic-javascript
```
* Find the JSON file in the ```seeds/challenges``` directory in your local copy. Find the challenge of your interest and modify it by adding the name of the challenge in ```"nameLG"``` and its description in ```"descriptionLG"```, where "LG" is the language of your choice. It's important to keep the proper syntax of the JSON file. You can verify this by installing ```node.js``` and passing the JSON file to the interpreter. For example: ```node seeds/challenges/basic-javascript.json```. You will also be able to verify the syntax by copying and pasting the content of the file in http://jsonlint.com. If you think that you can't continue for a while with the translation, you can leave a comment on the same issue, indicating that another person should continue. You can push your changes so far so the next person won't duplicate your hard work.
* When you're done, *commit* your changes with a brief description in English (regardless of the language). As a part of the message of the commit, and after the description, add "Closes #yyyy" where yyyy is the number of the issue you're working on (this is convenient because it closes the issue automatically when your change gets merged with the main repository.). Afterwards, *push* the changes to your fork (see [the help](https://help.github.com/articles/pushing-to-a-remote/)):
```sh
git commit -m "Challenges of Basic Javascript translated. Closes #4234" seed/challenges/basic-javascript.json 
git push origin add/ES-translation-basic-javascript
```
*  Afterwards, from the webpage of your fork in github.com, make a *pull request* to the branch called ```staging``` in the main repository (see the [help](https://help.github.com/articles/creating-a-pull-request/)). Delete the part that says "Closes #yyyy" from the title of the pull request, and move it to the description area.  

Other translators will be able to see your changes and make comments, which you can discard, or use for making corrections and pushing them again. Be sure, to add some comments explaining the reason of your rejection or what changes you intend to accept. 

Take into account that this file has been created as we work on the translation itself, so many details have not been standardized yet. A final revision might be necessary in order to accomodate any changes made during the process. For this reason, if the comments you receive about your translation don't reflect a serious problem, you can ask in the comments section of the pull request for your changes to be merged, and make the necessary corrections later.

Another way to collaborate in the translation effort is by verifying the translations of other users and making comments in their pull requests.


# 5. General guidelines

* Try not to be too formal yet not too casual, just to keep things friendly.
* In order to make contents more understandable for native speakers of your target language (think of those who don't speak english), translate as much as you can, try to use a word in english only if it is already widely used in the countries where your target language is spoken.


# 6. Glosary

It is efficient if all the translators working on the same language create a glosary showing the translation of words in English employed in FreeCodeCamp's challenges. Sometimes there is more than one way of translating some terms, and regional differences might create confusion (for example, some terms might differ between Spanish from Spain and from Latin America, or between the French language employed in Canada and in France). 
Be democratic! Choose the most appropriate translation by voting and keep a record of the results. One example of such record can be found here: https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0
Use the chat room for discussing the glosary, so no one will miss anything.


# 7. If you need some help with the Google Translator Toolkit 

You may find help automating the translation process by employing the Google Translator Toolkit, please see: https://github.com/vtamara/fcc_trad


# 8. Creating a test instance of FreeCodeCamp

Seeing the final product as you advance with the translation can help you to stay motivated. That's why it is a good idea to create a test instance of FreeCodeCamp where you can include the most recent changes of the translation of the language you're working on and use FreeCodeCamp including those changes. The following test instance was created for the Spanish version of FreeCodeCamp: https://defensor.info:3000/map
In order to create a test instance, go through the following steps:

1. Verify with the other translators of the same language you're working on if a test instance has been created before
2. Follow the instructions of https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md be sure you can see a running instance in english
3. Follow the changes shown in https://github.com/FreeCodeCamp/FreeCodeCamp/commit/d36e33f3938ddd079931a5fb2bc5dc6db37667e5 but instead of ```descriptionEs``` and ```nameEs``` use the keys of your language (e.g ```descriptonFr``` and ```nameFr```)

# 9. References

* More help on translating the freecodecamp curriculum into another language. https://medium.com/@jonathangraham_/translating-the-curriculum-into-another-language-b5ddad26f923#.1vuboq8mf
* Documentation of the source code of FreeCodeCamp. https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md
* Pull Request Contribute https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute
* Help files for translating FreeCodeCamp's challenges and indications using Google Translator Toolkit. https://github.com/vtamara/fcc_trad/blob/master/README.md
