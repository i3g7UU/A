$("#taNotes").val("Dubuda").trigger("input");

setTimeout(function() {
    $.post("/virtualizedmail/envelopeUpdateNote", { envnotes: $("#taNotes").val() }, function(e) {
        $("#divNoteSaved").removeClass("hidden-xs hidden-sm hidden-md hidden-lg");
    });
}, 100); // Small delay to let the UI catch up
