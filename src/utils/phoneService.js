const accountSid = 'AC8576888bfb7bd8c4153669c4a452fb6d';
const authToken = '4acda25f01d9a939fbe324ab1ed0714f';
const client = require('twilio')(accountSid, authToken);

function sentTextMessage(userPhone,otp){
    client.messages
    .create({
        body: `Your otp code is ${otp}`,
        from: '+14706135053',
        to: `+994${userPhone}`
    })
    .then(message => console.log(message.sid))
    .catch((error)=>{console.log(error)});
}

module.exports = {
    sentTextMessage
}