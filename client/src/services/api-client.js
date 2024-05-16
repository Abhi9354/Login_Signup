import axios from "axios";

export const postData=async(URL,data)=>{
    console.log('data',data);
    console.log('URL',URL);
return await axios.post(URL,data)
}