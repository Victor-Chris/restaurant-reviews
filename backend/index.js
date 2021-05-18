import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;
const PORT = process.env.PORT || 3000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolSize: 50,
  //wtimeout: 2500,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit();
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}.`);
    });
  });
