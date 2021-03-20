const DEBUG_MODE = false;
let API_BASE_URL = "http://localhost:8000";

if (process.env.ENV === "production") {
  API_BASE_URL = process.env.BACKEND_URL as string;
}

export default { DEBUG_MODE, API_BASE_URL };
