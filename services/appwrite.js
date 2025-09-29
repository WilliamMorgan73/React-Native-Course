import { Account, Client, Databases } from "react-native-appwrite";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_TABLE_NOTES_ID,
  },
};

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectID);

const database = new Databases(client);

const account = new Account(client);

export { account, client, config, database };

