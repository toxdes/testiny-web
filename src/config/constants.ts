const DEBUG_MODE = false;

// let API_BASE_URL = "https://testiny-backend.herokuapp.com/";
let API_BASE_URL = "http://localhost:8000/";

// TODO: Figure out a flawless way to handle production builds
// @body This doesn't seem to work. I think it has to do with `react-scripts build`. So, I need to find a way to set `API_BASE_URL` externally, so that I can conveniently develop and deploy as well. Wasted way too much time on this, hope it's worth it :disappointed:
if (process.env.ENV === "production") {
  API_BASE_URL = process.env.BACKEND_URL as string;
}

export { DEBUG_MODE, API_BASE_URL };
