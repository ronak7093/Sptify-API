import * as express from "express";
import "reflect-metadata";
import database from "./database";
import server from "./server";
// import firebase from "./firebase";

// export let fireBase;

export default async (app: express.Application) => {
  const connection = await database();
  console.log("DB loaded and connected!");

  await server(app);
  console.log("Server loaded!");

  //   fireBase = await firebase();
};
