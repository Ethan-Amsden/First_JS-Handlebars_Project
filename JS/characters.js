var cast = {
    "characters": [
        {
            "name": "Toothless",
            "shortCode": "toothless.jpg",
            "home": "berk",
            "location": null
        },
        {
            "name": "Viggo Grimborne",
            "shortCode": "viggo-grimborn.jpg",
            "home": "unknown",
            "location": "on a ship"
        },
        {
            "name": "Zuko",
            "shortCode": "zuko.jpg",
            "home": "Fire Nation",
            "location": null
        },
        {
            "name": "Aang",
            "shortCode": "avatar_aang.png",
            "home": "Southern Air Temple",
            "location": "in the sky with Opa"
        }
    ]
};

$(document).ready(function(){

    var characterTemplate = $("#character-template").html();

    var compiledCharTemp = Handlebars.compile(characterTemplate);
    //console.log(compiledCharTemp(cast.characters[0]));

    $(".character-list-container").html(compiledCharTemp(cast));//.characters[3]));
});