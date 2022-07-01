import { PrismaClient } from "@prisma/client";

export default class PrismaDB {
  private static instance: PrismaClient | null;

  public static async getInstance(): Promise<PrismaClient> {
    if (!PrismaDB.instance) {
      PrismaDB.instance = new PrismaClient();
      await PrismaDB.instance.$connect();
    }
    return PrismaDB.instance;
  }
}
