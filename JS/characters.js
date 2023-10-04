// Found on stackoverflow.com
// get query string parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Custom helper 1: expression
Handlebars.registerHelper("emailFrmt", function(prop) {
    if (prop) {
        return new Handlebars.SafeString("<strong>" + prop + "</strong>");
    }
});

// Custom Helper 2: block
Handlebars.registerHelper("makeItalic", function(props) {
    return new Handlebars.SafeString("<i>" + props.fn(this) + "</i>");
});

// JQuery Document loader
$(document).ready(function(){

    var characterTemplate = $("#character-template").html();

    var compiledCharTemp = Handlebars.compile(characterTemplate);

    var characterId = getParameterByName("id");
    console.log("character id: ", characterId);

    $.ajax("./data/cast.json").done(function(cast){
        //console.log(cast);
        $(".character-list-container").html(compiledCharTemp(cast));

        
    });

    $(".character-list-container").on("click", ".view-details", function(e) {
        e.preventDefault();
        console.log("expand details");
    });
    
});