function ContientCouleur(couleur, primaire ){
    let listeRouge = ["rouge"];
    let listeJaune = ["jaune"];
    let listeBleu = ["bleu"];
    let listeVert = ["vert"];
    let listeViolet = ["violet"];
    let listeOrange = ["orange"];
    let listeMarron = ["marron"];

    if( primaire == "rouge") {
        return (TableauElementExiste(listeRouge, couleur)
                || TableauElementExiste(listeViolet, couleur)
                || TableauElementExiste(listeOrange, couleur)
                || TableauElementExiste(listeMarron, couleur)
                )
    }

    if( primaire == "jaune") {
        return (TableauElementExiste(listeJaune, couleur)
                || TableauElementExiste(listeOrange, couleur)
                || TableauElementExiste(listeVert, couleur)
                || TableauElementExiste(listeMarron, couleur)
                )
    }
    // if( primaire == "bleu") {
    //     return (TableauElementExiste(listeBleu, couleur)
    //             || TableauElementExiste(listeVert, couleur)
    //             || TableauElementExiste(listeViolet, couleur)
    //             || TableauElementExiste(listeMarron, couleur)
    //             )
    // }

    // utiliser indexOf pour la recherche par dichotomie
    // La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. 
    // Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.
    // arr.indexOf(elementRecherche, indiceDebut)
    // retourne -1 si n'existe pas
    if( primaire == "bleu") {
        if ((listeBleu.indexOf(couleur) > -1)
            || (listeVert.indexOf(couleur) > -1) 
            || (listeViolet.indexOf(couleur) > -1)
            || (listeMarron.indexOf(couleur) > -1)
            ) {
            return true;
        }
        else {
            return false;
        }
    }
}



function CouleurAnalyser(couleur){
    console.log("couleur analyser " + couleur)
    
    let tableauResultat = [];

    TableauElementAjouter(tableauResultat, couleur);

    TableauElementAjouter(
        tableauResultat,
        ContientCouleur(couleur, "rouge")); 

    TableauElementAjouter(
        tableauResultat,
        ContientCouleur(couleur, "jaune")); 

    TableauElementAjouter(
        tableauResultat,
        ContientCouleur(couleur, "bleu")); 

    return tableauResultat;

}