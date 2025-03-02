$("#taNotes").val("duhduh").trigger("input"); // Set value and trigger input event

$.post("/virtualizedmail/envelopeUpdateNote", { envnotes: $("#taNotes").val() }, function(e) {
    $("#divNoteSaved").removeClass("hidden-xs hidden-sm hidden-md hidden-lg");
});
