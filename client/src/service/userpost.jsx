 import axios from "axios";
 
export default async function postData(name,email,dept) {
  const response=await axios.post('http://localhost:5000/api/v1/user',{name,email,dept})
  return response.data
  
}

 
