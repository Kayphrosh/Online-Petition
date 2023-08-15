import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://petition-backend.onrender.com/accounts/register/",
        req.body
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      res
        .status(error.response?.status || 500)
        .json(error.response?.data || { message: "An error occurred" });
    }
  }
}
