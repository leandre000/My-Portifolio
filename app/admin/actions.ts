import { promises as fs } from "fs";
import path from "path";

export async function getContactSubmissions() {
  // Only allow in development
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Contact submissions are only available in development mode"
    );
  }

  try {
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "contact-submissions.json");

    try {
      const contents = await fs.readFile(filePath, "utf8");
      const submissions = JSON.parse(contents);
      return Array.isArray(submissions) ? submissions : [];
    } catch (err) {
      // File might not exist yet, return empty array
      return [];
    }
  } catch (err) {
    console.error("Error reading contact submissions:", err);
    throw new Error("Failed to read contact submissions");
  }
}
