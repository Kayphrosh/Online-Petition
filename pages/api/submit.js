// pages/api/submit.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    console.log("Received formData:", formData);
    // Check if the properties exist in formData before accessing them
    const processedData = {
      processedField1: formData.title ? formData.title.toUpperCase() : "",
      processedField2: formData.description
        ? formData.description.toLowerCase()
        : "",
      processedField3: formData.involved_parties
        ? formData.involved_parties.toLowerCase()
        : "",
      processedField4: formData.required_signatures_range
        ? formData.required_signatures_range.toLowerCase()
        : "",
    };

    try {
      // Simulate posting processed data to an external API
      const response = await fetch(
        "https://petition-backend.onrender.com/petitions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(processedData),
        }
      );

      if (response.ok) {
        res
          .status(200)
          .json({ message: "Data processed and submitted successfully" });
      } else {
        res
          .status(500)
          .json({ message: "Error while submitting data to the external API" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error while processing data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
