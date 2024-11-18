import "reflect-metadata";
import "dotenv/config";
import "./shared/container"
import cors from "cors";
import { AppDataSource } from "@database/data-source";
import express from "express";
import { routes } from "./routes/index";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

const PORT = process.env.PORT || 8080;

AppDataSource.initialize()
    .then(async () => {
        console.log("DATABASE OK!!");
        app.listen(PORT, () => console.log(`System running in port ${PORT}`));
    }
);

