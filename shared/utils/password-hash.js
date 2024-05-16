import bcrypt from "bcrypt";
const SALT= 10;
export const hashPassword = (plaintext) => {
    console.log('plaintext',plaintext);
   const password= bcrypt.hashSync(plaintext, SALT);
   console.log('password',password);
   return password;
};

export const verifyPassword = (plaintext, hash) => {
    
    return bcrypt.compareSync(plaintext, hash);
}