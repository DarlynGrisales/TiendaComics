import mongoose from "mongoose";

export async function conectarDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Falta MONGODB_URI. Copia .env.example a .env y configura tu conexión a MongoDB.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error.message);
    process.exit(1);
  }
}