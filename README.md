# Snow_exercise

**Etape 1: Rassemblement des ressources**

- rendez-vous sur https://free3d.com/
    - récupérer un asset "d'arbre", un asset "maison","lampadaire" et "voiture"
    - testez ces assets sur https://3dviewer.net/
        - quels fichiers marchent ? que remarquez-vous ?
- rendez-vous sur https://www.pexels.com/search/texture/
    - récupérez une texture de neige (pour le sol)
- rendez-vous sur https://meghrinews.com/snow-gif/
    - récupérez le gif de neige sur fond transparent
- rendez-vous sur https://stock.adobe.com/fr/search?k=skybox
    - récupérez un ciel étoilé en hiver (ou autre)
- rendez-vous sur https://freesound.org/
    - récupérez une musique
    - récupérez un son d'animal ou de branches

**Etape 2 : Création d'une scène simple**

- créez un sol avec une texture de neige
- créez un ciel avec l'image précédente

**Etape 3 : Ajout des modèles**

- chargez plusieurs instances de l'arbre dans la scène, deux lampadaires et une maison
    - "Snowy Wooden Hut" (https://skfb.ly/6WwOy) by gecko0307 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    - "Low poly tree" (https://skfb.ly/6qFuZ) by Kotzuo is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    - "Street Lamps" (https://skfb.ly/6TVTC) by Arthur J is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).
- placez-les dans l'image avec l'éditeur de scène
    
    *<ctrl> + <alt> + i* ou *<ctrl> + <option> + i*
    

**Etape 4 : Ajout des lumières**

- placez le bon type de lumière dans les lampadaires
- placez le bon type de lumière dans les fenêtres de la maison
- placez le bon type de lumière globale (la lune ?)

**Etape 5 : Ajout de sons**

- enclenchez une musique dans la scène globale
- liez un son aux arbres (feuilles)

**Etape 6 : Ajout d'interactions**

- au clic sur un arbre, déclenchez le son

**Etape 7 : ajout de la vignette**

- accédez aux propriétés de la caméra pour placer une vignette
- pouvez-vous placer le gif pour produire un effet de neige ?

**Etape 8 : ajout d'une animation**

- ajoutez une voiture qui se déplace dans la scène, avec ses phares qui éclairent l'environnement

**Etape JS++**

- déclenchez le son dès que l'on s'approche d'un arbre (calcul de proximité)
- faites passer des étoiles filantes dans le ciel (objets THREE.JS aléatoires)
