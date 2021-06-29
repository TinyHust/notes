
## config
firebase functions:config:set gmail.login=yourlogin@gamail.com gmail.pass=yourpass

## get config
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;