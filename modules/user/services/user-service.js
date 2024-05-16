import { hashPassword, verifyPassword } from "../../../shared/utils/password-hash.js";
import { userModel } from "../db/models/user-schema.js";

export const userService =  {
   async register(userData){
    try{
        userData.password=hashPassword(userData.password)
        const doc= await userModel.create(userData)
        console.log("service screen");
        return doc
    }catch(err){
throw err    }
   
    },
    async login(userData){
        try{
            const doc=await userModel.findOne({"email":userData.email}).select("name password -_id").exec()
            if(doc){
             const hashPassword=doc.password;
             const plaintextPassword=userData.password;
             const isMatch= verifyPassword(plaintextPassword,hashPassword)
             if(isMatch){
                 return {name:doc.name};
             }
             else{
                 return null
             }
            }
            else{
                return null
            }
        }
        catch(err){
throw err        }
        
    }
};