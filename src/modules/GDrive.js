class GDrive {
  upload(fileContent, accessToken, errorCallback, successCallback) {
    // var fileContent = "sample text"; // As a sample, upload a text file.
    var file = new Blob([fileContent], { type: "text/plain" });
    var metadata = {
      name: "pass-mas.pm", // Filename at Google Drive
      mimeType: "text/plain", // mimeType at Google Drive
      parents: [""], // Folder ID at Google Drive
    };
    // var accessToken = gapi.auth.getToken().access_token; // Here gapi is used for retrieving the access token.
    var form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
      {
        method: "POST",
        headers: new Headers({ Authorization: "Bearer " + accessToken }),
        body: form,
      }
    )
      .then((res) => {
        return res.json();
      })
      .then(function (val) {
        console.log(val);
        successCallback(val);
      })
      .catch((err) => {
        errorCallback(err);
      });
  }

  download() {}
}
