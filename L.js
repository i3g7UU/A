$("#divNoteSaved").addClass("hidden-xs hidden-sm hidden-md hidden-lg");
  var t = $("#taNotes").val("Johnny");
  $.post("/virtualizedmail/envelopeUpdateNote", {
    envnotes: t
  }, function(e) {
    $("#divNoteSaved").removeClass("hidden-xs hidden-sm hidden-md hidden-lg")
  })
