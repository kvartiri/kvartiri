//$(document).ready(function () {
//
//    // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
//    var $container = $('div#kvartiri_kvartiribundle_rooms_roomSeasons');
//
//    // On ajoute un lien pour ajouter une nouvelle catégorie
//    var $lienAjout = $('<a href="#" id="ajout_adresse" class="btn btn-info">Ajouter de nouveaux media</a>');
//    $container.append($lienAjout);
//
//    // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.
//    $lienAjout.click(function (e) {
//        if (index <= 9) {
//            ajouterAdresse($container);
//        } else if (index === 10) {
//
//            var $lienlimit = $('<h1 class="btn btn-info">vous avez droit a 3 images </h1>');
//            $container.append($lienlimit);
//            $lienAjout.remove();
//
//
//        }
//        e.preventDefault(); // évite qu'un # apparaisse dans l'URL
//        return false;
//    });
//
//    // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
//    var index = $container.find(':input').length;
//
//    // On ajoute un premier champ directement s'il n'en existe pas déjà un (cas d'un nouvel article par exemple).
//    if (index === 0) {
//
//        ajouterAdresse($container);
//
//    } else {
//        // Pour chaque catégorie déjà existante, on ajoute un lien de suppression
//        $container.children('div').each(function () {
//            ajouterLienSuppression($(this));
//        });
//    }
//
//    // La fonction qui ajoute un formulaire Categorie
//    function ajouterAdresse($container) {
//        // Dans le contenu de l'attribut « data-prototype », on remplace :
//        // - le texte "__name__label__" qu'il contient par le label du champ
//        // - le texte "__name__" qu'il contient par le numéro du champ
//        var $prototype = $($container.attr('data-prototype').replace(/__name__label__/g, 'Champs n°' + (index + 1))
//            .replace(/__name__/g, index));
//
//        // On ajoute au prototype un lien pour pouvoir supprimer la catégorie
//        ajouterLienSuppression($prototype, index);
//
//        // On ajoute le prototype modifié à la fin de la balise <div>
//        $container.append($prototype);
//
//        // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro
//        index++;
//    }
//
//    // La fonction qui ajoute un lien de suppression d'une categorie
//    function ajouterLienSuppression($prototype, index) {
//        // Création du lien
//        $lienSuppression = $('<a href="#" class="btn btn-danger">Supprimer</a>');
//
//
//
//        // Ajout du lien
//        $prototype.append($lienSuppression);
//
//        // Ajout du listener sur le clic du lien
//        $lienSuppression.click(function (e) {
//
//            $prototype.remove();
//            e.preventDefault(); // évite qu'un # apparaisse dans l
//            return false;
//        });
//    }
//});





//var $collectionHolder;
//
//// setup an "add a tag" link
//var $addTagLink = $('<a href="#" class="add_tag_link">Add a tag</a>');
//var $newLinkLi = $('<li></li>').append($addTagLink);
//
//jQuery(document).ready(function() {
//    // Get the ul that holds the collection of tags
//    $collectionHolder = $('div#kvartiri_kvartiribundle_rooms_roomSeasons');
//
//    // add a delete link to all of the existing tag form li elements
//    $collectionHolder.find('li').each(function() {
//        addTagFormDeleteLink($(this));
//    });
//
//    // add the "add a tag" anchor and li to the tags ul
//    $collectionHolder.append($newLinkLi);
//
//    // count the current form inputs we have (e.g. 2), use that as the new
//    // index when inserting a new item (e.g. 2)
//    $collectionHolder.data('index', $collectionHolder.find(':input').length);
//
//    $addTagLink.on('click', function(e) {
//        // prevent the link from creating a "#" on the URL
//        e.preventDefault();
//
//        // add a new tag form (see next code block)
//        addTagForm($collectionHolder, $newLinkLi);
//
//        // add a delete link to the new form
//        addTagFormDeleteLink($newFormLi);
//    });
//});
//
//function addTagFormDeleteLink($tagFormLi) {
//    var $removeFormA = $('<a href="#">delete this tag</a>');
//    $tagFormLi.append($removeFormA);
//
//    $removeFormA.on('click', function(e) {
//        // prevent the link from creating a "#" on the URL
//        e.preventDefault();
//
//        // remove the li for the tag form
//        $tagFormLi.remove();
//    });
//}
//
//function addTagForm($collectionHolder, $newLinkLi) {
//    // Get the data-prototype explained earlier
//    var prototype = $collectionHolder.data('prototype');
//
//    // get the new index
//    var index = $collectionHolder.data('index');
//
//    // Replace '__name__' in the prototype's HTML to
//    // instead be a number based on how many items we have
//    var newForm = prototype.replace(/__name__/g, index);
//
//    // increase the index with one for the next item
//    $collectionHolder.data('index', index + 1);
//
//    // Display the form in the page in an li, before the "Add a tag" link li
//    var $newFormLi = $('<li></li>').append(newForm);
//    $newLinkLi.before($newFormLi);
//}