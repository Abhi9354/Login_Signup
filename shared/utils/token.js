import jwt from 'jsonwebtoken'
export const generateToken = (email) => {
    const token=jwt.sign({"email":email},process.env.SECRET_KEY,{expiresIn:"7d"})

    return token;
}
export const verifyToken = (token) => {
    try{
        return jwt.verify(token,process.env.SECRET_KEY)
    }
    catch(err){
        console.log(err)
        return false;
    }
     
}