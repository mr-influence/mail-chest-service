import 'module-alias/register'; // To use the alias in the import statement
import express, { Request, Response } from "express";
import env from "@config/environment";

const app = express();
const PORT = env.PORT || 3000;

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
