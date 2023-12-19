# limiteCharacter - module pour Node.js
limiteCharacter, verifie si la longueur d'une chaîne de caractères est comprise entre une valeur minimale (par défaut, 2) et une valeur maximale (par défaut, 30) et renvoie true si c'est le cas, sinon false.


## installation
Placer le fichier limiteCharacter.js dans le dossier modules


## utilisation
Dans le fichier, ajouter sur la première ligne
```
const { limiteCharacter } = require('./limiteCharacter')
```

Exemple d'utilisation
```
// Exemple d'utilisation avec une chaîne de caractères
const chaineValide = 'Exemple'
const chaineTropCourte = 'A'
const chaineTropLongue = 'Ceci est une chaîne de caractères trop longue pour être valide selon la limite définie.'


// Vérifier la validité des chaînes de caractères
console.log('La chaîne ' + chaineValide + ' est ' + (limiteCharacter(chaineValide) ? 'valide' : 'invalide))
console.log('La chaîne ' + chaineTropCourte + ' est ' + (limiteCharacter(chaineTropCourte) ? 'valide' : 'invalide))
console.log('La chaîne ' + chaineTropLongue + ' est ' + (limiteCharacter(chaineTropLongue) ? 'valide' : 'invalide))


// Vérifier la validité de la chaîne avec la nouvelle valeur maximale
console.log('La chaîne ' + chaineValide + ' est ' + (limiteCharacter(chaineValide, 5, 10) ? 'valide' : 'invalide))
```
