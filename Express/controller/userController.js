const User = require("../schema/userSchema")

const login = async ()=>{

}

const signup = async (req,res) => {
    try {
       let {userName, email, password} = req.body;

       if(!userName || !email || !password){
        res.send({message: "All fields are required"})
       }

      const existingUser = await User.findOne({email})

      if(existingUser){
        res.send({message: "email already exists"})
      }

      const newUser = await User.insertOne({userName,email,password});

      res.send({newUser, message:"Sign-up successfully"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {login,signup}