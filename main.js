// ------- FONCTIONS
let selectedItem = document.querySelector('p');
let itemCount = 0;
let filesSelected = document.querySelector('.selected-count')

let fileTest = document.querySelector('li');
let fileMain = document.querySelector('li:nth-child(2)');
let fileBirthday = document.querySelector('li:nth-child(3)');

function onClickItem(event)
{
    /*
     * event.currentTarget représente la balise qui a déclenché l'évènement
     * sur lequel on a installé le gestionnaire d'évènement de clic.
     */

    // 1- Récupération du fichier (le <li>) qui a déclenché l'évènement.
    // 2- Activation ou désactivation de la classe CSS de sélection.
    // 3- Recherche de tous les éléments sélectionnés.
    // 4- Mise à jour du message indiquant le nombre de fichiers sélectionnés.
    console.log(event.currentTarget)
    if ( event.currentTarget.className != "selected"){

        event.currentTarget.className = "selected"
        itemCount++
        }
    else {
        event.currentTarget.className = ""
        itemCount--
    }

    if (itemCount > 0 && itemCount <3)
    filesSelected.innerHTML= `<p>Fichier selectionné : <strong>${itemCount}</strong></p>`
    else if(itemCount < 3)
    filesSelected.innerHTML= `<p>Aucune Selection</p>`
    if(itemCount == 3)
    filesSelected.innerHTML= `<p>Tous les fichier ont été sélectionner `
    
}


// ------- CODE PRINCIPAL -------

// 1- Recherche de tous les <li> de la liste de fichiers.
// 2- Recherche du paragraphe <p> affichant le nombre d'éléments sélectionnés.
// 3- Boucle sur la liste de fichiers pour installer un gestionnaire d'évènement de clic (fonction onClickItem).
fileTest.addEventListener('click',onClickItem)
fileMain.addEventListener('click',onClickItem)
fileBirthday.addEventListener('click',onClickItem)