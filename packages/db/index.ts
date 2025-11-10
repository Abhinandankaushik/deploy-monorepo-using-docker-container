import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { PrismaClient } from "../db/generated/prisma/index.js";

export const prismaClient = new PrismaClient();