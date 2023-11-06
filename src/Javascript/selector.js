$(document).ready(function() {
    $("ul a").click(function(event) {
        event.preventDefault();

        var target = $(this).data("target");
        $(".Developer, .beatmaker, .socialnet").addClass("hidden");
        $("#" + target).removeClass("hidden");
    });

    // Por defecto, mostrar la sección "Developer"
    $("#Developers").removeClass("hidden");
});