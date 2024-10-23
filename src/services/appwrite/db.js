/* eslint-disable no-unused-vars */
import config from "../../config/appConfig";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class DB {
  client = new Client();
  databases;
  configApp;

  constructor() {
    this.configApp = config.app.appwrite;
    this.client
      .setEndpoint(this.configApp.url)
      .setProject(this.configApp.projectId);
    this.databases = new Databases(this.client);
  }

  async getSeoConfig(type) {
    // Return documents/data according to {type}
    try {
      let res = await this.databases.listDocuments(
        this.configApp.databaseId,
        this.configApp.collections.seo,
        [Query.equal("type", `${type}`)]
      );
      // console.log(
      //   "=============== From Services > appwrite > db.js ==============="
      // );

      // console.log(res.documents);
      return res.documents[0];
    } catch (e) {
      console.log(e);
    }
  }
}

const db = new DB();
export default db;
