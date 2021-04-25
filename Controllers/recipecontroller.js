// const Recipe = require("../Models/recipe");
const { NotValid} = require ('../Errors')
module.exports = {
    

    async create(req,res,next){
        try{
            const { title, ingridents, Instruction} = req.body
            if (! title || !ingridents || !Instruction){
                throw new NotValid(['title','ingridents','Instruction'])
            }

        }catch(error){
            next(error)
        }
    
    }
}