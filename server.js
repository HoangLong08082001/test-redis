const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const users_routers = require("./src/routers/users_routers");
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const corsOptions = {
  origin: ["*"], // cho phép domain cụ thể
  methods: ["GET", "POST", "PUT", "DELETE"], // cho phép các method
  allowedHeaders: ["Content-Type", "Authorization"], // headers cho phép
  credentials: true, // cho phép gửi cookie/token
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
users_routers(app);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
  return;
});
