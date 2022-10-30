import React from "react";
import Files from "react-butterfiles";
/**
 * Retrieve pre-signed POST data from a dedicated API endpoint.
 * @param selectedFile
 * @returns {Promise<any>}
 */
const getPresignedPostData = (selectedFile) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();

    // Set the proper URL here.
    const url = "https://mysite.com/api/files";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        name: selectedFile.name,
        type: selectedFile.type,
      })
    );
    xhr.onload = function () {
      resolve(JSON.parse(this.responseText));
    };
  });
};
/**
 * Upload file to S3 with previously received pre-signed POST data.
 * @param presignedPostData
 * @param file
 * @returns {Promise<any>}
 */
const uploadFileToS3 = (presignedPostData, file) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    Object.keys(presignedPostData.fields).forEach((key) => {
      formData.append(key, presignedPostData.fields[key]);
    });
    // Actual file has to be appended last.
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", presignedPostData.url, true);
    xhr.send(formData);
    xhr.onload = function () {
      this.status === 204 ? resolve() : reject(this.responseText);
    };
  });
};
/**
 * Component renders a simple "Select file..." button which opens a file browser.
 * Once a valid file has been selected, the upload process will start.
 * @returns {*}
 * @constructor
 */
const FileUploadButton = () => (
  <Files
    onSuccess={async ([selectedFile]) => {
      // Step 1 - get pre-signed POST data.
      const { data: presignedPostData } = await getPresignedPostData(
        selectedFile
      );
      // Step 2 - upload the file to S3.
      try {
        const { file } = selectedFile.src;
        await uploadFileToS3(presignedPostData, file);
        console.log("File was successfully uploaded!");
      } catch (e) {
        console.log("An error occurred!", e.message);
      }
    }}
  >
    {({ browseFiles }) => <button onClick={browseFiles}>Select file...</button>}
  </Files>
);
