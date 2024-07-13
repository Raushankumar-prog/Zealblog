import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectPrisma() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// Call the function to connect to Prisma in your application entry point (e.g., server.ts)

if(connectPrisma()){
    console.log('it is connected');
}else{
    console.log('problem in connecting');
    prisma.$disconnect();
}


export default  prisma;
