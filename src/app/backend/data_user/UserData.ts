import { PrismaDB } from "../../db";
import { Prisma, UserData } from "@prisma/client";

export default class DataUser {
  static async CreateData({ userId, ...data }: Omit<UserData, "id">) {
    const prisma = await PrismaDB.getInstance();

    try {
      if (data) {
        const data_of_user = await prisma.userData.create({
          data: {
            ...data,
            user: { connect: { id: userId } },
          },
          include: {
            user: false,
          },
        });
        return data_of_user;
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new data cannot be created with this user"
          );
        }
      }
      return null;
    } finally {
      await PrismaDB.disconnect();
    }
  }

  static async GetData(userId: string) {
    const prisma = await PrismaDB.getInstance();
    try {
      if (userId) {
        const data = await prisma.userData.findUnique({
          where: {
            userId,
          },
          select: {
            id: true,
            name: true,
            lastname: true,
            telephone: true,
            city: true,
            address: true,
            zipCode: true,
            country: true,
            address2: true,
          },
        });

        if (!data) return null;
        return data;
      }
    } catch (e) {
      console.error(e);
    } finally {
      await PrismaDB.disconnect();
    }
    return null;
  }

  static async UpdateDataUser(
    id: string,
    data: Omit<UserData, "id" | "userId">
  ) {
    const prisma = await PrismaDB.getInstance();

    try {
      const oldData = await prisma.userData.findUnique({
        where: { id },
      });

      if (!oldData) return null;

      const newData = await prisma.userData.update({
        where: { id },
        data: {
          name: data.name || oldData.name,
          lastname: data.lastname || oldData.lastname,
          telephone: data.telephone || oldData.telephone,
          city: data.city || oldData.city,
          address: data.address || oldData.address,
          zipCode: data.zipCode || oldData.zipCode,
          country: data.country || oldData.country,
        },
      });

      if (!newData) return null;

      return newData;
    } catch (e) {
      console.log(e);
      return null;
    } finally {
      await PrismaDB.disconnect();
    }
  }
}
