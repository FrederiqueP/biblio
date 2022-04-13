function ListeCouleurTrier (listeCouleur) {
    let index ;
    let indexFinal;
    let elementCourant = [];
    let elementTrie = [];
    let tableauTrie = [];

    indexFinal = listeCouleur.length;
    for (index = 0; index < indexFinal; index++) {

        elementCourant = listeCouleur[index];
        console.log("element courant " + elementCourant);

        elementTrie = CouleurAnalyser(elementCourant);
        console.log("element trie " + elementTrie);

        TableauElementAjouter(tableauTrie, elementTrie);
        
    }
    return(tableauTrie);
}


let lesCouleurs = [
    "rouge",
    "jaune",
    "bleu",
    "vert",
    "violet",
    "orange",
    "marron"
];


// ListeCouleurTrier(lesCouleurs);
// console.log("LISTE COULEUR TRIER " + ListeCouleurTrier(lesCouleurs));
afficherElement(ListeCouleurTrier(lesCouleurs),1);
