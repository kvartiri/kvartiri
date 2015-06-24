$(document).ready(function () {
    // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
    var $container = $('div#users_usersbundle_clientsrequests_roomsRequests');

    // On ajoute un lien pour ajouter une nouvelle catégorie
    var $lienAjout = $('<a href="#" id="ajout_adresse" class="btn btn-info">Add additional information</a>');
    $container.append($lienAjout);

    // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.
    $lienAjout.click(function (e) {
        ajouterAdresse($container);
        e.preventDefault(); // évite qu'un # apparaisse dans l'URL
        return false;
    });

    // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
    var index = $container.find(':input').length;

    // On ajoute un premier champ directement s'il n'en existe pas déjà un (cas d'un nouvel article par exemple).
    if (index == 0) {
        ajouterAdresse($container);
    } else {
        // Pour chaque catégorie déjà existante, on ajoute un lien de suppression
        $container.children('div').each(function () {
            ajouterLienSuppression($(this));
        });
    }

    // La fonction qui ajoute un formulaire Categorie
    function ajouterAdresse($container) {
        // Dans le contenu de l'attribut « data-prototype », on remplace :
        // - le texte "__name__label__" qu'il contient par le label du champ
        // - le texte "__name__" qu'il contient par le numéro du champ
        var $prototype = $($container.attr('data-prototype').replace(/__name__label__/g, 'Additional Information n°' + (index + 1))
            .replace(/__name__/g, index));

        // On ajoute au prototype un lien pour pouvoir supprimer la catégorie
        ajouterLienSuppression($prototype);

        // On ajoute le prototype modifié à la fin de la balise <div>
        $container.append($prototype);

        // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro
        index++;
    }

    // La fonction qui ajoute un lien de suppression d'une categorie
    function ajouterLienSuppression($prototype) {
        // Création du lien
        $lienSuppression = $('<a href="#" class="btn btn-danger">Delete</a>');

        // Ajout du lien
        $prototype.append($lienSuppression);

        // Ajout du listener sur le clic du lien
        $lienSuppression.click(function (e) {
            $prototype.remove();
            e.preventDefault(); // évite qu'un # apparaisse dans l
            return false;
        });
    }
});


