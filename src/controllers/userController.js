const {PhoneUser} = require("../models/user")

const {sentTextMessage} = require("../utils/phoneService")

const userController = {
    auth: (req, resp) => {
        const randomCode = Math.floor(Math.random() * 100000)
        PhoneUser.findOne({phone:req.body.phone})
        .then(data=>{
            if(data){
                data.code = randomCode
                data.save()
                sentTextMessage(req.body.phone,randomCode)
                resp.send("Login Success!")
            }
            else{
                sentTextMessage(req.body.phone,randomCode)
                const newUser = new PhoneUser({
                    phone: req.body.phone,
                    code: randomCode
                })
                newUser.save()
                resp.send("Register Success!")
            }
        })
    },
    confirm:(req,resp)=>{
        PhoneUser.findOne({phone:req.body.phone})
        .then(data=>{
            // if(){
                
            // }
        })
    }
}

module.exports = { userController }