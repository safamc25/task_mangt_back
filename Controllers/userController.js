const users = require("../Models/usermodel")


// register logic
exports.register=async(req,res)=>{

      // fetch data from req body
      var { username, email, password } = req.body
    
    try {
        // check user exist in collection     
        const existingUser = await users.findOne({ email })
        // if existing user is an object- only if the user present in collection
        if (existingUser) {
            res.status(401).json("already registered ! ..please login")
        }
        // user not exist then existingUser content will be null
        else {
            // create an object for user 
            const newUser = new users({
                username, email, password
            })
            // save created object in mongodb 
            await newUser.save()

            res.status(201).json("account created successfully!")
        }
    }
    catch {
        res.status(400).json("register api failed")

    }

}

exports.login = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await users.findOne({ email, password })
        if (user) {
          
            res.status(200).json({
                user,
                message:"login success"
              
            })


        }
        else {
            res.status(401).json("incorrect email or password")
        }
    }
    catch {
        res.status(400).json("login api failed")

    }

}
