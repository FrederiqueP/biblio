function afficherElement (listeElement) {
    let index;
    let elementsNombre; // nombre d'éléments dans le tableau
    elementsNombre = listeElement.length;
    let caseCourante;
    
    for (index = 0; index < elementsNombre; index++) {
        caseCourante = listeElement[index];
        console.log(caseCourante);
    }
}


function TableauElementExiste(elementsListe, elementRecherche) {
    let elementsNombre; // nombre d'éléments dans le tableau
    let indexDebut;     // l'emplacement de début de la moitie dans laquelle on recherche  
    let indexFin;
    let index;
    let elementCourant;

    elementsNombre = 1;
    while (elementsNombre > 0) {
        elementsNombre = elementsListe.length;
        index = parseInt(elementsNombre / 2);
        elementCourant = elementsListe[index];
        if (elementCourant == elementRecherche) {
            return true;
        } else if(elementsNombre == 1) {
            return false;
        } else {
            indexDebut = index;
            indexFin = elementsNombre;
        }
        // elementsListe = ListePartieExtraire(elementsListe, indexDebut, indexFin);
        elementsListe =  elementsListe.slice(indexDebut,indexFin);
    }
}

function TableauElementAjouter(tableau, element) {
    
    tableau.push(element); 
}