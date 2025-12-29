const app = require("./app");
const Port = 3000;
const mongoose = require("mongoose");

// NOT USING MONGOOSE
// try {
//   mongoose
//     .connect()
//     .then(() => {
//       console.log("yay db connected");
//     });
// } catch (error) {
//   console.log(error);
// }

app.listen(Port, () => {
  console.log("yay server is live");
});
