const express = require("express");
const bodyParser = require("body-parser");
const github = require("./api/github");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:3000",
};

const app = express();
app.use(cors(corsOptions));

const apiPrefix = "/api/scm";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`${apiPrefix}/github`, github);
app.get(`${apiPrefix}/health`, (req, res) => res.json({ msg: "Health OK" }));

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on port ${port}`));