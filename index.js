import app from "./app.js";
import { env } from "./util/env.js";

const PORT = env.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Base URL is ${env.baseURL}`);
});