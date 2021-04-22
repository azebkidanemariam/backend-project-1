const {InvalidBody} = require ('../Errors')
const User = require('../Models/User')


module.exports = {
    async register(req,res,next){
        try{
            const{email,name,password} = req.body

            if(!email || !name || !password){
                throw new InvalidBody(['email','name','password'])
            }

            const user= await User.create({email,name,password})
            res.json({message: 'User registered'})

        }catch(error){next(error)}
        
        },
      
    }
