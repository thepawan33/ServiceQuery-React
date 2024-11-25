const express = require("express");
const app = express();
const mongoose = require("mongoose");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoUrl = process.env.ATLASDB_URL;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const loginRoute = require("./routes/login");
const queryRoute = require("./routes/query");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const Admin = require("./models/admin");
const cors = require("cors");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError");
const MongoStore = require("connect-mongo");

main();

async function main() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connection done");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}

const store = MongoStore.create({
  mongoUrl: mongoUrl,
  touchAfter: 24 * 3600,
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
});

const sessionOptions = {
  store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(flash());
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));

app.use(session(sessionOptions));
app.use(cookieParser(process.env.COOKIE_PARSE_SECRET));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use("/admin", loginRoute);
app.use("/", queryRoute);

app.get("*", (req, res) => {
  throw new ExpressError(404, "Bad Request! Page Not Found");
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went worng" } = err;
  res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("app is listning on 8080");
});
