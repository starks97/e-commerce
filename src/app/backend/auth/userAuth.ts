import { Prisma, User } from "@prisma/client";
import { GenerateCryptPassword } from "../../utils";
import { PrismaDB } from "../../db";

import { PrismaHandleException, ErrorCodesType } from "../../utils";

export class UserAuth {
  static async registerUser({
    email,
    password,
    name,
    ...user
  }: Omit<User, "createdAt" | "updatedAt">): Promise<Omit<
    User,
    "createdAt" | "updatedAt"
  > | null> {
    const prisma = await PrismaDB.getInstance();

    //hashed password
    password = GenerateCryptPassword.setHashPassword(password);

    try {
      const data = await prisma.user.create({
        data: {
          email,
          password,
          name,
          ...user,
          role: "admin",
        },
      });
      if (!data) return null;
      return data;
    } catch (error) {
      PrismaHandleException.handleError(error as ErrorCodesType);
    } finally {
      await PrismaDB.disconnect();
    }
    return null;
  }

  static async login(email: string, password: string): Promise<User | null> {
    const prisma = await PrismaDB.getInstance();

    try {
      if (password) {
        const data = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!data) return null;

        const isVerifiedPassword = GenerateCryptPassword.compareHashPassword(
          password,
          data.password
        );
        if (!isVerifiedPassword) return null;
        return data;
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P1003") {
          console.log(
            "Database {database_file_name} does not exist at {database_file_path}"
          );
        }
      }
    } finally {
      await PrismaDB.disconnect();
    }
    return null;
  }

  static async verifyId(
    id: string
  ): Promise<Omit<User, "created_at" | "updatedAt" | "password"> | null> {
    const prisma = await PrismaDB.getInstance();

    try {
      if (id) {
        const data = await prisma.user.findMany({
          where: {
            id: {
              equals: id,
            },
          },
          select: {
            id: true,
            email: true,
            role: true,
            name: true,
          },
        });
        if (!data) return null;

        const isVerifiedID = data.find((user) => user.id === id);

        if (!isVerifiedID) return null;

        return isVerifiedID;
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P1000") {
          console.log(
            "Authentication failed against database server at {database_host}, the provided database credentials for {database_user} are not valid. Please make sure to provide valid database credentials for the database server at {database_host}"
          );
        }
      }
    } finally {
      await PrismaDB.disconnect();
    }
    return null;
  }
}
