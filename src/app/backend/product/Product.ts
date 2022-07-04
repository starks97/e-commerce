import { Product, Prisma, Genders } from "@prisma/client";

import { PrismaDB } from "../../db";
import { initialData, SeedData } from "../../../database/products";
import { ValidGenders, shop_genders } from "../../../utils";

export async function createDataProducts() {
  const prisma = await PrismaDB.getInstance();

  try {
    const data = await prisma.product.createMany({
      data: initialData.products,
    });

    return data;
  } catch (err) {
    console.error(err);
    return false;
  } finally {
    await PrismaDB.disconnect();
  }
}

export default async function getAllProductsByGender(
  gender: Genders
): Promise<Product[] | undefined> {
  const prisma = await PrismaDB.getInstance();

  try {
    const products = await prisma.product.findMany({
      where: { gender: { equals: gender } },
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

export async function getAllProducts(): Promise<Product[] | undefined> {
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

export async function updateProduct(
  id: string,
  data: Omit<Partial<Product>, "id " | "created_at" | "slug" | "images">
): Promise<Product | undefined> {
  const prisma = await PrismaDB.getInstance();
  try {
    const products = await prisma.product.update({
      where: {
        id,
      },
      data,
    });
    return products;
  } catch (e) {
    console.error(e);
  } finally {
    await PrismaDB.disconnect();
  }
}

export async function createProduct(
  product: Omit<Product, "id" | "created_at">
): Promise<Product | undefined> {
  const prisma = await PrismaDB.getInstance();
  try {
    const products = await prisma.product.create({
      data: product,
    });
    return products;
  } catch (e) {
    console.error(e);
  } finally {
    await PrismaDB.disconnect();
  }
}

export async function deleteProduct(id: string) {
  const prisma = await PrismaDB.getInstance();
  try {
    const products = await prisma.product.delete({
      where: { id },
    });
    return products;
  } catch (e) {
    console.error(e);
  } finally {
    await PrismaDB.disconnect();
  }
}
