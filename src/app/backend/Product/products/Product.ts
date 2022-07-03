import { Product, Prisma } from "@prisma/client";

import { PrismaDB } from "../../../db";
import { initialData, SeedData } from "../../../../database/products";

export async function createDataProducts() {
  const prisma = await PrismaDB.getInstance();

  try {
    await prisma.product.createMany({
      data: initialData.products,
    });

    return true;
  } catch (err) {
    console.error(err);
    return false;
  } finally {
    await PrismaDB.disconnect();
  }
}

export default async function getAllProducts(): Promise<Product[] | undefined> {
  const prisma = await PrismaDB.getInstance();

  try {
    const products = await prisma.product.findMany({
      select: {
        title: true,
        price: true,
        images: true,
        inStock: true,
        slug: true,
      },
    });
    return products as Product[];
  } catch (e) {
    console.error(e);
  } finally {
    await PrismaDB.disconnect();
  }
}
