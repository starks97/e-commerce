import { Product, Prisma, Genders } from "@prisma/client";

import { PrismaDB } from "../../db";
import { initialData } from "../../../database/products";

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

export async function getAllProductsBySlug(
  slug: Product["slug"]
): Promise<Product[] | undefined> {
  const prisma = await PrismaDB.getInstance();

  try {
    const products = await prisma.product.findMany({
      where: { slug },
      select: {
        id: true,
        title: true,
        price: true,
        images: true,
        description: true,
        sizes: true,
        slug: true,
        gender: true,
        inStock: true,
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
    const oldProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!oldProduct) {
      return undefined;
    }

    const products = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title: data.title || oldProduct.title,
        price: data.price || oldProduct.price,
        description: data.description || oldProduct.description,
        inStock: data.inStock || oldProduct.inStock,
        gender: data.gender || oldProduct.gender,
      },
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

export async function searchProducts<T extends string>(
  q: T
): Promise<Product | undefined> {
  const prisma = await PrismaDB.getInstance();
  try {
    const products = await prisma.product.findMany({
      //es para filtar por el campo que se le pase
      where: {
        OR: [
          {
            tags: {
              has: q,
            },
          },
          {
            slug: {
              contains: q,
            },
          },
          {
            title: {
              contains: q,
            },
          },
        ],
      },
      select: {
        title: true,
        description: true,
        price: true,
        images: true,
        inStock: true,
        slug: true,
        tags: true,
      },
    });
    return products as unknown as Product;
  } catch (e) {
    console.error(e);
  } finally {
    await PrismaDB.disconnect();
  }
}

type D = Product["title"] | Product["tags"];
