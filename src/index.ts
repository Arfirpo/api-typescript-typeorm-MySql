import app from "./app";
import { AppDataSource } from "./database/conexion";

const PORT = 3000;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("The data base is connected.");
    app.listen(PORT, () => {
      console.log(`The server is running at port http://localhost:${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
