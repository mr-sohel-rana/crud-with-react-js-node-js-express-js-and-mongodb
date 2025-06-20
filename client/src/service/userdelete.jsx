 import axios from "axios";

export default async function userdelete(id) {
  try {
    const response = await axios.delete(`http://localhost:5000/api/v1/userDelete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
}
