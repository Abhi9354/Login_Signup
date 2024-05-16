import mongoose from "mongoose";

export const dbConnectionLoad=()=>{
    console.log('connection file loaded');

    const promise=mongoose.connect(process.env.DB_URL);
    return promise;
}
export default mongoose
