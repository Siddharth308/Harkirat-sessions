const express = require("express");
const zod = require("zod");
const port = 3000;
const app = express();
app.get("/", function (req, res) {
  res.send("Hello world");
});
const schema = zod.array(zod.number());
app.use(express.json());
app.get("/health-checkup", function (req, res) {
  // const userName = req.headers.username;
  // const password = req.headers.password;
  // const kidneyId = req.query.kidneyId;
  // if (userName != "sid" || password != "pass") {
  //   console.log(userName);
  //   res.status(400).json({ msg: "something went wrong with inputs here" });
  //   return;
  // }
  // if (kidneyId != 1 && kidneyId != 2) {
  //   res.status(400).json("something went wrong with inputs 2");
  // }
  // res.json({
  //   msg: "your kidney is fine.",
  // });

  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  }
  const kidneyLength = kidneys.length;

  res.send("you have" + kidneys + "of" + kidneyLength);
});
// app.post("/backend-api/conversation");
app.listen(port);

// const express = require("express");

// const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "sid" || password != "pass") {
//     res.status(400).json({ msg: "Somethings up with your ionputs here" });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ msg: "Somethings up with your ionputs kidneyId" });
//     return;
//   }
//   // do something with kidney here
//   res.json({
//     msg: "Your kidney is fine!",
//   });
// });

// app.listen(3000);
