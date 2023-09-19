const { PhoneUser } = require("../models/user");
const { sentTextMessage } = require("../utils/phoneService");

const userController = {
    auth: (req, resp) => {
        const randomCode = Math.floor(Math.random() * 100000);

        PhoneUser.findOne({ phone: req.body.phone })
            .then(data => {
                if (data) {
                    // User already exists, update the code and send a new code
                    data.code = randomCode;
                    data.save();
                } else {
                    // User does not exist, create a new user with the code
                    const newUser = new PhoneUser({
                        phone: req.body.phone,
                        code: randomCode
                    });
                    newUser.save();
                }

                sentTextMessage(req.body.phone, randomCode);
                resp.send("Confirmation Code Sent!");
            })
            .catch(error => {
                console.error(error);
                resp.status(500).send("Internal Server Error");
            });
    },
    
    confirm: (req, resp) => {
        const enteredCode = req.body.code; // The code entered by the user
        PhoneUser.findOne({ phone: req.body.phone })
            .then(data => {
                if (data) {
                    if (data.code === enteredCode) {
                        resp.send("Code Confirmed!"); // Code matches, login successful
                    } else {
                        resp.status(401).send("Incorrect Code"); // Code does not match, unauthorized
                    }
                } else {
                    resp.status(404).send("User Not Found"); // User not found
                }
            })
            .catch(error => {
                console.error(error);
                resp.status(500).send("Internal Server Error");
            });
    }
};

module.exports = { userController };
