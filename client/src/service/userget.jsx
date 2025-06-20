 import axios from "axios";

export  default  async function getData() {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/userget");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
} 

