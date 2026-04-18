const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const courseRoutes = require('./routes/Course');
const paymentRoutes = require('./routes/Payment');
const profileRoutes = require('./routes/Profile');
const userRoutes = require('./routes/User');
const contactUsRoute = require("./routes/Contact");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 4000;
database();

//middleWare
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:3000",
  "https://skillsnest-frontend.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: require("os").tmpdir(),
    preserveExtension: true
  })
)
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

//def route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "your server is active"
  })
})

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
})