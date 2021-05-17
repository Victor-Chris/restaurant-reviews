import app from "./server";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const MongoClient = mongodb.MongoClient;
const PORT = process.env.PORT || 3000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit();
  })
  .then(async (client) => {
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}.`);
    });
  });
