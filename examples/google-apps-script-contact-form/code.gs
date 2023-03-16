function doPost(formData) {
  const sheet = SpreadsheetApp.getActiveSheet();

  sheet.appendRow([new Date(), formData.parameter.name, formData.parameter.email, formData.parameter.message]);

  const email = "medium.hust.lee@gmail.com";
  const subject = "Contact Form Submission";
  const message = "Name: " + formData.parameter.name + "\n" + "Email: " + formData.parameter.email + "\n" + "Message: " + formData.parameter.message;
  MailApp.sendEmail(email, subject, message);

  return ContentService.createTextOutput(JSON.stringify(formData)).setMimeType(ContentService.MimeType.JSON);
}
