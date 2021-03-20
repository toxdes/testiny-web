const DEBUG_MODE = false;
let API_BASE_URL = "https://testiny-backend.herokuapp.com/";

if (process.env.ENV === "production") {
  API_BASE_URL = process.env.BACKEND_URL as string;
}

export { DEBUG_MODE, API_BASE_URL };
