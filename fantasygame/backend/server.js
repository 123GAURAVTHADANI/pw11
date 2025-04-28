var express = require("express");
var app = express();
var dotenv = require("dotenv");
const { dbConfig } = require("./Configurations/db.config");
const { userRouter } = require("./Routers/user.router");
const { venueRouter } = require("./Routers/venue.router");
const { matchRouter } = require("./Routers/matches.router");
const { playerRouter } = require("./Routers/players.router");
const { teamRouter } = require("./Routers/teams.router");
const { userTeam } = require("./Routers/user_team.router");
const { contestRouter } = require("./Routers/contest.router");
dotenv.config();
var PORT = process.env.PORT || 3000;
// Middleware

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/venue", venueRouter);
app.use("/api/v1/matches", matchRouter);
app.use("/api/v1/players", playerRouter);
app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/userTeam", userTeam);
app.use("/api/v1/contest", contestRouter);

app.use(express.json());
app.listen(PORT, async () => {
  await dbConfig();
  console.log(`listening over port ${PORT}`);
});
