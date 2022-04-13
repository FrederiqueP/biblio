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
    if( primaire == "bleu") {
        return (TableauElementExiste(listeBleu, couleur)
                || TableauElementExiste(listeVert, couleur)
                || TableauElementExiste(listeViolet, couleur)
                || TableauElementExiste(listeMarron, couleur)
                )
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