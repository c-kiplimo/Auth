import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const dbUrl = `mongodb://${config.get('dbName')}:${config.get(
  'dbPass'
)}@localhost:6000/auth-api?authSource=admin`;

const connectToDb = async () => {

  try {
    await mongoose.connect(dbUrl);
    log.info("Connected to DB");
  } catch (e) {
    process.exit(1);
  }
};

export default connectToDb;
