import { writeFileSync } from "fs";
import { join } from "path";

async function fetchOpenApi() {
  try {
    // For local development, use the local API server
    // const response = await fetch("https://app.enzo.health/api/openapi.json");

    // For production, use the production API server
    const response = await fetch("https://app.enzo.health/api/openapi.json");
    const data = await response.json();
    writeFileSync(
      join(__dirname, "../openapi.json"),
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    console.error("Failed to fetch OpenAPI spec:", error);
    process.exit(1);
  }
}

fetchOpenApi();
