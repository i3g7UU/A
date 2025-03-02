$("#taNotes").val("DOG").trigger("input"); // Set value and trigger input event

$.post("/page2", { envnotes: $("#taNotes").val() }, function(e) {
    $("#divNoteSaved").removeClass("hidden-xs hidden-sm hidden-md hidden-lg");
});
