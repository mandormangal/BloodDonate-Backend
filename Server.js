const express = require("express");
require("dotenv").config()
const cors = require('cors');
const cookie = require("cookie-parser")
const DatabaseConnection = require("./configuration/Database.js")
const donateKhoonRoutes = require("./routes/DonateRoute.js");
const authRoute = require("./routes/AuthRoute.js")
const app = express()
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server start at ${port}`);
})

app.use(express.json())
app.use(cookie());



DatabaseConnection();

app.use("/api/v1", authRoute)
app.use("/auth", authRoute)

app.use("/api/v1/blood", donateKhoonRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "We are running"
    })

})

