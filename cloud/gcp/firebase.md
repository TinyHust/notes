
## cli config
firebase functions:config:set gmail.login=yourlogin@gamail.com gmail.pass=yourpass

## cli get config
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

## firestore field
### map
'favorites.color': 'white'
favorites: {
    color: 'white'
}
### array
music: admin.firestore.FieldValue
    .arrayUnion('epic')
    .arrayRemove('epic')

### timestamp
edited: admin.firestore.FieldValue.serverTimestamp()

### other
admin.firestore.FieldValue.increment(-50)

### delete field
edited: admin.firestore.FieldValue.delete()