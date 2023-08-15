import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://petition-backend.onrender.com/accounts/token/obtain/",
        req.body
      );
      // Assuming the response contains a token
      const token = response.data.token;

      // Set the token in a secure way (e.g., HTTP-only cookie)
      res.setHeader(
        "Set-Cookie",
        `token=${token}; HttpOnly; Path=/; SameSite=Strict;`
      );

      res.status(response.status).json(response.data);
    } catch (error) {
      res
        .status(error.response?.status || 500)
        .json(error.response?.data || { message: "An error occurred" });
    }
  }
}
