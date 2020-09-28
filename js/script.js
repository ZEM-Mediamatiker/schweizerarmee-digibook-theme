
// Provisorisch: Inhaltsverzeichnis öffnen

$("document").ready(function() {
    $(".topic-container").click(function() {
        if($(this).find("ol").css("display") != "none") {
            $(this).find("ol").fadeOut();
            $(this).css("padding-bottom", "");
            $(this).find("figcaption").css("color", "#333");
        } else {
            $(".topic-container").find("ol").css("display", "none");
            $(".topic-container").css("padding-bottom", "");
            $(".topic-container").find("figcaption").css("color", "#333");
            $(this).find("ol").fadeIn();
            $(this).css("padding-bottom", "20px");
            $(this).find("figcaption").css("color", "#006699");
        }
    }); 

    $(".contact").click(function() {
        if($(this).hasClass("open")) {
            $(this).removeClass("open");
        } else {
            $(".contact").removeClass("open");
            $(this).addClass("open");
        }
    });

    /********** Text underline hover 
   $('li').mouseover(function(e)
    {
        e.stopPropagation();
        $(this).css("text-decoration", "underline");
        if($(this).hasClass("hide") || $(this).parent().hasClass("visible")) {
            $(this).css("text-decoration", "");
        }
    });
    
    $('li').mouseout(function()
    {
        $(this).css("text-decoration", "");
    }); */
});