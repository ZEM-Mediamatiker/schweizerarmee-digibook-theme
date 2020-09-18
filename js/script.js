
// Provisorisch: Inhaltsverzeichnis öffnen

$("document").ready(function() {
    $(".topic-container").click(function() {
        if($(this).find("ol").hasClass("opened")) {
            $(this).find("ol").removeClass("opened");
            $(this).css("padding-bottom", "0");
        } else {
            $(this).find("ol").addClass("opened");
            $(this).css("padding-bottom", "20px");
        }
    }); 
    
});