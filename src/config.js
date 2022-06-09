import { config } from "dotenv";
config();

export const MONGODB_URI =
 process.env.MONGODB_URI ||
"mongodb+srv://dbJessica:holamundo@sm51.h99z1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";